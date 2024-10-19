import React from 'react';
import WhySpainSlider from './WhySpainSlider';
import { FormattedMessage } from 'components/utils/FormattedMessage';

const WhySpain = () => {
	return (
		<div className={'container mb-[120px]'}>
			<div className={'grid xl:grid-cols-[600px_1fr] gap-[1rem] xl:gap-[5rem] justify-between mb-[20px] sm:mb-0'}>
				<h2 className={'text-4xl md:text-5xl xl:text-6xl !leading-[1.2] font-semibold'}>
					<FormattedMessage id={'homepage.section.why-spain.title'} />
				</h2>
				<p className={'md:text-lg'}>
					<FormattedMessage id={'homepage.section.why-spain.perex'} />
				</p>
			</div>
			<WhySpainSlider />
		</div>
	);
};

export default WhySpain;
