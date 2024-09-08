'use client';

import { FC } from 'react';
import { CommonProps } from './types';
import { Grid, Stack, Typography } from '@mui/material';
import { SectionCounter } from './SectionCounter';
import { FormattedMessage } from '../utils/FormattedMessage';
import theme from '../../theme';

type Props = CommonProps;

const data = [
	{
		id: 1,
		title: <FormattedMessage id={'homepage.section.why-with-us.card1.title'} />,
		description: <FormattedMessage id={'homepage.section.why-with-us.card1.description'} />,
	},
	{
		id: 2,
		title: <FormattedMessage id={'homepage.section.why-with-us.card2.title'} />,
		description: <FormattedMessage id={'homepage.section.why-with-us.card2.description'} />,
	},
	{
		id: 3,
		title: <FormattedMessage id={'homepage.section.why-with-us.card3.title'} />,
		description: <FormattedMessage id={'homepage.section.why-with-us.card3.description'} />,
	},
	{
		id: 4,
		title: <FormattedMessage id={'homepage.section.why-with-us.card4.title'} />,
		description: <FormattedMessage id={'homepage.section.why-with-us.card4.description'} />,
	},
];

export const WhyWithUs: FC<Props> = ({ order }) => {
	return (
		<Stack gap={2}>
			<SectionCounter value={order} />
			<Typography variant={'h2'}>
				<FormattedMessage id={'homepage.section.why-with-us.title'} />
			</Typography>

			<Typography>
				<FormattedMessage id={'homepage.section.why-with-us.description'} />
			</Typography>

			<Grid container spacing={4} sx={{ maxWidth: '85%', margin: 'auto' }}>
				{data.map((item) => (
					<Grid key={item.id} lg={6} xs={12} sx={{ textAlign: 'center' }} item>
						<Stack
							direction={'column'}
							height={'100%'}
							sx={{
								border: `1px solid ${theme.palette.grey[300]}`,
								p: 3,
							}}
						>
							<Typography variant={'h5'} fontWeight={900} mb={2}>
								{item.title}
							</Typography>
							<Typography variant={'caption'} fontSize={16}>
								{item.description}
							</Typography>
						</Stack>
					</Grid>
				))}
			</Grid>
		</Stack>
	);
};
