import FeaturedBlogArticles from 'components/homepage/FeaturedBlogArticles';
import FeaturedPropertiesSlider from 'components/homepage/FeaturedPropertiesSlider';
import Header from 'components/homepage/Header';
import OurServices from 'components/homepage/OurServices';
import WhySpain from 'components/homepage/WhySpain/WhySpain';
import WhyWithUs from 'components/homepage/WhyWithUs';

const Homepage = () => {
	return (
		<main>
			<Header />
			<WhyWithUs />
			<OurServices />
			<WhySpain />
			<FeaturedPropertiesSlider />
			<FeaturedBlogArticles />
		</main>
	);
};

export default Homepage;
