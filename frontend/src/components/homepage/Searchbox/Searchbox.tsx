'use client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'components/ui/select';
import { Button } from 'components/ui/button';
import { useQuery } from '@apollo/client';
import { filters_listLocations, filters_listPropertyTypes } from 'components/properties/Filters/FiltersPanel';
import { useFilters } from 'contexts/FiltersContext';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useQueryParams } from 'hooks/useQueryParams';
import { MultiSelect } from 'components/ui/multi-select';

const Searchbox = () => {
	const { filters, setFilters, handleApplyFilters } = useFilters();
	const router = useRouter();
	const path = usePathname();
	const { createOrDeleteQueryParams } = useQueryParams();
	const searchParams = useSearchParams();

	const { data: locationsList } = useQuery(filters_listLocations);
	const { data: propertyTypeList } = useQuery(filters_listPropertyTypes);

	const locations = locationsList?.listLocations.LocationData.ProvinceArea.Locations.Location ?? [];
	const transformedLocations = locations.map((item) => ({ label: item, value: item }));

	const propertyTypes = propertyTypeList?.listPropertyTypes.PropertyTypes.PropertyType ?? [];
	const flattenPropertyTypes = propertyTypes.flatMap((pt) => pt.SubType.flatMap((st) => st));
	const transformedPropertyTypes = flattenPropertyTypes.map((item) => ({ label: item.Type, value: item.OptionValue }));

	return (
		<div className={'flex flex-col lg:flex-row lg:w-[850px] items-center gap-[20px] bg-white/10 rounded-xl p-[10px] mt-[20px] text-black'}>
			<div className={'flex flex-col lg:flex-row items-center bg-white w-full p-[5px] rounded-xl'}>
				<MultiSelect
					options={transformedLocations}
					onValueChange={(value: string | string[]) => {
						setFilters((prev) => ({
							...prev,
							location: typeof value === 'string' ? value.split(',') : value,
						}));
						router.push(`${path}?${createOrDeleteQueryParams('location', value?.toString())}`);
					}}
					placeholder={'Lokalita'}
					variant={'inverted'}
					animation={2}
					maxCount={0}
					className={'border-0 font-normal'}
				/>
				<MultiSelect
					options={transformedPropertyTypes}
					onValueChange={(value: string | string[]) => {
						setFilters((prev) => ({
							...prev,
							propertyType: typeof value === 'string' ? value.split(',') : value,
						}));
						router.push(`${path}?${createOrDeleteQueryParams('propertyType', value?.toString())}`);
					}}
					placeholder={'Typ nemovitosti'}
					variant={'inverted'}
					animation={2}
					maxCount={0}
					className={'border-0 font-normal'}
				/>
				<Select
					value={filters.bedsCount?.toString()}
					onValueChange={(value) => {
						setFilters((prev) => ({
							...prev,
							bedsCount: parseInt(value?.toString() ?? ''),
						}));
						router.push(`${path}?${createOrDeleteQueryParams('bedsCount', value?.toString())}`);
					}}
				>
					<SelectTrigger className={'rounded-none border-none ring-0 focus:ring-0 focus:ring-white'}>
						<SelectValue placeholder={'Ložnice'} />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value={'1+'}>1+</SelectItem>
						<SelectItem value={'2+'}>2+</SelectItem>
						<SelectItem value={'3+'}>3+</SelectItem>
						<SelectItem value={'4+'}>4+</SelectItem>
						<SelectItem value={'5+'}>5+</SelectItem>
					</SelectContent>
				</Select>
				<Select
					value={filters.bathsCount?.toString()}
					onValueChange={(value) => {
						setFilters((prev) => ({
							...prev,
							bathsCount: parseInt(value?.toString() ?? ''),
						}));
						router.push(`${path}?${createOrDeleteQueryParams('bathsCount', value?.toString())}`);
					}}
				>
					<SelectTrigger className={'rounded-none border-none ring-0 focus:ring-0 focus:ring-white'}>
						<SelectValue placeholder={'Koupelny'} />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value={'1+'}>1+</SelectItem>
						<SelectItem value={'2+'}>2+</SelectItem>
						<SelectItem value={'3+'}>3+</SelectItem>
						<SelectItem value={'4+'}>4+</SelectItem>
						<SelectItem value={'5+'}>5+</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<Button
				className={'w-full lg:w-fit'}
				onClick={() => {
					if (Object.keys(filters).length !== 0) {
						router.push(`/properties?${searchParams.toString()}`);
						handleApplyFilters();
					}
				}}
			>
				Hledat
			</Button>
		</div>
	);
};

export default Searchbox;
