/* eslint-disable formatjs/no-literal-string-in-jsx */
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const BlogCard = () => {
	return (
		<Card sx={{ width: { xs: '100%', sm: '25rem' }, borderRadius: 0 }}>
			<Box position={'relative'} width={'100%'} height={'15rem'}>
				<Image src={'/assets/main-image-heart.webp'} fill alt={''} sizes={'25vw'} />
			</Box>
			<Stack p={'1.5rem'} gap={'0.3rem'}>
				<Typography>Leden 2023</Typography>
				<Typography fontWeight={600} fontSize={{ xs: '1.4rem', sm: '1.6rem' }} lineHeight={1.3}>
					Lorem ipsum dolor sit amet
				</Typography>
				<Typography>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec sapien a magna dignissim auctor sit amet vel enim. Sed ornare
					ligula eu dapibus laoreet.
				</Typography>
			</Stack>
		</Card>
	);
};

export default BlogCard;
