/* eslint-disable formatjs/no-literal-string-in-jsx */
'use client';
import { Chip, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { CommonProps } from './types';
import { SectionCounter } from './SectionCounter';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';

type Props = CommonProps;
const AboutUs: FC<Props> = ({ order }) => {
	return (
		<Stack direction={{ xl: 'row', lg: 'column' }} gap={{ xs: 6 }}>
			<Stack flex={1} justifyContent={'space-between'} gap={4}>
				<Stack>
					<SectionCounter value={order} />
					<Typography variant={'h2'}>
						<FormattedMessage id={'homepage.section.about-us.title'} />
					</Typography>
				</Stack>
				<Stack flexWrap={'wrap'} flexDirection={'row'} gap={2}>
					<Chip label={'Est. 2023'} sx={{ fontSize: 16, padding: 3, borderRadius: 25 }} />
					<Chip label={'36+ Teams'} sx={{ fontSize: 16, padding: 3, borderRadius: 25 }} />
					<Chip label={'100+ Clients'} sx={{ fontSize: 16, padding: 3, borderRadius: 25 }} />
					<Chip label={'Many properties'} sx={{ fontSize: 16, padding: 3, borderRadius: 25 }} />
					<Chip label={'20+ Good Reviews'} sx={{ fontSize: 16, padding: 3, borderRadius: 25 }} />
				</Stack>
			</Stack>
			<Stack flex={2} pl={{ xl: 20, xs: 0 }} gap={2}>
				<Stack position={'relative'} width={'100%'} height={500}>
					<Image src={'/assets/main-image.webp'} fill alt={'img'} style={{ objectFit: 'cover' }} />
				</Stack>
				<Stack gap={2}>
					<Typography variant={'body2'} lineHeight={2} textAlign={'justify'}>
						In consequat et deserunt minim culpa ex mollit ullamco. Adipisicing aliqua ex pariatur ea duis. Cillum officia cupidatat aute
						elit eiusmod sint cupidatat do. Sint aliquip ullamco ipsum quis fugiat eiusmod amet. Sunt consectetur consectetur qui dolore
						anim aliquip Lorem et sit aliqua esse. Dolore adipisicing anim ut mollit eiusmod fugiat commodo.
					</Typography>
					<Typography variant={'body2'} lineHeight={2} textAlign={'justify'}>
						In consequat et deserunt minim culpa ex mollit ullamco. Adipisicing aliqua ex pariatur ea duis. Cillum officia cupidatat aute
						elit eiusmod sint cupidatat do. Sint aliquip ullamco ipsum quis fugiat eiusmod amet. Sunt consectetur consectetur qui dolore
						anim aliquip Lorem et sit aliqua esse. Dolore adipisicing anim ut mollit eiusmod fugiat commodo. Mollit aliqua do sint excepteur
						labore labore tempor qui. Ipsum aute minim occaecat nisi incididunt pariatur velit officia aliquip. Adipisicing exercitation
						occaecat dolor aute labore ullamco. Officia exercitation minim esse eiusmod ullamco officia veniam sint dolore do ad. Incididunt
						sunt ipsum culpa dolore adipisicing id culpa. Lorem irure duis ullamco sint laboris qui fugiat.
					</Typography>
				</Stack>
			</Stack>
		</Stack>
	);
};

export { AboutUs };
