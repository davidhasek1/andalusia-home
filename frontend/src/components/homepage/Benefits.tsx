'use client';
import { Check, SelfImprovement, ShowChart } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { FormattedMessage } from 'react-intl';

export const Benefits: FC = () => {
	return (
		<Stack direction={{ lg: 'row', xs: 'column' }} justifyContent={'space-evenly'} alignItems={{ lg: 'stretch', xs: 'center' }} gap={10}>
			<Stack alignItems={'center'} maxWidth={430} gap={3}>
				<ShowChart sx={{ fontSize: 40 }} />
				<Typography variant={'h4'}>
					<FormattedMessage id={'homepage.benefit1.title'} />
				</Typography>
				<Typography>
					<FormattedMessage id={'homepage.benefit1.description'} />
				</Typography>
			</Stack>
			<Stack alignItems={'center'} maxWidth={430} gap={3}>
				<Check sx={{ fontSize: 40 }} />
				<Typography variant={'h4'}>
					<FormattedMessage id={'homepage.benefit2.title'} />
				</Typography>
				<Typography>
					<FormattedMessage id={'homepage.benefit2.description'} />
				</Typography>
			</Stack>
			<Stack alignItems={'center'} maxWidth={430} gap={3}>
				<SelfImprovement sx={{ fontSize: 40 }} />
				<Typography variant={'h4'}>
					<FormattedMessage id={'homepage.benefit3.title'} />
				</Typography>
				<Typography>
					<FormattedMessage id={'homepage.benefit3.description'} />
				</Typography>
			</Stack>
		</Stack>
	);
};
