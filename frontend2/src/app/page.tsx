import { Typography } from '@mui/material';

const Homepage = () => {
	// eslint-disable-next-line formatjs/no-literal-string-in-jsx
	return (
		<>
			<Typography variant={"h1"} fontWeight={300}>text</Typography>
			<Typography>text</Typography>
			<Typography variant={'caption'}>caption</Typography>
		</>
	);
};

export default Homepage;
