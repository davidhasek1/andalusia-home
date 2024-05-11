/* eslint-disable formatjs/no-literal-string-in-jsx */
'use client';
import { MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { PriceRange } from './PriceRange';
import { useFilters } from '../../../contexts/FiltersContext';

export const MIN_PRICE_RANGE = 0;
export const MAX_PRICE_RANGE = 1000000;
export const FiltersPanel: FC = () => {
	const [rangeValue, setRangeValue] = useState<number[]>([MIN_PRICE_RANGE, MAX_PRICE_RANGE]);
	const { filters, setFilters } = useFilters();
	return (
		<Stack minWidth={300} px={2} py={5} gap={2} borderRight={(theme) => `1px solid ${theme.palette.grey[300]}`}>
			<Typography variant={'h5'}>
				<FormattedMessage id={'properties.filters.title'} />
			</Typography>
			<PriceRange rangeValue={rangeValue} setRangeValue={setRangeValue} />

			<Select value={20}>
				<MenuItem value={10}>Elviria</MenuItem>
				<MenuItem value={20}>Marbesa</MenuItem>
				<MenuItem value={30}>Malaga</MenuItem>
			</Select>
			<Select
				value={filters.bedsCount}
				onChange={(e) =>
					setFilters((prev) => ({
						...prev,
						bedsCount: parseInt(e.target.value.toString()),
					}))
				}
			>
				<MenuItem value={1}>1</MenuItem>
				<MenuItem value={2}>2</MenuItem>
				<MenuItem value={3}>3</MenuItem>
				<MenuItem value={4}>4</MenuItem>
				<MenuItem value={5}>5</MenuItem>
			</Select>
			<Select
				value={filters.bathsCount}
				onChange={(e) =>
					setFilters((prev) => ({
						...prev,
						bathsCount: parseInt(e.target.value.toString()),
					}))
				}
			>
				<MenuItem value={1}>1</MenuItem>
				<MenuItem value={2}>2</MenuItem>
				<MenuItem value={3}>3</MenuItem>
				<MenuItem value={4}>4</MenuItem>
				<MenuItem value={5}>5</MenuItem>
			</Select>
		</Stack>
	);
};
