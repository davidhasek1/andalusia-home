/* eslint-disable formatjs/no-literal-string-in-jsx */
'use client';
import { Button, ButtonBase, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

export const PropertyCard: FC = () => {
	return (
		<ButtonBase sx={{ textAlign: 'left' }} href={'/properties/test'}>
			<Stack direction={{ lg: 'row', xs: 'column' }} gap={2} bgcolor={(theme) => theme.palette.grey[100]}>
				{/* Preparation for clickable arrows for card lightbox */}
				<Button
					onClick={(e) => {
						e.stopPropagation();
						e.preventDefault();
						console.log('stop');
					}}
				>
					Btn
				</Button>
				<Image src={'/assets/property-placeholder.webp'} width={500} height={300} alt={'altertext'} />
				<Stack gap={1} p={2}>
					<Typography variant={'h6'}>Property Title</Typography>
					<Typography variant={'body1'} fontSize={30} fontWeight={800}>
						400,000$
					</Typography>
					<Typography variant={'body1'}>135 m² 2 bed. 6th floor exterior with lift Parking included</Typography>
					<Typography variant={'body1'}>
						For sale penthouse in the gated complex Albatros from the prestigious Playas del Duque developer, building quality in Marbella
						for more than 40 years. Impeccable property with 2 bedrooms and 2 bathrooms (possibility of making a third and a toilet), has 70
						m2 of living space and 40 m2 of terrace, with beautiful wide frontal views of the mountains and lateral views of the sea.It is
						the tallest and most predominant property on the façade, with a huge terrace provided with awnings designed to provide total
						privacy and shade in summer, as well as spectacular views.
					</Typography>
				</Stack>
			</Stack>
		</ButtonBase>
	);
};
