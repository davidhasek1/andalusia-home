/* eslint-disable formatjs/no-literal-string-in-jsx */
'use client';
import { Button, CircularProgress, Grid, IconButton, Stack, Typography } from '@mui/material';
import { FC, useState } from 'react';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import NextJsImage from './NextjsImage';
import Image from 'next/image';
import CollectionsIcon from '@mui/icons-material/Collections';
import {
	BedOutlined,
	DeckOutlined,
	FavoriteBorderOutlined,
	FavoriteOutlined,
	HomeOutlined,
	ShowerOutlined,
	ZoomOutMapOutlined,
} from '@mui/icons-material';
import { useQuery } from '@apollo/client';
import { DocumentType, graphql } from '../../gql';

const getPropertyDetail = graphql(`
	query GetPropertyForSale($referenceId: ID!) {
		getPropertyForSale(referenceId: $referenceId) {
			Property {
				Location
				Province
				Area
				Description
				Bedrooms
				Bathrooms
				Built
				Terrace
				GardenPlot
				Garden
				Price
				Currency
				Pictures {
					Picture {
						PictureURL
					}
				}
			}
		}
	}
`);

type PropertyDetail = DocumentType<typeof getPropertyDetail>['getPropertyForSale']['Property'];
export const PropertyDetail: FC<Readonly<{ referenceId: string }>> = ({ referenceId }) => {
	const [open, setOpen] = useState(false);
	const { data, loading } = useQuery(getPropertyDetail, { variables: { referenceId } });

	if (loading) {
		return <CircularProgress />;
	}
	const property = data?.getPropertyForSale.Property;

	const images =
		property?.Pictures?.Picture?.map((img) => {
			return {
				src: img?.PictureURL,
				width: 1,
				height: 1,
			};
		}) ?? [];

	return (
		<Stack gap={3}>
			<Lightbox open={open} close={() => setOpen(false)} slides={images as SlideImage[]} render={{ slide: NextJsImage }} />
			<Stack>
				<Stack position={'relative'} height={{ lg: '70vh', xs: '40vh' }} width={'100%'}>
					<Typography
						variant={'h2'}
						sx={{ zIndex: 2, position: 'absolute', color: (theme) => theme.palette.common.white, left: 0, top: 0, mt: 2, ml: 2 }}
					>
						{property?.Location}, {property?.Province}, {property?.Area}
					</Typography>
					<Button
						variant={'outlined'}
						sx={{
							px: 4,
							py: 1,
							zIndex: 2,
							position: 'absolute',
							right: 1,
							top: 0,
							mt: 2,
							mr: 2,
							outline: (theme) => `1px solid${theme.palette.common.white}`,
							color: (theme) => theme.palette.common.white,
							'&:disabled': { color: (theme) => theme.palette.common.white },
						}}
						disabled
					>
						{property?.Province}, {property?.Area}
					</Button>
					<IconButton
						onClick={() => setOpen(true)}
						sx={{
							zIndex: 2,
							position: 'absolute',
							right: 1,
							bottom: 0,
							p: 3,
							mr: 2,
							mb: 2,
							border: (theme) => `1px solid${theme.palette.common.white}`,
							color: (theme) => theme.palette.common.white,
						}}
					>
						<CollectionsIcon />
					</IconButton>
					<Stack
						zIndex={1}
						position={'absolute'}
						top={0}
						left={0}
						width={'100%'}
						height={'100%'}
						sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
					/>
					<Image src={images[0].src ?? ''} alt={'foo'} fill objectFit={'cover'}></Image>
				</Stack>
			</Stack>

			<Grid container flexDirection={'row'} justifyContent={'space-between'} gap={3} p={2} flexWrap={{ lg: 'nowrap', xs: 'wrap' }}>
				<Grid item xs={12} lg={8} border={(theme) => `1px solid ${theme.palette.grey[300]}`} p={3}>
					<Typography variant={'caption'} fontSize={16} lineHeight={'2.5rem'}>
						{property?.Description}
					</Typography>
				</Grid>
				<Grid item xs={12} lg={4} bgcolor={(theme) => theme.palette.grey[200]} width={'100%'}>
					<Stack>
						{property?.Bedrooms != null && (
							<Stack direction={'row'} alignItems={'center'} gap={2} p={3}>
								<BedOutlined fontSize={'large'} />
								{property.Bedrooms} Bedrooms
							</Stack>
						)}
						{property?.Bathrooms != null && (
							<Stack direction={'row'} alignItems={'center'} gap={2} p={3} borderTop={(theme) => `1px solid ${theme.palette.grey[400]}`}>
								<ShowerOutlined fontSize={'large'} />
								{property.Bathrooms} Bathrooms
							</Stack>
						)}
						{property?.Built != null && (
							<Stack direction={'row'} alignItems={'center'} gap={2} p={3} borderTop={(theme) => `1px solid ${theme.palette.grey[400]}`}>
								<HomeOutlined fontSize={'large'} />
								{property.Built} m2
							</Stack>
						)}
						{property?.GardenPlot != null && (
							<Stack direction={'row'} alignItems={'center'} gap={2} p={3} borderTop={(theme) => `1px solid ${theme.palette.grey[400]}`}>
								<DeckOutlined fontSize={'large'} />
								{property.GardenPlot} m2
							</Stack>
						)}
						{property?.GardenPlot != null && property?.Built != null && (
							<Stack direction={'row'} alignItems={'center'} gap={2} p={3} borderTop={(theme) => `1px solid ${theme.palette.grey[400]}`}>
								<ZoomOutMapOutlined fontSize={'large'} />
								{property?.GardenPlot + property?.Built} m2
							</Stack>
						)}

						{property?.Price != null && (
							<Stack direction={'row'} alignItems={'center'} gap={2} p={3} borderTop={(theme) => `1px solid ${theme.palette.grey[400]}`}>
								<Typography variant={'h4'}>
									{property.Price} {property.Currency}
								</Typography>
							</Stack>
						)}
					</Stack>
				</Grid>
			</Grid>
		</Stack>
	);
};
