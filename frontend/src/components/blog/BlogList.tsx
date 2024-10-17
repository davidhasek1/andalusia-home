import { FC } from 'react';
import BlogCard, { BlogPost } from './BlogCard';
import FeaturedBlogArticles from 'components/homepage/FeaturedBlogArticles';

export const BlogList: FC<{ isHomepage?: boolean }> = async ({ isHomepage = false }) => {
	const res = await fetch('https://api.npoint.io/9b28ba3416db05aea576');
	const data = await res.json();
	const posts: BlogPost[] = data.blogPosts ?? [];
	const homepagePosts = isHomepage ? posts.filter((post) => post.showOnHomepage === true) : [];

	return (
		<>
			{isHomepage && <FeaturedBlogArticles items={homepagePosts} />}
			{!isHomepage && <BlogCard items={posts} />}
		</>
	);
};
