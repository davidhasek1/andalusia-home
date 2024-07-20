import { Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { BlogPost } from '../../../components/blog/BlogCard';
import { redirect } from 'next/navigation';
import Markdown from 'react-markdown';
import { formatDate } from '../../../helpers/formatDate';

type PostPageProps = {
	params: { slug: string };
};

const PostPage: FC<PostPageProps> = async ({ params: { slug } }) => {
	const res = await fetch('https://api.npoint.io/9b28ba3416db05aea576');
	const data = await res.json();
	const posts: BlogPost[] = data.blogPosts;
	const currentPost = posts.filter((post) => post.slug === slug)[0] ?? null;
	if (currentPost == null) {
		redirect('/blog');
		//TODO: snack bar the says We cannot find selected blog post - this is just a fallback
	}

	return (
		<Stack>
			<Stack my={10} px={{ xl: 50, lg: 30, md: 20, xs: 5 }} gap={2}>
				<Typography variant={'h1'} fontSize={54}>
					{currentPost.title}
				</Typography>
				<Typography variant={'caption'} mb={5}>
					{formatDate(currentPost.createdAt)}
				</Typography>
				<Typography variant={'caption'} fontSize={16} lineHeight={2.3} textAlign={'justify'}>
					<Markdown>{currentPost.fullContent}</Markdown>
				</Typography>
			</Stack>
		</Stack>
	);
};

export default PostPage;
