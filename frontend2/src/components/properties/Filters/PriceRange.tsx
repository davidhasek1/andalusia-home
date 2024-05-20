import { Stack, TextField, Typography } from '@mui/material';
import { ChangeEvent, FC, SetStateAction, useState } from 'react';
import { MAX_PRICE_RANGE, MIN_PRICE_RANGE } from './FiltersPanel';
import { FormattedMessage } from 'react-intl';

type Props = Readonly<{
	rangeValue: number[];
	setRangeValue: (prevValue: SetStateAction<number[]>) => void;
}>;
export const PriceRange: FC<Props> = ({ rangeValue, setRangeValue }) => {
	const [minRangeValue, setMinRangeValue] = useState(MIN_PRICE_RANGE);
	const [maxRangeValue, setMaxRangeValue] = useState(MAX_PRICE_RANGE);

	const handleMinRangeRangeInputs = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, newValue: string) => {
		if (isNaN(parseInt(newValue))) {
			setMinRangeValue(MIN_PRICE_RANGE);
			return;
		}
		if (parseInt(newValue) > MAX_PRICE_RANGE) {
			setMinRangeValue(MAX_PRICE_RANGE);
			return;
		}
		if (newValue != null && typeof newValue === 'string') {
			setMinRangeValue(parseInt(newValue));
			setRangeValue((prev: number[]) => {
				const copyPrev = [...prev];
				copyPrev[0] = parseInt(newValue);
				return copyPrev;
			});
		}
	};
	const handleMaxRangeRangeInputs = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, newValue: string) => {
		if (isNaN(parseInt(newValue))) {
			setMaxRangeValue(MIN_PRICE_RANGE);
			return;
		}
		if (parseInt(newValue) > MAX_PRICE_RANGE) {
			setMaxRangeValue(MAX_PRICE_RANGE);
			return;
		}
		if (newValue != null && typeof newValue === 'string') {
			setMaxRangeValue(parseInt(newValue));
			setRangeValue((prev) => {
				const copyPrev = [...prev];
				copyPrev[1] = parseInt(newValue);
				return copyPrev;
			});
		}
	};

	return (
		<Stack gap={2}>
			<Typography variant={'body1'}>
				<FormattedMessage id={'filters.price-range.title'} />
			</Typography>
			<TextField value={minRangeValue} onChange={(e) => handleMinRangeRangeInputs(e, e.target.value)} label={'Min price'} />
			<TextField value={maxRangeValue} onChange={(e) => handleMaxRangeRangeInputs(e, e.target.value)} label={'Max price'} />
		</Stack>
	);
};
