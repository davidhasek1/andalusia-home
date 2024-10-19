import Image from 'next/image';
import { FC } from 'react';
import { formatDate } from '../../helpers/formatDate';
import Link from 'next/link';

export type BlogPost = Readonly<{
	createdAt: string | number;
	image: string;
	title: string;
	slug: string;
	perex: string;
	fullContent: string;
	showOnHomepage?: boolean;
}>;

const BlogCard: FC<Readonly<{ items: BlogPost[] }>> = ({ items }) => {
	return (
		<ul className={'grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]'}>
			{items.map((item, idx) => (
				<li key={idx} className={'rounded-xl p-[20px] border-2 shadow-box'}>
					<Link href={`/blog/${item.slug}`}>
						<Image
							src={item?.image}
							alt={item?.title}
							width={580}
							height={300}
							className={'object-cover aspect-[580/300] w-full rounded-xl mb-[20px]'}
						/>
						<div>
							<p className={'font-semibold text-[#666666] mb-[5px] text-sm md:text-base'}>{formatDate(item?.createdAt)}</p>
							<h3 className={'font-semibold mb-[10px] text-lg md:text-xl'}>{item?.title}</h3>
							<p className={'text-[#808080] line-clamp-3 text-sm md:text-base'}>{item?.perex}</p>
						</div>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default BlogCard;
