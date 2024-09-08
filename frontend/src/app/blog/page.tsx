'use client';
import { Stack, Typography } from '@mui/material';
import { BlogList } from '../../components/blog/BlogList';
import { FormattedMessage } from '../../components/utils/FormattedMessage';

const BlogPage = () => {
	return (
		<Stack minHeight={'100vh'} p={5} gap={5}>
			<Stack>
				<Typography variant={'h2'}>
					<FormattedMessage id={'blog.title'} /> {/* @todo: Move header into own component - to have page.tsx as serv component */}
				</Typography>
			</Stack>
			<BlogList />
		</Stack>
	);
};

export default BlogPage;
