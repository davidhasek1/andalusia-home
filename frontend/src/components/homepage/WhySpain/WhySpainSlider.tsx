'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Keyboard } from 'swiper/modules';
import SliderButtons from './SliderButtons';

const swiperData = [
	{
		image: '/assets/beach.webp',
		title: 'Pláže',
		perex:
			'Prozkoumejte nádherné pláže Španělska, jako jsou Costa del Sol, Costa Brava a které nabízejí zlatavý písek, prostor pro odpočinek',
	},
	{
		image: '/assets/cycling.webp',
		title: 'Cyklistika',
		perex:
			'Španělsko je rájem pro cyklisty s rozmanitými trasami, které uspokojí jak začátečníky, tak i zkušené jezdce. Od horských stezek v Pyrenejích',
	},
	{
		image: '/assets/golf.webp',
		title: 'Golf',
		perex:
			'Objevte špičková golfová hřiště ve Španělsku, zejména na Costa del Sol, kde můžete hrát golf po celý rok díky příjemnému klimatu. Užijte si luxusní',
	},
	{
		image: '/assets/cycling.webp',
		title: 'Cyklistika',
		perex:
			'Španělsko je rájem pro cyklisty s rozmanitými trasami, které uspokojí jak začátečníky, tak i zkušené jezdce. Od horských stezek v Pyrenejích',
	},
	{
		image: '/assets/beach.webp',
		title: 'Pláže',
		perex:
			'Prozkoumejte nádherné pláže Španělska, jako jsou Costa del Sol, Costa Brava a které nabízejí zlatavý písek, prostor pro odpočinek',
	},
];

const WhySpainSlider = () => {
	return (
		<div className={'overflow-hidden'}>
			<Swiper
				modules={[Keyboard]}
				spaceBetween={20}
				breakpoints={{
					320: {
						slidesPerView: 1,
					},
					640: {
						slidesPerView: 2,
					},
					1080: {
						slidesPerView: 3,
					},
				}}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
				className={'why-spain-slider'}
			>
				{swiperData.map((item, idx) => (
					<SwiperSlide key={idx}>
						<Image
							src={item.image}
							width={400}
							height={380}
							alt={item.title}
							className={'object-cover mb-[20px] rounded-xl aspect-[400/380] w-full'}
						/>
						<h3 className={'text-lg md:text-xl font-semibold mb-[10px]'}>{item.title}</h3>
						<p className={'md:text-lg'}>{item.perex}</p>
					</SwiperSlide>
				))}
				<SliderButtons />
			</Swiper>
		</div>
	);
};

export default WhySpainSlider;
