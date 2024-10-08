'use client';
import { Box, Button, ButtonBase, IconButton, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { FC, useState } from 'react';
import { DocumentType } from '../../gql';

import {
	BedOutlined,
	DeckOutlined,
	FavoriteBorderOutlined,
	FavoriteOutlined,
	HomeOutlined,
	ShowerOutlined,
	ZoomOutMapOutlined,
} from '@mui/icons-material';
import { useLocalStorage } from '../../hooks/useLocalStoarge';
import { useOpenSnackbar } from '../Snackbar';
import { formatNumber } from '../../helpers/formatNumber';
import { listProperties } from '../../utils/fetchProperties';

type PropertyItem = Readonly<{ property: DocumentType<typeof listProperties>['listPropertiesForSale']['Property'][number] }>;

type Props = PropertyItem & { isWatchlisted: boolean };

export const PropertyCard: FC<Props> = ({ property, isWatchlisted }) => {
	const { setLocalStorage, removeFromLocalStorage } = useLocalStorage('watchlist', 'Reference');
	const { openSnackbar, SnackBarComponent } = useOpenSnackbar();
	const [isWatchlistSelected, setIsWatchListSelected] = useState(isWatchlisted);

	return (
		<>
			<ButtonBase sx={{ display: 'flex' }} href={`/properties/${property.Reference}`}>
				<Stack direction={{ lg: 'row', xs: 'column' }} width={'100%'} gap={2} border={(theme) => `1px solid ${theme.palette.grey[300]}`}>
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

					<Box position={'relative'} minWidth={{ lg: 500, md: 350 }} height={{ lg: 350, xs: 400 }}>
						<Image
							src={property.MainImage ?? property.Pictures?.Picture?.[0]?.PictureURL ?? '/assets/property-placeholder.webp'}
							fill
							alt={''}
							loading={'eager'}
							draggable={false}
							style={{
								objectFit: 'cover',
							}}
							sizes={`${Math.ceil(50)}vw`}
						/>
					</Box>

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
										!isWatchlistSelected ? setLocalStorage(property) : removeFromLocalStorage(property.Reference as never);
										setIsWatchListSelected(!isWatchlistSelected);
										openSnackbar(!isWatchlistSelected ? 'Added to watchlist' : 'Removed');
									}}
								>
									{isWatchlistSelected ? <FavoriteOutlined sx={{ color: 'red' }} /> : <FavoriteBorderOutlined />}
								</IconButton>
							</Stack>
						</Stack>
						<Typography variant={'body1'} fontSize={30} fontWeight={800}>
							{formatNumber(property.Price)} {property.Currency}
						</Typography>
						<Typography
							variant={'body1'}
							sx={{
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								display: '-webkit-box',
								WebkitLineClamp: '3',
								WebkitBoxOrient: 'vertical',
							}}
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
			<SnackBarComponent />
		</>
	);
};
