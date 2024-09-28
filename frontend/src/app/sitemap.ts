import { BlogPost } from 'components/blog/BlogCard';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const BASE_URL = 'https://andalusiahome.cz';

	const res = await fetch('https://api.npoint.io/9b28ba3416db05aea576');
	const blogsData = await res.json();

	const blogs = blogsData.blogPosts.map((item: BlogPost) => ({
		url: `${BASE_URL}/blog/${item.slug}`,
		changeFrequency: 'weekly',
		priority: 1,
	}));

	return [
		{
			url: 'https://www.andalusiahome.cz/',
		},
		{
			url: 'https://www.andalusiahome.cz/about-us',
		},
		{
			url: 'https://www.andalusiahome.cz/contact',
		},
		{
			url: 'https://www.andalusiahome.cz/properties',
		},
		{
			url: 'https://www.andalusiahome.cz/blog',
		},
		...blogs,
	];
}
