import { Box, Grid, Stack } from '@mui/material';
import { FC } from 'react';
import BlogCard from './BlogCard';

export const BlogList: FC = () => {
	return (
		<Grid container direction={'row'} spacing={5}>
			{[{}, {}, {}].map((e, i) => {
				return (
					<Grid key={i} item xs={12} md={6} lg={4}>
						<BlogCard />
					</Grid>
				);
			})}
		</Grid>
	);
};
