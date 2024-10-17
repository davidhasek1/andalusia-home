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
		<>
			<footer className={'text-white py-[5rem] border-b border-white'}>
				<div className={'container grid md:grid-cols-2 gap-[2rem] md:gap-0'}>
					<Image src={'/logo-white.svg'} alt={'logo'} width={160} height={100} className={'object-cover'} />
					<ul className={'grid md:grid-cols-2 gap-[1.5rem]'}>
						{footerLinks.map((item, idx) => (
							<li key={idx}>
								<Link href={item.href}>{item.title}</Link>
							</li>
						))}
					</ul>
				</div>
			</footer>
			<p className={'flex items-center justify-center h-[70px] text-white text-sm'}>
				&copy; {new Date().getFullYear()} Andalusia home. Všechna práva vyhrazena.
			</p>
		</>
	);
};
