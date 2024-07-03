/* eslint-disable formatjs/no-literal-string-in-jsx */
'use client';
import { Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { CommonProps } from './types';
import { SectionCounter } from './SectionCounter';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';

type Props = CommonProps;
const WhyChooseUs: FC<Props> = ({ order }) => {
	return (
		<Stack direction={'row'}>
			<Stack flex={1}>
				<SectionCounter value={order} />
				<Typography variant={'h2'}>
					<FormattedMessage id={'homepage.section.why-choose-us.title'} />
				</Typography>
			</Stack>
			<Stack flex={1} px={10}>
				<Stack position={'relative'} width={'100%'} height={400}>
					<Image src={'/assets/main-image.webp'} fill alt={'img'} objectFit={'cover'} />
				</Stack>
				<Stack gap={2}>
					<Typography variant={'body1'}>
						In consequat et deserunt minim culpa ex mollit ullamco. Adipisicing aliqua ex pariatur ea duis. Cillum officia cupidatat aute
						elit eiusmod sint cupidatat do. Sint aliquip ullamco ipsum quis fugiat eiusmod amet. Sunt consectetur consectetur qui dolore
						anim aliquip Lorem et sit aliqua esse. Dolore adipisicing anim ut mollit eiusmod fugiat commodo.
					</Typography>
					<Typography>
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

export { WhyChooseUs };
