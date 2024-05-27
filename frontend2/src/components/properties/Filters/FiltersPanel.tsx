/* eslint-disable formatjs/no-literal-string-in-jsx */
'use client';
import { Button, FormControl, InputLabel, MenuItem, Select, Stack, Typography, useTheme } from '@mui/material';
import { FC, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { PriceRange } from './PriceRange';
import { useFilters } from '../../../contexts/FiltersContext';
import { usePathname, useRouter } from 'next/navigation';
import { useQueryParams } from '../../../hooks/useQueryParams';
import { graphql } from '../../../gql';
import { useQuery } from '@apollo/client';

export const MIN_PRICE_RANGE = 0;
export const MAX_PRICE_RANGE = 1000000;

const filters_listLocations = graphql(`
	query filters_listLocations {
		listLocations {
			LocationData {
				ProvinceArea {
					ProvinceAreaName
					Locations {
						Location
					}
				}
			}
		}
	}
`);

export const FiltersPanel: FC = () => {
	const [rangeValue, setRangeValue] = useState<number[]>([MIN_PRICE_RANGE, MAX_PRICE_RANGE]);
	const theme = useTheme();
	const router = useRouter();
	const path = usePathname();
	const { createQueryString, removeQueryParam } = useQueryParams();
	const { data } = useQuery(filters_listLocations);

	const { filters, setFilters } = useFilters();

	if (path !== '/properties') {
		return null;
	}
	const locations = data?.listLocations.LocationData.ProvinceArea.Locations.Location ?? [];

	return (
		<Stack minWidth={300} minHeight={'100%'} px={2} py={5} gap={2} borderRight={{ lg: `1px solid ${theme.palette.grey[300]}`, xs: 'none' }}>
			<Typography variant={'h5'}>
				<FormattedMessage id={'properties.filters.title'} />
			</Typography>
			<PriceRange rangeValue={rangeValue} setRangeValue={setRangeValue} />

			<FormControl>
				<InputLabel sx={{ backgroundColor: '#fff', px: 1 }}>
					<FormattedMessage id={'properties.filters.location'} />
				</InputLabel>
				<Select
					value={filters.location}
					onChange={(e) => {
						console.log('lco qs', e.target.value);
						setFilters((prev) => ({
							...prev,
							location: e.target.value,
						}));
						router.push(
							`${path}?${
								//Temporary solution for deleting param form QS
								e.target.value == null ? removeQueryParam('location') : createQueryString('location', e?.target?.value?.toString() ?? '')
							}`,
						);
					}}
				>
					<MenuItem>-</MenuItem>
					{locations.map((loc) => (
						<MenuItem key={loc} value={loc}>
							{loc}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl>
				<InputLabel sx={{ backgroundColor: '#fff', px: 1 }}>
					<FormattedMessage id={'properties.filters.beds-count'} />
				</InputLabel>
				<Select
					value={filters.bedsCount}
					onChange={(e) => {
						setFilters((prev) => ({
							...prev,
							bedsCount: parseInt(e?.target?.value?.toString() ?? ''),
						}));
						router.push(path + '?' + createQueryString('bedsCount', e?.target?.value?.toString() ?? ''));
					}}
				>
					<MenuItem value={1}>1</MenuItem>
					<MenuItem value={2}>2</MenuItem>
					<MenuItem value={3}>3</MenuItem>
					<MenuItem value={4}>4</MenuItem>
					<MenuItem value={5}>5</MenuItem>
				</Select>
			</FormControl>
			<FormControl>
				<InputLabel sx={{ backgroundColor: '#fff', px: 1 }}>
					<FormattedMessage id={'properties.filters.baths-count'} />
				</InputLabel>
				<Select
					value={filters.bathsCount}
					onChange={(e) => {
						setFilters((prev) => ({
							...prev,
							bathsCount: parseInt(e?.target?.value?.toString() ?? ''),
						}));
						router.push(path + '?' + createQueryString('bathsCount', e?.target?.value?.toString() ?? ''));
					}}
				>
					<MenuItem value={1}>1</MenuItem>
					<MenuItem value={2}>2</MenuItem>
					<MenuItem value={3}>3</MenuItem>
					<MenuItem value={4}>4</MenuItem>
					<MenuItem value={5}>5</MenuItem>
				</Select>
			</FormControl>

			<Button href={'/properties'}>Clear all</Button>
		</Stack>
	);
};
