import { FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { MAX_PRICE_RANGE } from './FiltersPanel';
import { useTranslations } from 'next-intl';
import { useQueryParams } from '../../../hooks/useQueryParams';
import { useFilters } from '../../../contexts/FiltersContext';
import { usePathname, useRouter } from 'next/navigation';
import { formatNumber } from '../../../helpers/formatNumber';
import { createPriceOptions } from './helpers/createPriceOptions';
import { getSubArrayFromValue } from './helpers/getSubArrayFromValue';
import { FormattedMessage } from '../../utils/FormattedMessage';

export const PriceRange: FC = () => {
	const router = useRouter();
	const path = usePathname();
	const { createOrDeleteQueryParams } = useQueryParams();
	const intl = useTranslations();
	const { filters, setFilters } = useFilters();

	const priceOptions = createPriceOptions(MAX_PRICE_RANGE);
	const slicedPrices = getSubArrayFromValue(filters.minPrice as number, priceOptions);

	return (
		<Stack gap={2}>
			<Typography variant={'body1'}>
				<FormattedMessage id={'filters.price-range.title'} />
			</Typography>

			<FormControl>
				<InputLabel sx={{ backgroundColor: '#fff', px: 1 }}>
					<FormattedMessage id={'properties.filters.min-price'} />
				</InputLabel>
				<Select
					value={filters.minPrice}
					placeholder={intl('properties.filters.not-selected')}
					onChange={(e) => {
						setFilters((prev) => ({
							...prev,
							minPrice: Number(e?.target?.value?.toString() ?? null),
						}));
						router.push(path + '?' + createOrDeleteQueryParams('minPrice', e?.target?.value?.toString()));
					}}
				>
					<MenuItem value={''}>
						<FormattedMessage id={'properties.filters.not-selected'} />
					</MenuItem>
					{priceOptions.map((price) => (
						<MenuItem key={price} value={price}>
							{formatNumber(price)}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl>
				<InputLabel sx={{ backgroundColor: '#fff', px: 1 }}>
					<FormattedMessage id={'properties.filters.max-price'} />
				</InputLabel>
				<Select
					value={filters.maxPrice}
					placeholder={intl('properties.filters.not-selected')}
					onChange={(e) => {
						setFilters((prev) => ({
							...prev,
							maxPrice: parseInt(e?.target?.value?.toString() ?? ''),
						}));
						router.push(path + '?' + createOrDeleteQueryParams('maxPrice', e?.target?.value?.toString()));
					}}
				>
					<MenuItem>
						<FormattedMessage id={'properties.filters.not-selected'} />
					</MenuItem>

					{filters.minPrice == null &&
						priceOptions.map((price) => (
							<MenuItem key={price} value={price}>
								{formatNumber(price)}
							</MenuItem>
						))}
					{slicedPrices.map((price) => (
						<MenuItem key={price} value={price}>
							{formatNumber(price)}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Stack>
	);
};
