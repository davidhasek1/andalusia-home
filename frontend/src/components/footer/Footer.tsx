'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { navLinks } from '../menu-items';
import Logo from '../../../public/logo_light.svg';

const Footer = () => {
	return (
		<div className={'flex justify-center gap-20 items-center bg-primary py-20 px-5'}>
			<div className={'relative w-[15rem] h-[8rem]'}>
				<Image src={Logo} alt={'logo'} fill sizes={'25vw'} objectFit={'cover'} />
			</div>
			<ul className={'flex flex-col gap-10 text-white'}>
				{navLinks.map((item, index) => {
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
