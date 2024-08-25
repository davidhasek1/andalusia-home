import { Stack } from '@mui/material';
import { AboutUs } from 'components/homepage/AboutUs';
import React from 'react';

const AboutUsPage = () => {
	return (
		<Stack p={{ md: 10, xs: 2 }}>
			<AboutUs order={1} />
		</Stack>
	);
};

export default AboutUsPage;
