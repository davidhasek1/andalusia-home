/* eslint-disable formatjs/no-literal-string-in-jsx */
'use client';
import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { CommonProps } from './types';
import { SectionCounter } from './SectionCounter';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';

type Props = CommonProps;

const services = [
	{
		icon: <Image src={'/icons/key.svg'} alt={'key-icon'} width={30} height={30} />,
		title: <FormattedMessage id={'homepage.services.title1'} />,
		description: <FormattedMessage id={'homepage.services.description1'} />,
	},
	{
		icon: <Image src={'/icons/heart.svg'} alt={'heart-icon'} width={30} height={30} />,
		title: <FormattedMessage id={'homepage.services.title2'} />,
		description: <FormattedMessage id={'homepage.services.description2'} />,
	},
	{
		icon: <Image src={'/icons/book.svg'} alt={'key-icon'} width={30} height={30} />,
		title: <FormattedMessage id={'homepage.services.title3'} />,
		description: <FormattedMessage id={'homepage.services.description1'} />,
	},
	{
		icon: <></>,
		title: <FormattedMessage id={'homepage.services.title4'} />,
		description: <FormattedMessage id={'homepage.services.description1'} />,
	},
	{
		icon: <></>,
		title: <FormattedMessage id={'homepage.services.title5'} />,
		description: <FormattedMessage id={'homepage.services.description1'} />,
	},
	{
		icon: <></>,
		title: <FormattedMessage id={'homepage.services.title6'} />,
		description: <FormattedMessage id={'homepage.services.description1'} />,
	},
	{
		icon: <></>,
		title: <FormattedMessage id={'homepage.services.title7'} />,
		description: <FormattedMessage id={'homepage.services.description1'} />,
	},
	{
		icon: <></>,
		title: <FormattedMessage id={'homepage.services.title8'} />,
		description: <FormattedMessage id={'homepage.services.description1'} />,
	},
	{
		icon: <></>,
		title: <FormattedMessage id={'homepage.services.title9'} />,
		description: <FormattedMessage id={'homepage.services.description1'} />,
	},
];

const WhyChooseUs: FC<Props> = ({ order }) => {
	return (
		<Stack direction={{ xl: 'row', lg: 'column' }} gap={{ xs: 6 }}>
			<Stack flex={1} sx={{ bgcolor: (theme) => theme.palette.grey[100] }}>
				{services.map((service, i) => (
					<Stack
						key={i}
						direction={'row'}
						gap={3}
						borderBottom={(theme) => (i !== services.length - 1 ? `1px solid ${theme.palette.grey[300]}` : 'none')}
						p={5}
						flex={1}
					>
						{service.icon}
						<Box>
							<Typography variant={'h4'}>{service.title}</Typography>
							{service.description && (
								<Typography variant={'body1'} lineHeight={2}>
									{service.description}
								</Typography>
							)}
						</Box>
					</Stack>
				))}
			</Stack>
			<Stack flex={1} gap={4} order={{ xl: 0, xs: -1 }}>
				<Stack height={'100%'}>
					<SectionCounter value={order} />
					<Typography variant={'h2'}>
						<FormattedMessage id={'homepage.section.why-choose-us.title'} />
					</Typography>
					<Stack mt={'auto'} position={'relative'} width={'100%'} height={600}>
						<Image src={'/assets/main-image.webp'} fill alt={'img'} objectFit={'cover'} />
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};

export { WhyChooseUs };
