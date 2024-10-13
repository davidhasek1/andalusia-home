'use client';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem } from 'components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'components/ui/select';
import { Button } from 'components/ui/button';
import { useQuery } from '@apollo/client';
import { filters_listLocations, filters_listPropertyTypes } from 'components/properties/Filters/FiltersPanel';

type Inputs = {
	location: string;
	propertyType: string;
	bedrooms: string;
	bathrooms: string;
};

const Searchbox = () => {
	const form = useForm({
		defaultValues: {
			location: '',
			propertyType: '',
			bedrooms: '',
			bathrooms: '',
		},
	});

	const { data: locationsList } = useQuery(filters_listLocations);
	const { data: propertyTypeList } = useQuery(filters_listPropertyTypes);

	const locations = locationsList?.listLocations.LocationData.ProvinceArea.Locations.Location ?? [];
	const propertyTypes = propertyTypeList?.listPropertyTypes.PropertyTypes.PropertyType ?? [];
	const flattenPropertyTypes = propertyTypes.flatMap((pt) => pt.SubType.flatMap((st) => st));

	const onSubmit = (values: Inputs) => {
		console.log(values);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className={'flex flex-col lg:flex-row lg:w-[850px] items-center gap-[20px] bg-white/10 rounded-xl p-[10px] mt-[20px]'}
			>
				<div className={'flex flex-col lg:flex-row items-center bg-white w-full p-[5px] rounded-xl'}>
					<FormField
						control={form.control}
						name={'location'}
						render={({ field }) => (
							<FormItem className={'flex-1'}>
								<Select onValueChange={field.onChange}>
									<FormControl>
										<SelectTrigger className={'rounded-none border-none ring-0 focus:ring-0 focus:ring-white'}>
											<SelectValue placeholder={'Lokalita'} />
										</SelectTrigger>
									</FormControl>
									<SelectContent aria-multiselectable>
										{locations.map((item, idx) => (
											<SelectItem key={idx} value={item}>
												{item}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name={'propertyType'}
						render={({ field }) => (
							<FormItem className={'flex-1'}>
								<Select onValueChange={field.onChange}>
									<FormControl>
										<SelectTrigger className={'rounded-none border-none ring-0 focus:ring-0 focus:ring-white'}>
											<SelectValue placeholder={'Typ nemovitosti'} />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{flattenPropertyTypes.map((item, idx) => (
											<SelectItem key={idx} value={item.OptionValue}>
												{item.Type}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name={'bedrooms'}
						render={({ field }) => (
							<FormItem className={'flex-1'}>
								<Select onValueChange={field.onChange}>
									<FormControl>
										<SelectTrigger className={'rounded-none border-none ring-0 focus:ring-0 focus:ring-white'}>
											<SelectValue placeholder={'Ložnice'} />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value={'1+'}>1+</SelectItem>
										<SelectItem value={'2+'}>2+</SelectItem>
										<SelectItem value={'3+'}>3+</SelectItem>
										<SelectItem value={'4+'}>4+</SelectItem>
										<SelectItem value={'5+'}>5+</SelectItem>
									</SelectContent>
								</Select>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name={'bathrooms'}
						render={({ field }) => (
							<FormItem className={'flex-1'}>
								<Select onValueChange={field.onChange}>
									<FormControl>
										<SelectTrigger className={'rounded-none border-none ring-0 focus:ring-0 focus:ring-white'}>
											<SelectValue placeholder={'Koupelny'} />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value={'1+'}>1+</SelectItem>
										<SelectItem value={'2+'}>2+</SelectItem>
										<SelectItem value={'3+'}>3+</SelectItem>
										<SelectItem value={'4+'}>4+</SelectItem>
										<SelectItem value={'5+'}>5+</SelectItem>
									</SelectContent>
								</Select>
							</FormItem>
						)}
					/>
				</div>
				<Button type={'submit'} className={'w-full lg:w-fit'}>
					Hledat
				</Button>
			</form>
		</Form>
	);
};

export default Searchbox;
