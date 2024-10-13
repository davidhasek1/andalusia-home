import { cn } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const blogData = [
	{
		image: '/assets/beach.webp',
		title: 'Lorem ipsum dolor sit amet consecte Suspendisse dictumst suspendisse  dictumst .',
		perex:
			'Prozkoumejte nádherné pláže Španělska, jako jsou Costa del Sol, Costa Brava a které nabízejí zlatavý písek, prostor pro odpočinek',
		date: 'Aug 20,2022',
	},
	{
		image: '/assets/cycling.webp',
		title: 'Lorem ipsum dolor sit amet consecte Suspendisse dictumst suspendisse  dictumst .',
		perex:
			'Španělsko je rájem pro cyklisty s rozmanitými trasami, které uspokojí jak začátečníky, tak i zkušené jezdce. Od horských stezek v Pyrenejích',
		date: 'Aug 20,2022',
	},
	{
		image: '/assets/golf.webp',
		title: 'Lorem ipsum dolor sit amet consecte Suspendisse dictumst suspendisse  dictumst .',
		perex:
			'Objevte špičková golfová hřiště ve Španělsku, zejména na Costa del Sol, kde můžete hrát golf po celý rok díky příjemnému klimatu. Užijte si luxusní',
		date: 'Aug 20,2022',
	},
	{
		image: '/assets/cycling.webp',
		title: 'Lorem ipsum dolor sit amet consecte Suspendisse dictumst suspendisse  dictumst .',
		perex:
			'Španělsko je rájem pro cyklisty s rozmanitými trasami, které uspokojí jak začátečníky, tak i zkušené jezdce. Od horských stezek v Pyrenejích',
		date: 'Aug 20,2022',
	},
];

const FeaturedBlogArticles = () => {
	return (
		<div className={'container mb-[120px]'}>
			<h2 className={'text-4xl md:text-5xl xl:text-6xl text-center mb-[50px] text-white'}>Objevte naše nejnovější články</h2>
			<ul className={'grid xl:grid-cols-2 grid-rows-3 gap-[20px]'}>
				{blogData.map((item, idx) => (
					<li key={idx} className={cn('text-white bg-white/10 rounded-xl p-[20px] border border-white/40', idx === 0 && 'row-span-3')}>
						<Link href={'/'} className={cn('flex flex-col min-[400px]:flex-row items-center gap-[20px]', idx === 0 && 'block')}>
							<Image
								src={item.image}
								alt={item.title}
								width={idx === 0 ? 580 : 170}
								height={idx === 0 ? 300 : 140}
								className={cn('object-cover aspect-[170/140] rounded-xl', idx === 0 && 'aspect-[580/300] mb-[20px] w-full')}
							/>
							<div>
								<p className={cn('font-semibold text-[#D0D0D0] mb-[10px] text-sm md:text-base', idx === 0 && 'text-base')}>{item.date}</p>
								<h3 className={cn('md:text-xl font-semibold', idx === 0 && 'mb-[15px] text-xl')}>{item.title}</h3>
								{idx === 0 && <p className={'text-[#808080]'}>{item.perex}</p>}
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default FeaturedBlogArticles;
