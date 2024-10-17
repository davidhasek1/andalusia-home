import Image from 'next/image';
import React from 'react';
import Searchbox from './Searchbox/Searchbox';

const Header = () => {
	return (
		<div className={'h-[80vh]'}>
			<div className={'absolute top-[7rem] sm:top-[10rem] lg:top-[15rem] left-1/2 -translate-x-1/2 mb-[25px] max-w-[850px]'}>
				<h1 className={'text-4xl sm:text-5xl lg:text-6xl text-center mb-[20px] font-medium text-white'}>
					Experience the Art of Luxury Living.
				</h1>
				<p className={'sm:text-lg lg:text-xl text-center text-white '}>
					Where every detail is crafted to elevate your lifestyle and transform your dream home into a stunning reality.
				</p>
				<Searchbox />
			</div>
			<Image
				src={'/assets/header.png'}
				alt={'header'}
				width={1680}
				height={1080}
				className={'absolute top-0 w-full h-[80vh] object-cover z-[-10] brightness-50'}
			/>
		</div>
	);
};

export default Header;
