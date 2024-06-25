'use client';
import { Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { CommonProps } from './types';
import { SectionCounter } from './SectionCounter';
import { FormattedMessage } from 'react-intl';

type Props = CommonProps;
const WhyChooseUs: FC<Props> = ({ order }) => {
	return (
		<Stack>
			<SectionCounter value={order} />
			<Typography variant={'h2'}>
				<FormattedMessage id={'homepage.section.why-choose-us.title'} />
			</Typography>
		</Stack>
	);
};

export { WhyChooseUs };
