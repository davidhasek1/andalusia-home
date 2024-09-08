'use client';
import { Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { CommonProps } from './types';
import { SectionCounter } from './SectionCounter';
import { FormattedMessage } from '../utils/FormattedMessage';

type Props = CommonProps;
const FeaturedProperties: FC<Props> = ({ order }) => {
	return (
		<Stack>
			<SectionCounter value={order} />
			<Typography variant={'h2'}>
				<FormattedMessage id={'homepage.section.featured-properties.title'} />
			</Typography>
		</Stack>
	);
};

export { FeaturedProperties };
