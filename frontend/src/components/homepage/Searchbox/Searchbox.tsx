/* eslint-disable formatjs/no-literal-string-in-jsx */
import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Button, InputBase, Stack, FormLabel } from '@mui/material';
import { styled } from '@mui/system';
import { useFilters } from '../../../contexts/FiltersContext';
import { FormattedMessage, useIntl } from 'react-intl';
import { useRouter } from 'next/navigation';
import { useQuery } from '@apollo/client';
import { filters_listLocations, filters_listPropertyTypes } from '../../properties/Filters/FiltersPanel';

const CustomInput = styled(InputBase)(({ theme }) => ({
	'& .MuiInputBase-input': {
		backgroundColor: 'white',
		padding: theme.spacing(1),
		borderRadius: theme.shape.borderRadius,
		width: '100%',
		border: '1px solid',
	},
}));

const CustomFormControl = styled(FormControl)(({ theme }) => ({
	minWidth: 200,
}));

const SearchForm = () => {
	const intl = useIntl();
	const router = useRouter();

	const { filters, setFilters } = useFilters();
	const { data: locationsList } = useQuery(filters_listLocations);
	const { data: propertyTypeList } = useQuery(filters_listPropertyTypes);

	const locations = locationsList?.listLocations.LocationData.ProvinceArea.Locations.Location ?? [];
	const propertyTypes = propertyTypeList?.listPropertyTypes.PropertyTypes.PropertyType ?? [];
	const flattenPropertyTypes = propertyTypes.flatMap((pt) => pt.SubType.flatMap((st) => st));

	console.log('FIlters', filters);

	const handleSearch = () => {
		console.log('Hledání s hodnotami:', filters);
		let qs = `/properties?`;
		if (filters.location?.length !== 0) {
			qs = qs + `location=${filters.location}`;
		}
		if (filters.propertyType?.length !== 0) {
			qs = qs + `&propertyType=${filters.propertyType}`;
		}
		if (filters.bedsCount) {
			qs = qs + `&bedsCount=${filters.bedsCount}`;
		}
		if (filters.bathsCount) {
			qs = qs + `&bathsCount=${filters.bathsCount}`;
		}

		if (qs.includes('/properties?&')) {
			qs.replace('/properties?&', '/properties?');
		}
		router.replace(qs);
	};

	return (
		<Stack
			direction={{ lg: 'row', xs: 'column' }}
			position={'absolute'}
			bottom={{ xs: -40 }}
			justifyContent={'center'}
			flexWrap={'nowrap'}
			sx={{ bgcolor: '#fff' }}
			width={{ lg: 'inherit', xs: '100%' }}
		>
			<Stack direction={{ lg: 'row', xs: 'column' }} p={2} gap={2} flexWrap={'wrap'}>
				<CustomFormControl variant={'outlined'}>
					<FormLabel>
						<FormattedMessage id={'properties.filters.location'} />
					</FormLabel>
					<Select
						multiple
						value={typeof filters.location === 'string' ? (filters.location as string).split(',') : filters.location || []}
						onChange={(e) => {
							setFilters((prev) => ({
								...prev,
								location: typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value,
							}));
						}}
						input={<CustomInput />}
					>
						<MenuItem>
							<FormattedMessage id={'properties.filters.not-selected'} />
						</MenuItem>
						{locations.map((loc) => (
							<MenuItem key={loc} value={loc}>
								{loc}
							</MenuItem>
						))}
					</Select>
				</CustomFormControl>

				<CustomFormControl variant={'outlined'}>
					<FormLabel>
						<FormattedMessage id={'properties.filters.property-type'} />
					</FormLabel>
					<Select
						multiple
						value={typeof filters.propertyType === 'string' ? (filters.propertyType as string).split(',') : filters.propertyType || []}
						onChange={(e) => {
							setFilters((prev) => ({
								...prev,
								propertyType: typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value,
							}));
						}}
						input={<CustomInput />}
					>
						{flattenPropertyTypes.map((pt) => {
							return (
								<MenuItem key={pt.Type} value={pt.OptionValue}>
									{pt.Type}
								</MenuItem>
							);
						})}
					</Select>
				</CustomFormControl>

				<CustomFormControl variant={'outlined'}>
					<FormLabel>
						<FormattedMessage id={'properties.filters.beds-count'} />
					</FormLabel>
					<Select
						value={filters.bedsCount}
						placeholder={intl.formatMessage({ id: 'properties.filters.not-selected' })}
						onChange={(e) => {
							setFilters((prev) => ({
								...prev,
								bedsCount: parseInt(e?.target?.value?.toString() ?? ''),
							}));
						}}
						input={<CustomInput />}
					>
						<MenuItem>
							<FormattedMessage id={'properties.filters.not-selected'} />
						</MenuItem>
						<MenuItem value={1}>1</MenuItem>
						<MenuItem value={2}>2</MenuItem>
						<MenuItem value={3}>3</MenuItem>
						<MenuItem value={4}>4</MenuItem>
						<MenuItem value={5}>5</MenuItem>
					</Select>
				</CustomFormControl>

				<CustomFormControl variant={'outlined'}>
					<FormLabel>
						<FormattedMessage id={'properties.filters.baths-count'} />
					</FormLabel>
					<Select
						value={filters.bathsCount}
						onChange={(e) => {
							setFilters((prev) => ({
								...prev,
								bathsCount: parseInt(e?.target?.value?.toString() ?? ''),
							}));
						}}
						input={<CustomInput />}
					>
						<MenuItem>
							<FormattedMessage id={'properties.filters.not-selected'} />
						</MenuItem>
						<MenuItem value={1}>1</MenuItem>
						<MenuItem value={2}>2</MenuItem>
						<MenuItem value={3}>3</MenuItem>
						<MenuItem value={4}>4</MenuItem>
						<MenuItem value={5}>5</MenuItem>
					</Select>
				</CustomFormControl>
			</Stack>
			<Button sx={{ borderRadius: 0 }} variant={'contained'} color={'primary'} onClick={handleSearch}>
				Hledat
			</Button>
		</Stack>
	);
};

export default SearchForm;
