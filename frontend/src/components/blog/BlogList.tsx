import { Box, Grid, Stack } from '@mui/material';
import { FC } from 'react';
import BlogCard, { BlogPost } from './BlogCard';

export const BlogList: FC = async () => {
	const res = await fetch('https://api.npoint.io/9b28ba3416db05aea576');
	const data = await res.json();

	return (
		<Grid container direction={'row'} spacing={5}>
			{data.blogPosts.map((post: BlogPost, i: number) => {
				return (
					<Grid key={i} item xs={12} md={6} lg={4}>
						<BlogCard data={post} />
					</Grid>
				);
			})}
		</Grid>
	);
};
