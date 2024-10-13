import React from 'react';
import WhySpainSlider from './WhySpainSlider';

const WhySpain = () => {
	return (
		<div className={'container text-white mb-[120px]'}>
			<div className={'grid xl:grid-cols-[600px_1fr] gap-[1rem] xl:gap-[5rem] justify-between mb-[45px]'}>
				<h2 className={'text-4xl md:text-5xl xl:text-6xl !leading-[1.2]'}>Proč vybrat právě Španělsko</h2>
				<p className={'md:text-lg'}>
					España cuenta con una rica culture, hermosos paisajes y un clima cálido, lo que la convierte en el lugar perfecto para un estilo
					de vida lujoso lleno de encanto y una calidad de vida excepcional.
				</p>
			</div>
			<WhySpainSlider />
		</div>
	);
};

export default WhySpain;
