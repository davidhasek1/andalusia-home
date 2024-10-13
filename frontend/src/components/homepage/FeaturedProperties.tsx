'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

const FeaturedProperties = () => {
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={1}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
			className={'container mb-[120px]'}
		>
			{Array.from({ length: 5 }).map((_, idx) => (
				<SwiperSlide key={idx}>
					<Image
						src={'/assets/golf.webp'}
						alt={''}
						width={1340}
						height={750}
						className={'object-cover w-full h-full aspect-[1340/750] rounded-xl'}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default FeaturedProperties;
