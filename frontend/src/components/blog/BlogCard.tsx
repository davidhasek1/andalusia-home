import { Box, Card, CardActionArea, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react';
import { formatDate } from '../../helpers/formatDate';

export type BlogPost = Readonly<{
	createdAt: string | number;
	image: string;
	title: string;
	slug: string;
	perex: string;
	fullContent: string;
	showOnHomepage?: boolean;
}>;

const BlogCard: FC<Readonly<{ data: BlogPost }>> = ({ data }) => {
	return (
		<CardActionArea href={`/blog/${data.slug}`}>
			<Card sx={{ borderRadius: 0 }}>
				<Box position={'relative'} width={'100%'} height={'20rem'}>
					<Image src={'/assets/main-image.webp'} fill alt={''} sizes={'25vw'} objectFit={'cover'} />
				</Box>
				<Stack p={'1.5rem'} gap={'0.3rem'}>
					<Typography>{formatDate(data.createdAt)}</Typography>
					<Typography variant={'h5'} fontWeight={600}>
						{data.title}
					</Typography>
					<Typography>{data.perex}</Typography>
				</Stack>
			</Card>
		</CardActionArea>
	);
};

export default BlogCard;
