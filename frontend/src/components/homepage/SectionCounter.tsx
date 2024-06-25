import { Typography } from '@mui/material';
import { FC } from 'react';

export const SectionCounter: FC<{ value: number }> = ({ value }) => {
	// eslint-disable-next-line formatjs/no-literal-string-in-jsx
	return <Typography variant={'h6'}>{value < 10 ? `0${value}.` : `${value}.`}</Typography>;
};
