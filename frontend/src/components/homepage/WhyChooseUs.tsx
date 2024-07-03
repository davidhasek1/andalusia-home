/* eslint-disable formatjs/no-literal-string-in-jsx */
'use client';
import { Box, Icon, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { CommonProps } from './types';
import { SectionCounter } from './SectionCounter';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';

type Props = CommonProps;
const WhyChooseUs: FC<Props> = ({ order }) => {
	return (
		<Stack direction={{ xl: 'row', lg: 'column' }} gap={{ xs: 6 }}>
			<Stack flex={1} sx={{ bgcolor: (theme) => theme.palette.grey[100] }}>
				<Stack
					direction={'row'}
					alignItems={'center'}
					gap={3}
					borderBottom={(theme) => `1px solid ${theme.palette.grey[300]}`}
					p={5}
					flex={1}
				>
					<Image src={'/icons/key.svg'} alt={'key-icon'} width={40} height={40} />
					<Typography variant={'h4'}>Unmatched Experience</Typography>
				</Stack>
				<Stack direction={'row'} gap={3} borderBottom={(theme) => `1px solid ${theme.palette.grey[300]}`} p={5} flex={1}>
					<Image src={'/icons/heart.svg'} alt={'heart-icon'} width={40} height={40} />
					<Box>
						<Typography variant={'h4'}>Perzonalized Service</Typography>
						<Typography variant={'body1'} lineHeight={2}>
							In ipsum aute nulla in do occaecat duis do labore aute sunt anim. Id pariatur duis tempor amet aliquip qui dolor nostrud sunt
							sint in ullamco nisi amet. Culpa veniam id voluptate excepteur enim. Mollit ex dolore dolor magna magna eiusmod Lorem eiusmod
							sit adipisicing consectetur ipsum dolor commodo. Sunt proident ea sunt ut.
						</Typography>
					</Box>
				</Stack>
				<Stack
					direction={'row'}
					alignItems={'center'}
					gap={3}
					borderBottom={(theme) => `1px solid ${theme.palette.grey[300]}`}
					p={5}
					flex={1}
				>
					<Image src={'/icons/book.svg'} alt={'key-icon'} width={40} height={40} />
					<Typography variant={'h4'}>Unmatched Experience</Typography>
				</Stack>
			</Stack>
			<Stack flex={1} gap={4} order={{ xl: 0, xs: -1 }}>
				<Stack height={'100%'}>
					<SectionCounter value={order} />
					<Typography variant={'h2'}>
						<FormattedMessage id={'homepage.section.why-choose-us.title'} />
					</Typography>
					<Stack mt={'auto'} position={'relative'} width={'100%'} height={300}>
						<Image src={'/assets/main-image.webp'} fill alt={'img'} objectFit={'cover'} />
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};

export { WhyChooseUs };
