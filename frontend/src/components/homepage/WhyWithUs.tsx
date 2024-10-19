import Image from 'next/image';
import React from 'react';
import { FormattedMessage } from '../../components/utils/FormattedMessage';

const uspData = [
	{
		title: <FormattedMessage id={'homepage.section.why-with-us.card1.title'} />,
		perex: <FormattedMessage id={'homepage.section.why-with-us.card1.perex'} />,
	},
	{
		title: <FormattedMessage id={'homepage.section.why-with-us.card2.title'} />,
		perex: <FormattedMessage id={'homepage.section.why-with-us.card2.perex'} />,
	},
	{
		title: <FormattedMessage id={'homepage.section.why-with-us.card3.title'} />,
		perex: <FormattedMessage id={'homepage.section.why-with-us.card3.perex'} />,
	},
	{
		title: <FormattedMessage id={'homepage.section.why-with-us.card4.title'} />,
		perex: <FormattedMessage id={'homepage.section.why-with-us.card4.perex'} />,
	},
];

const WhyWithUs = () => {
	return (
		<div className={'container grid xl:grid-cols-2 gap-[4rem] items-center mb-[120px]'}>
			<div className={'grid grid-cols-12 items-center w-fit mx-auto order-1 xl:order-none'}>
				<Image
					src={'/assets/beach.webp'}
					alt={'third'}
					width={380}
					height={600}
					className={'object-cover rounded-lg col-[2_/_9] row-[1_/_2]'}
				/>
				<Image
					src={'/assets/cycling.webp'}
					alt={'second'}
					width={370}
					height={600}
					className={'object-cover rounded-lg col-[3_/_10] row-[1_/_2]'}
				/>
				<Image
					src={'/assets/golf.webp'}
					alt={'first'}
					width={400}
					height={600}
					className={'object-cover rounded-lg col-[4_/_12] row-[1_/_2]'}
				/>
			</div>
			<div>
				<h2 className={'text-4xl md:text-5xl xl:text-6xl mb-[25px] font-semibold'}>
					<FormattedMessage id={'homepage.section.why-with-us.title'} />
				</h2>
				<p className={'text-lg md:text-xl mb-[25px]'}>
					<FormattedMessage id={'homepage.section.why-with-us.perex'} />
				</p>
				<ul className={'grid md:grid-cols-2 gap-[15px]'}>
					{uspData.map((item, idx) => (
						<li key={idx} className={'rounded-lg px-[20px] pt-[15px] pb-[25px] shadow-box border-2'}>
							<h3 className={'text-lg font-semibold mb-[10px]'}>{item.title}</h3>
							<p>{item.perex}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default WhyWithUs;
