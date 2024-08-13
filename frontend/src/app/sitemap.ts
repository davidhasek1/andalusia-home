import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	return [
		{
			url: 'https://www.andalusiahome.cz/',
			lastModified: new Date(),
		},
		{
			url: 'https://www.andalusiahome.cz/about-us',
			lastModified: new Date(),
		},
		{
			url: 'https://www.andalusiahome.cz/contact',
			lastModified: new Date(),
		},
		{
			url: 'https://www.andalusiahome.cz/properties',
			lastModified: new Date(),
		},
		{
			url: 'https://www.andalusiahome.cz/blog',
			lastModified: new Date(),
		},
	];
}
