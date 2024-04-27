import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const navLinks = [
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

const Navbar = () => {
	return (
		<div className={'w-full flex justify-center bg-primary'}>
			<div className={'container flex justify-between px-10 py-5'}>
				<Link href={'/'} className={'relative w-[10rem] h-[6rem]'}>
					<Image src={'/Logo_AH.png'} alt={'logo'} fill sizes={'25vw'} objectFit={'cover'} />
				</Link>
				<ul className={'flex items-center gap-10 text-white'}>
					{navLinks.map((item, index) => {
						return (
							<li key={index}>
								<Link href={item.href} className={'font-semibold uppercase text-xl'}>
									{item.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
