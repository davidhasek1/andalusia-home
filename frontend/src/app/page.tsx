import { Stack } from '@mui/material';
import { Header } from '../components/homepage/Header';
import { AboutUs } from '../components/homepage/AboutUs';
import { WhySpain } from '../components/homepage/WhySpain';
//import { FeaturedProperties } from '../components/homepage/FeaturedProperties';
import { FeaturedBlog } from '../components/homepage/FeaturedBlog';
import { Benefits } from '../components/homepage/Benefits';
import { WhyWithUs } from '../components/homepage/WhyWithUs';
import { Faq } from '../components/homepage/Faq';

const Homepage = () => {
	return (
		<Stack>
			<Header />

			<Stack p={{ xl: 20, lg: 15, md: 10, xs: 2 }} pt={{ xs: 10 }} gap={25}>
				<Benefits />
				<AboutUs order={1} />
				<WhySpain order={2} />
				<WhyWithUs order={3} />
				<FeaturedBlog order={4} />
				<Faq order={5} />
				{/* <FeaturedProperties order={3} />*/}
			</Stack>
		</Stack>
	);
};

export default Homepage;
