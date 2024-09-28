/* eslint-disable formatjs/no-literal-string-in-jsx */
'use client';
import { Button, FormControl, InputLabel, MenuItem, Select, Stack, Typography, useTheme } from '@mui/material';
import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import { PriceRange } from './PriceRange';
import { useFilters } from '../../../contexts/FiltersContext';
import { usePathname, useRouter } from 'next/navigation';
import { useQueryParams } from '../../../hooks/useQueryParams';
import { graphql } from '../../../gql';
import { useQuery } from '@apollo/client';
import { FormattedMessage } from '../../utils/FormattedMessage';

export const MIN_PRICE_RANGE = 0;
export const MAX_PRICE_RANGE = 1000000;

export const filters_listLocations = graphql(`
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

export const filters_listPropertyTypes = graphql(`
	query filters_listPropertyTypes {
		listPropertyTypes {
			PropertyTypes {
				PropertyType {
					Type
					SubType {
						Type
						OptionValue
					}
				}
			}
		}
	}
`);

export const FiltersPanel: FC = () => {
	const theme = useTheme();
	const router = useRouter();
	const path = usePathname();
	const { createOrDeleteQueryParams } = useQueryParams();
	const { data: locationsList } = useQuery(filters_listLocations);
	const { data: propertyTypeList } = useQuery(filters_listPropertyTypes);
	const intl = useTranslations();
	const { filters, setFilters, handleApplyFilters } = useFilters();

	if (path !== '/properties') {
		return null;
	}
	const locations = locationsList?.listLocations.LocationData.ProvinceArea.Locations.Location ?? [];
	const propertyTypes = propertyTypeList?.listPropertyTypes.PropertyTypes.PropertyType ?? [];
	const flattenPropertyTypes = propertyTypes.flatMap((pt) => pt.SubType.flatMap((st) => st));

	return (
		<Stack width={300} minHeight={'100%'} px={2} py={5} gap={2} borderRight={{ lg: `1px solid ${theme.palette.grey[300]}`, xs: 'none' }}>
			<Typography variant={'h5'}>
				<FormattedMessage id={'properties.filters.title'} />
			</Typography>
			<PriceRange />
			{/*  TODO: REFACTOR, split reuse */}
			<Typography variant={'body1'}>
				<FormattedMessage id={'filters.property-type.title'} />
			</Typography>
			<FormControl>
				<InputLabel sx={{ backgroundColor: '#fff', px: 1 }}>
					<FormattedMessage id={'properties.filters.property-type'} />
				</InputLabel>
				<Select
					multiple
					value={typeof filters.propertyType === 'string' ? (filters.propertyType as string).split(',') : filters.propertyType || []}
					onChange={(e) => {
						setFilters((prev) => ({
							...prev,
							propertyType: typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value,
						}));
						router.push(`${path}?${createOrDeleteQueryParams('propertyType', e?.target?.value?.toString())}`);
					}}
				>
					{flattenPropertyTypes.map((pt) => {
						return (
							<MenuItem key={pt.Type} value={pt.OptionValue}>
								{pt.Type}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
			<FormControl>
				<InputLabel sx={{ backgroundColor: '#fff', px: 1 }}>
					<FormattedMessage id={'properties.filters.location'} />
				</InputLabel>
				<Select
					multiple
					value={typeof filters.location === 'string' ? (filters.location as string).split(',') : filters.location || []}
					onChange={(e) => {
						setFilters((prev) => ({
							...prev,
							location: typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value,
						}));
						router.push(`${path}?${createOrDeleteQueryParams('location', e?.target?.value?.toString())}`);
					}}
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
			</FormControl>
			<FormControl>
				<InputLabel sx={{ backgroundColor: '#fff', px: 1 }}>
					<FormattedMessage id={'properties.filters.beds-count'} />
				</InputLabel>
				<Select
					value={filters.bedsCount}
					placeholder={intl('properties.filters.not-selected')}
					onChange={(e) => {
						setFilters((prev) => ({
							...prev,
							bedsCount: parseInt(e?.target?.value?.toString() ?? ''),
						}));
						router.push(path + '?' + createOrDeleteQueryParams('bedsCount', e?.target?.value?.toString()));
					}}
				>
					<MenuItem>
						<FormattedMessage id={'properties.filters.not-selected'} />
					</MenuItem>
					<MenuItem value={1}>1+</MenuItem>
					<MenuItem value={2}>2+</MenuItem>
					<MenuItem value={3}>3+</MenuItem>
					<MenuItem value={4}>4+</MenuItem>
					<MenuItem value={5}>5+</MenuItem>
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
						router.push(path + '?' + createOrDeleteQueryParams('bathsCount', e?.target?.value?.toString()));
					}}
				>
					<MenuItem>
						<FormattedMessage id={'properties.filters.not-selected'} />
					</MenuItem>
					<MenuItem value={1}>1+</MenuItem>
					<MenuItem value={2}>2+</MenuItem>
					<MenuItem value={3}>3+</MenuItem>
					<MenuItem value={4}>4+</MenuItem>
					<MenuItem value={5}>5+</MenuItem>
				</Select>
			</FormControl>
			<Button href={'/properties'}>
				<FormattedMessage id={'properties.filters.reset-filters'} />
			</Button>
			<Button variant={'contained'} onClick={handleApplyFilters}>
				<FormattedMessage id={'properties.filters.apply-filters'} />
			</Button>
		</Stack>
	);
};
