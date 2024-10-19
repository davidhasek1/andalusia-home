import { FormattedMessage } from 'components/utils/FormattedMessage';
import Image from 'next/image';
import React from 'react';

const services = [
	{
		title: <FormattedMessage id={'homepage.section.our-services.benefit1.title'} />,
		perex: <FormattedMessage id={'homepage.section.our-services.benefit1.perex'} />,
		icon: '/assets/our-services-1.svg',
	},
	{
		title: <FormattedMessage id={'homepage.section.our-services.benefit2.title'} />,
		perex: <FormattedMessage id={'homepage.section.our-services.benefit2.perex'} />,
		icon: '/assets/our-services-2.svg',
	},
	{
		title: <FormattedMessage id={'homepage.section.our-services.benefit3.title'} />,
		perex: <FormattedMessage id={'homepage.section.our-services.benefit3.perex'} />,
		icon: '/assets/our-services-3.svg',
	},
];

const OurServices = () => {
	return (
		<div className={'container bg-our-services mb-[120px]'}>
			<div className={'max-w-[650px] mx-auto'}>
				<h2 className={'text-4xl md:text-5xl xl:text-6xl text-center mb-[25px] font-semibold'}>
					<FormattedMessage id={'homepage.section.our-services.title'} />
				</h2>
				<p className={'md:text-lg text-center mb-[45px]'}>
					<FormattedMessage id={'homepage.section.our-services.perex'} />
				</p>
			</div>
			<ul className={'grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-[20px]'}>
				{services.map((item, idx) => (
					<li key={idx} className={'rounded-xl py-[25px] px-[15px] h-full border-2 shadow-box'}>
						<div className={'flex justify-center items-center bg-primary border-2 rounded-full w-[80px] h-[80px] mx-auto mb-[25px]'}>
							<Image src={item.icon} alt={item.title.toString()} width={50} height={50} className={'object-cover'} />
						</div>
						<h3 className={'text-lg md:text-xl font-semibold mb-[20px] text-center'}>{item.title}</h3>
						<p className={'md:text-lg text-center'}>{item.perex}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default OurServices;
