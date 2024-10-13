import Image from 'next/image';
import React from 'react';

const uspData = [
	{
		title: 'Je tady tisíce možností k nákupu jakéhokoliv druhu vysněné nemovitosti',
		perex:
			'Mimo neskutečnou přírodu, bezpečí a klid, nabízí Španělsko mnoho možností. Vše je tady máte na dosah. Přírodu, zábavu, restaurace a hlavně slunce více jak 300 dní v roce.',
	},
	{
		title: 'Pomůžeme s výdělkem i financováním',
		perex:
			'Vybereme Vám nejhezčí domy byty či pozemky, máme v oblasti již letité zkušenosti. Dokážeme poskytnout kompletní podporu od financování koupě až po eventuelní pronájem.',
	},
	{
		title: 'Velký ráj pro všechny milovníky sportu i odpočinkové turistiky',
		perex:
			'Španělsko je jednou z nejvyhledávanějších destinaci, kde žije mnoho národností právěz důvodu výborné polohy, počasí, dostupnosti a bezpečnosti',
	},
	{
		title: 'Servis pro Vás',
		perex:
			'Nejsme jen běžní zprostředkovatelé, ve Španělsku máme stálý český tým, a proto s vámi vyřešíme cokoliv, co potřebujete a hlavně v českém jazyce.',
	},
];

const WhyWithUs = () => {
	return (
		<div className={'container grid xl:grid-cols-2 gap-[4rem] items-center text-white mb-[120px]'}>
			<div className={'relative flex flex-wrap xl:left-[-5rem] justify-center items-center order-1 xl:order-none w-full h-full'}>
				<Image
					src={'/assets/beach.webp'}
					alt={'third'}
					width={380}
					height={600}
					className={'object-cover rounded-lg z-[-1] xl:absolute xl:right-[7rem] top-1/2 xl:-translate-y-1/2'}
				/>
				<Image
					src={'/assets/cycling.webp'}
					alt={'second'}
					width={370}
					height={600}
					className={'object-cover rounded-lg xl:absolute xl:right-[5rem] top-1/2 xl:-translate-y-1/2'}
				/>
				<Image
					src={'/assets/golf.webp'}
					alt={'first'}
					width={400}
					height={600}
					className={'object-cover rounded-lg xl:absolute xl:right-0 top-1/2 xl:-translate-y-1/2'}
				/>
			</div>
			<div>
				<h2 className={'text-4xl md:text-5xl xl:text-6xl mb-[25px]'}>Proč koupit nemovitost s námi?</h2>
				<p className={'text-lg md:text-xl mb-[25px]'}>Protože jsme v oblasti nejzkušenější a víme co děléme...</p>
				<ul className={'grid md:grid-cols-2 gap-[15px]'}>
					{uspData.map((item, idx) => (
						<li key={idx} className={'bg-white/10 rounded-lg px-[10px] pt-[15px] pb-[25px]'}>
							<h3 className={'text-lg text-center font-semibold mb-[15px]'}>{item.title}</h3>
							<p className={'text-center'}>{item.perex}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default WhyWithUs;
