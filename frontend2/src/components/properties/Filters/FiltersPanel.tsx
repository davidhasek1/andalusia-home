'use client';
import { MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { PriceRange } from './PriceRange';

export const MIN_PRICE_RANGE = 0;
export const MAX_PRICE_RANGE = 1000000;
export const FiltersPanel: FC = () => {
	const [rangeValue, setRangeValue] = useState<number[]>([MIN_PRICE_RANGE, MAX_PRICE_RANGE]);
	console.log('[rangeValue]', rangeValue);
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
			<TextField />
		</Stack>
	);
};
