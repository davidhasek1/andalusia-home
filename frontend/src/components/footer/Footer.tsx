import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
	const footerLinks = [
		{
			name: 'Nemovitosti',
			href: '/properties',
		},
		{
			name: 'Nabídnout nemovitost',
			href: '/offer-property',
		},
		{
			name: 'Náš tým',
			href: '/our-team',
		},
	];

	return (
		<div className={'flex justify-center gap-20 items-center bg-primary py-20 px-5'}>
			<div className={'relative w-[10rem] h-[6rem]'}>
				<Image src={'/Logo_AH.png'} alt={'logo'} fill sizes={'25vw'} objectFit={'cover'} />
			</div>
			<ul className={'flex flex-col gap-10 text-white'}>
				{footerLinks.map((item, index) => {
					return (
						<li key={index}>
							<Link className={'font-semibold uppercase text-xl'} href={item.href}>
								{item.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Footer;
