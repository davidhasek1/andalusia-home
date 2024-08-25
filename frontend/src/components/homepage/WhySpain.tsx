/* eslint-disable formatjs/no-literal-string-in-jsx */
'use client';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { CommonProps } from './types';
import { SectionCounter } from './SectionCounter';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';

type Props = CommonProps;

const WhySpain: FC<Props> = ({ order }) => {
	return (
		<Stack>
			<SectionCounter value={order} />
			<Typography variant={'h2'}>
				<FormattedMessage id={'homepage.section.why-spain.title'} />
			</Typography>

			<Grid
				container
				direction={{ xl: 'row', lg: 'column' }}
				mt={5}
				spacing={10}
				/* width={{ xl: '75%', lg: '85%', xs: '100%' }}  */ justifyContent={'center'}
			>
				<Grid item xs={12} xl={6} display={'flex'} direction={'column'} gap={2}>
					<Typography variant={'h4'}>
						<FormattedMessage id={'homepage.section.why-spain.beach.title'} />
					</Typography>
					<Typography lineHeight={2}>
						<FormattedMessage id={'homepage.section.why-spain.beach.content'} />
					</Typography>
					<Button sx={{ alignSelf: 'flex-end' }} href={'/blog/why-choose-spain'}>
						<FormattedMessage id={'common.read-more'} />
					</Button>
				</Grid>
				<Grid item xs={12} xl={6}>
					<Stack position={'relative'} width={'100%'} height={500}>
						<Image src={'/assets/beach.webp'} alt={'foo'} fill style={{ objectFit: 'cover' }} />
					</Stack>
				</Grid>
				<Grid item xs={12} xl={6}>
					<Stack position={'relative'} width={'100%'} height={500}>
						<Image src={'/assets/cycling.webp'} alt={'foo'} fill style={{ objectFit: 'cover' }} />
					</Stack>
				</Grid>
				<Grid item xs={12} xl={6} display={'flex'} direction={'column'} gap={2}>
					<Typography variant={'h4'}>
						<FormattedMessage id={'homepage.section.why-spain.cycling.title'} />
					</Typography>
					<Typography lineHeight={2}>
						<FormattedMessage id={'homepage.section.why-spain.cycling.content'} />
					</Typography>
					<Button sx={{ alignSelf: 'flex-end' }} href={'/blog/why-choose-spain'}>
						<FormattedMessage id={'common.read-more'} />
					</Button>
				</Grid>
				<Grid item xs={12} xl={6} display={'flex'} direction={'column'} gap={2}>
					<Typography variant={'h4'}>
						<FormattedMessage id={'homepage.section.why-spain.golf.title'} />
					</Typography>
					<Typography lineHeight={2}>
						<FormattedMessage id={'homepage.section.why-spain.golf.content'} />
					</Typography>
					<Button sx={{ alignSelf: 'flex-end' }} href={'/blog/why-choose-spain'}>
						<FormattedMessage id={'common.read-more'} />
					</Button>
				</Grid>
				<Grid item xs={12} xl={6}>
					<Stack position={'relative'} width={'100%'} height={500}>
						<Image src={'/assets/golf.webp'} alt={'foo'} fill style={{ objectFit: 'cover' }} />
					</Stack>
				</Grid>
			</Grid>
		</Stack>
	);
};

export { WhySpain };
