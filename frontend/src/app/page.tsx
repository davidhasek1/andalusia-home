import { Stack } from '@mui/material';
import { Header } from '../components/homepage/Header';
import { AboutUs } from '../components/homepage/AboutUs';
import { WhyChooseUs } from '../components/homepage/WhyChooseUs';
import { ClientsReviews } from '../components/homepage/ClientsReviews';
import { FeaturedBlog } from '../components/homepage/FeaturedBlog';

const Homepage = () => {
	return (
		<Stack>
			<Header />

			<Stack p={{ xl: 20, lg: 15, md: 10, xs: 2 }} gap={25}>
				<AboutUs order={1} />
				<WhyChooseUs order={2} />
				<ClientsReviews order={3} />
				<FeaturedBlog order={4} />
			</Stack>
		</Stack>
	);
};

export default Homepage;
