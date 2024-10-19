'use client';

import Image from 'next/image';
import Link from 'next/link';

const footerLinks = [
	{
		title: 'Nemovitosti',
		href: '/properties',
	},
	{
		title: 'Blog',
		href: '/blog',
	},
	{
		title: 'O nás',
		href: '/about',
	},
	{
		title: 'Kontakt',
		href: '/contact',
	},
	{
		title: 'Ochrana osobních údajů',
		href: '/privacy-policy',
	},
];

export const Footer = () => {
	return (
		<div className={'bg-black text-white mt-[120px]'}>
			<footer className={'py-[5rem] border-b border-white container'}>
				<div className={'container grid md:grid-cols-2 gap-[2rem] md:gap-0'}>
					<Image src={'/logo-white.svg'} alt={'logo'} width={190} height={120} className={'object-cover'} />
					<ul className={'grid md:grid-cols-2 gap-[1.5rem]'}>
						{footerLinks.map((item, idx) => (
							<li key={idx}>
								<Link href={item.href}>{item.title}</Link>
							</li>
						))}
					</ul>
				</div>
			</footer>
			<p className={'flex items-center justify-center h-[70px] text-sm text-center'}>
				&copy; {new Date().getFullYear()} Andalusia home. Všechna práva vyhrazena.
			</p>
		</div>
	);
};
