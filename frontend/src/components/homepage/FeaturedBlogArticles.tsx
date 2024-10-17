import { BlogPost } from 'components/blog/BlogCard';
import { formatDate } from 'helpers/formatDate';
import { cn } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type FeaturedBlogArticlesProps = {
	items: BlogPost[];
};

const FeaturedBlogArticles: FC<FeaturedBlogArticlesProps> = ({ items }) => {
	return (
		<div className={'container mb-[120px]'}>
			<h2 className={'text-4xl md:text-5xl xl:text-6xl text-center mb-[50px] text-white'}>Objevte naše nejnovější články</h2>
			<ul className={'grid xl:grid-cols-2 grid-rows-3 gap-[20px] max-h-[530px]'}>
				{items.slice(0, 3).map((item, idx) => (
					<li key={idx} className={cn('text-white bg-white/10 rounded-xl p-[20px] border border-white/40', idx === 0 && 'row-span-3')}>
						<Link href={`/blog/${item?.slug}`} className={cn('flex flex-col xs:flex-row items-center gap-[20px]', idx === 0 && 'block')}>
							<Image
								src={item?.image}
								alt={item?.title}
								width={idx === 0 ? 580 : 150}
								height={idx === 0 ? 300 : 120}
								className={cn('object-cover aspect-[150/120] rounded-xl', idx === 0 && 'aspect-[580/300] mb-[20px] w-full')}
							/>
							<div>
								<p className={cn('font-semibold text-[#d0d0d0] mb-[10px] text-sm md:text-base', idx === 0 && 'text-base')}>
									{formatDate(item?.createdAt)}
								</p>
								<h3 className={cn('md:text-xl font-semibold', idx === 0 && 'mb-[15px] text-xl')}>{item?.title}</h3>
								{idx === 0 && <p className={'text-gray-400 line-clamp-3'}>{item?.perex}</p>}
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default FeaturedBlogArticles;
