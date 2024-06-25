import { Stack } from '@mui/material';
import { ContactForm } from '../../components/ContactForm';

const Homepage = () => {
	return (
		<Stack>
			<ContactForm imageSrc={'assets/main-image-heart.webp'} isContactPage />
		</Stack>
	);
};

export default Homepage;
