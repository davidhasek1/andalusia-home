/* eslint-disable formatjs/no-literal-string-in-jsx */
import { Stack, Typography } from '@mui/material';
import { BlogList } from '../../components/blog/BlogList';

const BlogPage = () => {
	return (
		<Stack minHeight={'100vh'} p={5} gap={5}>
			<Stack>
				<Typography variant={'h2'}>Our Blog - place where you get useful information</Typography>
			</Stack>
			<BlogList />
		</Stack>
	);
};

export default BlogPage;
