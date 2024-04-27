'use client';

import useOnScreen from 'hooks/useOnScreen';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import Logo from '../../../public/logo_light.svg';
import bgImage from '../../../public/header.jpeg';
import { navLinks } from '../menu-items';

const Header = () => {
	const headerRef = useRef<HTMLDivElement>(null);
	const isVisible = useOnScreen(headerRef);

	return (
		<>
			<div className={twMerge('absolute top-0 z-10 w-full flex justify-center', !isVisible && 'fixed bg-primary')}>
				<div className={twMerge('w-[120rem] flex justify-between px-10 py-5')}>
					<div className={'relative w-[10rem] h-[6rem]'}>
						<Image src={Logo} alt={'logo'} fill sizes={'25vw'} objectFit={'cover'} />
					</div>
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
			<div className={'relative min-h-[90vh]'} ref={headerRef}>
				<Image src={bgImage} alt={'header-image'} fill objectFit={'cover'} sizes={'75vw'} />
			</div>
		</>
	);
};

export default Header;
