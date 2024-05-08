/* eslint-disable formatjs/no-literal-string-in-jsx */
'use client';
import { MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { FormattedMessage } from 'react-intl';

export const FiltersPanel: FC = () => {
	return (
		<Stack minWidth={300} px={2} py={5} gap={2} borderRight={(theme) => `1px solid ${theme.palette.grey[300]}`}>
			<Typography variant={'h5'}>
				<FormattedMessage id={'properties.filters.title'} />
			</Typography>
			<Select value={20}>
				<MenuItem value={10}>Elviria</MenuItem>
				<MenuItem value={20}>Marbesa</MenuItem>
				<MenuItem value={30}>Malaga</MenuItem>
			</Select>
			<TextField />
		</Stack>
	);
};
