import Image from 'next/image';
import React from 'react';

const services = [
	{
		title: '10% roční růst ceny nemovitosti',
		perex:
			'Jsme schopni Vám pomoci při zajišťování pronájmu Vaší nemovitosti a zajistik kompletní servis včetně daňového přiznání vašich příjmů z pronájmu.',
		icon: '/assets/our-services-1.svg',
	},
	{
		title: 'Vše vyřešíme za vás',
		perex:
			'Od nezávazného pohovoru až po předání klíčů nebo pronájem. O vše se postaráme. Užívejte si dovolenou a pasivní příjem z dobré investice.',
		icon: '/assets/our-services-2.svg',
	},
	{
		title: 'Život v ráji a v pohodě',
		perex: '3 hodiny letu z Prahy a jste ve svém druhém domově na nejjižnějším cípu Evropy na slunci a v pohodě.',
		icon: '/assets/our-services-3.svg',
	},
];

const OurServices = () => {
	return (
		<div className={'container bg-our-services text-white mb-[120px]'}>
			<div className={'max-w-[650px] mx-auto'}>
				<h2 className={'text-4xl md:text-5xl xl:text-6xl text-center mb-[25px]'}>Naše služby</h2>
				<p className={'md:text-lg text-center mb-[45px]'}>
					Poskytujeme komplexní služby v oblasti luxusních nemovitostí s důrazem na individuální přístup a profesionalitu.
				</p>
			</div>
			<ul className={'grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-[20px]'}>
				{services.map((item, idx) => (
					<li key={idx} className={'bg-white/10 rounded-xl border border-white py-[25px] px-[15px] h-full'}>
						<div
							className={
								'flex justify-center items-center bg-primary border border-white/10 rounded-full w-[80px] h-[80px] mx-auto mb-[25px]'
							}
						>
							<Image src={item.icon} alt={item.title} width={50} height={50} className={'object-cover'} />
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
