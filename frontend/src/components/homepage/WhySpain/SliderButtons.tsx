import { Button } from 'components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwiper } from 'swiper/react';

const SliderButtons = () => {
	const swiper = useSwiper();
	return (
		<div className={'flex items-center gap-[1rem] absolute top-0 right-0'}>
			<Button variant={'outline'} size={'icon'} onClick={() => swiper.slidePrev()} className={'rounded-full bg-transparent border-black'}>
				<ChevronLeft />
			</Button>
			<Button variant={'outline'} size={'icon'} onClick={() => swiper.slideNext()} className={'rounded-full bg-transparent border-black'}>
				<ChevronRight />
			</Button>
		</div>
	);
};

export default SliderButtons;
