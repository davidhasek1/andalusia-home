'use client';
import { Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { CommonProps } from './types';
import { SectionCounter } from './SectionCounter';
import { FormattedMessage } from 'react-intl';
import { BlogList } from '../blog/BlogList';

type Props = CommonProps;
const FeaturedBlog: FC<Props> = ({ order }) => {
	return (
		<Stack>
			<SectionCounter value={order} />
			<Typography variant={'h2'}>
				<FormattedMessage id={'homepage.section.blog.title'} />
			</Typography>
			<BlogList isHomepage />
		</Stack>
	);
};

export { FeaturedBlog };
