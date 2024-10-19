'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';
import { FormattedMessage } from 'components/utils/FormattedMessage';

const swiperData = [
	{
		image: '/assets/beach.webp',
		title: 'Pláže',
		address: '5565 JED Smith RD',
		price: '$6,400,00',
		beds: '5',
		baths: '4',
	},
	{
		image: '/assets/cycling.webp',
		title: 'Cyklistika',
		address: '5565 JED Smith RD',
		price: '$6,400,00',
		beds: '3',
		baths: '1',
	},
	{
		image: '/assets/golf.webp',
		title: 'Golf',
		address: '5565 JED Smith RD',
		price: '$6,400,00',
		beds: '2',
		baths: '4',
	},
	{
		image: '/assets/cycling.webp',
		title: 'Cyklistika',
		address: '5565 JED Smith RD',
		price: '$6,400,00',
		beds: '5',
		baths: '4',
	},
	{
		image: '/assets/beach.webp',
		title: 'Pláže',
		address: '5565 JED Smith RD',
		price: '$6,400,00',
		beds: '5',
		baths: '4',
	},
];

const FeaturedPropertiesSlider = () => {
	return (
		<div className={'container mb-[120px] overflow-hidden'}>
			<Swiper
				modules={[Pagination, Keyboard]}
				pagination={{ clickable: true }}
				keyboard={{ enabled: true }}
				slidesPerView={1}
				spaceBetween={20}
				className={'featured-properties-slider'}
			>
				{swiperData.map((item, idx) => (
					<SwiperSlide key={idx}>
						<Image
							src={item.image}
							alt={item.title}
							width={1340}
							height={750}
							className={'object-cover w-full h-full aspect-[300/400] xs:aspect-[300/300] sm:aspect-[1340/750] rounded-xl brightness-50'}
						/>
						<div className={'absolute bottom-[30px] left-[20px] sm:bottom-[70px] sm:left-[70px] z-[10] text-white'}>
							<h3 className={'text-2xl xs:text-3xl lg:text-5xl mb-[10px] sm:mb-[20px] font-semibold'}>
								<FormattedMessage id={'homepage.section.featured-properties.title'} />
							</h3>
							<p className={'mb-[5px] xs:mb-[10px] sm:text-lg md:text-xl'}>{item.address}</p>
							<ul className={'grid grid-cols-2 gap-[0.5rem] xs:gap-0 xs:flex items-center sm:text-lg md:text-xl mb-[25px] sm:mb-[35px]'}>
								<li className={'sm:border-r border-white last:border-r-0 pr-[1rem]'}>{item.price}</li>
								<li className={'sm:border-r border-white last:border-r-0 px-[1rem]'}>{item.beds} Beds</li>
								<li className={'sm:border-r border-white last:border-r-0 xs:px-[1rem]'}>{item.baths} Baths</li>
							</ul>
							<Link
								href={'/'}
								className={
									'text-sm xs:text-base sm:text-lg rounded-full bg-white text-black py-[0.7rem] sm:py-[0.9rem] px-[2.5rem] hover:bg-slate-200'
								}
							>
								Zjistit více
							</Link>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default FeaturedPropertiesSlider;
