import { Grid } from '@mui/material';
import { FC } from 'react';
import BlogCard, { BlogPost } from './BlogCard';

export const BlogList: FC<{ isHomepage?: boolean }> = async ({ isHomepage = false }) => {
	const res = await fetch('https://api.npoint.io/9b28ba3416db05aea576');
	const data = await res.json();
	const posts: BlogPost[] = data.blogPosts ?? [];
	const homepagePosts = isHomepage ? posts.filter((post) => post.showOnHomepage === true) : [];

	return (
		<Grid container direction={'row'} spacing={5}>
			{isHomepage &&
				homepagePosts.map((post) => {
					return (
						<Grid key={post.slug} item xs={12} md={6} lg={4}>
							<BlogCard data={post} />
						</Grid>
					);
				})}
			{!isHomepage &&
				posts.map((post: BlogPost, i: number) => {
					return (
						<Grid key={post.slug} item xs={12} md={6} lg={4}>
							<BlogCard data={post} />
						</Grid>
					);
				})}
		</Grid>
	);
};
