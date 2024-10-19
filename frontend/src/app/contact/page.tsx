import { ContactForm } from '../../components/ContactForm';
import Image from 'next/image';
import { FormattedMessage } from 'components/utils/FormattedMessage';

const ContactPage = () => {
	return (
		<>
			<div className={'relative text-white'}>
				<Image
					src={'/assets/main-image-heart.webp'}
					width={1200}
					height={900}
					alt={'contact-image'}
					className={'aspect-auto-[1200/900] w-full h-[40vh] md:h-[60vh] brightness-[0.65]'}
				/>
				<div className={'absolute left-[2rem] md:left-[4rem] bottom-[5rem]'}>
					<h1 className={'text-4xl sm:text-5xl md:text-6xl font-semibold mb-[40px]'}>
						<FormattedMessage id={'contact-form.title'} />
					</h1>
					<a href={'mailto:info@andalusiahome.cz'} className={'text-xl md:text-2xl mr-[3rem] underline hover:no-underline'}>
						info@andalusiahome.cz
					</a>
					<a
						href={'tel:+420 604 295 800'}
						className={'text-xl md:text-2xl underline hover:no-underline block md:inline mt-[1.5rem] md:mt-0'}
					>
						+420 604 295 800
					</a>
				</div>
			</div>
			<ContactForm />
		</>
	);
};

export default ContactPage;
