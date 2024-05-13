'use client';
import { Button, ButtonBase, IconButton, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
import { DocumentType } from '../../gql';
import { listProperties } from './PropertiesList';
import {
	BedOutlined,
	DeckOutlined,
	FavoriteBorderOutlined,
	FavoriteOutlined,
	HomeOutlined,
	ShowerOutlined,
	ZoomOutMapOutlined,
} from '@mui/icons-material';

type Props = Readonly<{ property: DocumentType<typeof listProperties>['listPropertiesForSale']['Property'][number] }>;

export const PropertyCard: FC<Props> = ({ property }) => {
	return (
		<ButtonBase sx={{ display: 'flex' }} href={`/properties/${property.AgencyRef}}`}>
			<Stack direction={{ lg: 'row', xs: 'column' }} gap={2} border={(theme) => `1px solid ${theme.palette.grey[300]}`}>
				{/* Preparation for clickable arrows for card lightbox */}
				{/* <Button
					onClick={(e) => {
						e.stopPropagation();
						e.preventDefault();
						console.log('stop');
					}}
				>
					
					Btn
				</Button> */}
				<Image src={'/assets/property-placeholder.webp'} width={500} height={300} alt={'altertext'} />
				<Stack gap={1} p={2} flexGrow={1}>
					<Stack direction={'row'} justifyContent={'space-between'} gap={2}>
						<Typography variant={'h6'}>
							{/* eslint-disable-next-line formatjs/no-literal-string-in-jsx */}
							{property.Location}, {property.Province}, {property.Area}
						</Typography>
						<Stack direction={'row'}>
							<IconButton
								onClick={(e) => {
									e.stopPropagation();
									e.preventDefault();
									console.log('stop');
								}}
							>
								<FavoriteBorderOutlined fill={'#ff0000'} />
							</IconButton>
							<IconButton
								onClick={(e) => {
									e.stopPropagation();
									e.preventDefault();
									console.log('stop');
								}}
							>
								<FavoriteOutlined />
							</IconButton>
						</Stack>
					</Stack>
					<Typography variant={'body1'} fontSize={30} fontWeight={800}>
						{property.Price} {property.Currency}
					</Typography>
					<Typography
						variant={'body1'}
						sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical' }}
					>
						{property.Description}
					</Typography>
					<Stack direction={'row'} gap={2} flexWrap={'wrap'} marginTop={'auto'}>
						<Stack direction={'row'} gap={2} alignItems={'center'}>
							<ShowerOutlined /> {property.Bathrooms}
						</Stack>
						<Stack direction={'row'} gap={2} alignItems={'center'}>
							<BedOutlined /> {property.Bedrooms}
						</Stack>
						<Stack direction={'row'} gap={2} alignItems={'center'}>
							{/* eslint-disable-next-line formatjs/no-literal-string-in-jsx */}
							<HomeOutlined /> {property.Built} m2
						</Stack>
						<Stack direction={'row'} gap={2} alignItems={'center'}>
							{/* eslint-disable-next-line formatjs/no-literal-string-in-jsx */}
							<DeckOutlined /> {property.GardenPlot} m2
						</Stack>
						<Stack direction={'row'} gap={2} alignItems={'center'}>
							{/* eslint-disable-next-line formatjs/no-literal-string-in-jsx */}
							<ZoomOutMapOutlined /> {property.Built + property.GardenPlot} m2
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</ButtonBase>
	);
};
