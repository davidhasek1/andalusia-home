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
import { GetMoreInfoForm } from './GetMoreInfoForm';

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
		<Grid container>
			<Grid item lg={12} xs={12}>
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
				</Stack>
			</Grid>
			<Grid item lg={8} md={12} border={(theme) => `1px solid ${theme.palette.grey[300]}`} p={3} mt={3}>
				<Typography variant={'caption'} fontSize={16} lineHeight={'2.5rem'}>
					{property?.Description}
				</Typography>
			</Grid>
			<Grid item lg={4} display={{ lg: 'flex', xs: 'none' }}>
				<Stack minHeight={'100%'} position={{ lg: 'absolute', md: 'relative' }} width={400} right={80} pt={3} zIndex={0}>
					<Stack position={'sticky'} top={50} zIndex={10} width={'100%'}>
						<GetMoreInfoForm />
					</Stack>
				</Stack>
			</Grid>
			<Grid item lg={8} xs={12}>
				<Stack bgcolor={(theme) => theme.palette.grey[200]}>
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
			Commodo do minim consequat fugiat adipisicing ea ut aliqua aute consequat ea. Aliqua ullamco fugiat nulla aliqua commodo ipsum do ea
			id irure deserunt. Sunt mollit excepteur consequat culpa. Sit consequat officia eu pariatur et ullamco ipsum ad enim fugiat eu
			pariatur proident veniam. Magna magna irure pariatur dolor culpa pariatur ipsum. Esse anim commodo do consectetur. Minim ut aliquip
			est voluptate exercitation anim Lorem. Labore ad deserunt velit deserunt et anim reprehenderit ullamco. Amet consequat cillum sint
			enim culpa occaecat velit qui eiusmod quis excepteur do dolor. Ea ea ut labore esse laboris ullamco eu nisi. Nulla deserunt sunt
			eiusmod nostrud culpa anim eiusmod aute velit dolor pariatur. Ullamco fugiat dolore proident proident et amet ut ad nostrud est cillum
			do cillum Lorem. Anim ipsum laboris est officia enim labore fugiat incididunt. Culpa sit incididunt dolor magna deserunt eiusmod amet.
			Irure Lorem amet tempor anim occaecat nulla eiusmod adipisicing eiusmod incididunt. Deserunt ut id cillum minim enim. Ea commodo
			labore nulla veniam magna eiusmod ipsum ullamco. Commodo consectetur ipsum fugiat nostrud est et fugiat sit occaecat officia. Nisi non
			ullamco ut proident id Lorem eiusmod exercitation ullamco commodo nulla id elit. Elit consequat sint enim enim amet eiusmod ad est
			sint ex id ut. Et sunt minim sint qui consectetur consequat ex. Adipisicing commodo nulla consequat velit commodo aliqua dolore nisi.
			Tempor consequat non veniam consectetur laborum ullamco nulla in amet id anim laboris ea labore. Aute ullamco fugiat labore non dolor
			ullamco officia excepteur Lorem occaecat dolore culpa. Amet est pariatur pariatur enim aute minim consectetur duis sunt ut
			exercitation eiusmod consequat. Magna reprehenderit officia eiusmod dolor cupidatat ad eu minim minim ad adipisicing irure pariatur.
			Fugiat occaecat eiusmod cupidatat veniam do eiusmod. Consectetur dolore id magna veniam in non nisi ut ipsum officia velit amet Lorem
			aliquip. Est laboris exercitation ut enim aliqua officia sunt culpa ad. Lorem labore Lorem adipisicing mollit aliquip labore id anim
			quis nostrud ea ipsum. Ipsum sint incididunt labore velit. Velit culpa ea est fugiat et elit cillum reprehenderit excepteur. Occaecat
			amet dolor id eu dolor. Adipisicing et tempor fugiat sint ipsum do sint anim nostrud amet deserunt proident minim. Veniam labore
			consectetur do sunt laborum voluptate cillum ipsum dolor aute ipsum dolor voluptate. Mollit nostrud nulla non dolore laboris. Eiusmod
			non sit labore enim veniam amet consequat veniam irure veniam Lorem. In tempor reprehenderit magna nulla officia do anim. Eiusmod
			irure culpa elit proident voluptate est qui Lorem sit ad deserunt exercitation. Laboris incididunt est culpa aute pariatur sunt id
			sunt sunt voluptate veniam consectetur. Dolore velit nostrud pariatur id tempor anim. Velit cupidatat labore sunt minim dolore dolore
			aliqua eiusmod exercitation. Tempor sint culpa anim anim duis ea aute deserunt eu. Qui id exercitation est cupidatat amet aliqua
			nostrud commodo ullamco duis esse culpa in. Adipisicing adipisicing excepteur labore officia mollit reprehenderit ea minim
			esse.Commodo do minim consequat fugiat adipisicing ea ut aliqua aute consequat ea. Aliqua ullamco fugiat nulla aliqua commodo ipsum do
			ea id irure deserunt. Sunt mollit excepteur consequat culpa. Sit consequat officia eu pariatur et ullamco ipsum ad enim fugiat eu
			pariatur proident veniam. Magna magna irure pariatur dolor culpa pariatur ipsum. Esse anim commodo do consectetur. Minim ut aliquip
			est voluptate exercitation anim Lorem. Labore ad deserunt velit deserunt et anim reprehenderit ullamco. Amet consequat cillum sint
			enim culpa occaecat velit qui eiusmod quis excepteur do dolor. Ea ea ut labore esse laboris ullamco eu nisi. Nulla deserunt sunt
			eiusmod nostrud culpa anim eiusmod aute velit dolor pariatur. Ullamco fugiat dolore proident proident et amet ut ad nostrud est cillum
			do cillum Lorem. Anim ipsum laboris est officia enim labore fugiat incididunt. Culpa sit incididunt dolor magna deserunt eiusmod amet.
			Irure Lorem amet tempor anim occaecat nulla eiusmod adipisicing eiusmod incididunt. Deserunt ut id cillum minim enim. Ea commodo
			labore nulla veniam magna eiusmod ipsum ullamco. Commodo consectetur ipsum fugiat nostrud est et fugiat sit occaecat officia. Nisi non
			ullamco ut proident id Lorem eiusmod exercitation ullamco commodo nulla id elit. Elit consequat sint enim enim amet eiusmod ad est
			sint ex id ut. Et sunt minim sint qui consectetur consequat ex. Adipisicing commodo nulla consequat velit commodo aliqua dolore nisi.
			Tempor consequat non veniam consectetur laborum ullamco nulla in amet id anim laboris ea labore. Aute ullamco fugiat labore non dolor
			ullamco officia excepteur Lorem occaecat dolore culpa. Amet est pariatur pariatur enim aute minim consectetur duis sunt ut
			exercitation eiusmod consequat. Magna reprehenderit officia eiusmod dolor cupidatat ad eu minim minim ad adipisicing irure pariatur.
			Fugiat occaecat eiusmod cupidatat veniam do eiusmod. Consectetur dolore id magna veniam in non nisi ut ipsum officia velit amet Lorem
			aliquip. Est laboris exercitation ut enim aliqua officia sunt culpa ad. Lorem labore Lorem adipisicing mollit aliquip labore id anim
			quis nostrud ea ipsum. Ipsum sint incididunt labore velit. Velit culpa ea est fugiat et elit cillum reprehenderit excepteur. Occaecat
			amet dolor id eu dolor. Adipisicing et tempor fugiat sint ipsum do sint anim nostrud amet deserunt proident minim. Veniam labore
			consectetur do sunt laborum voluptate cillum ipsum dolor aute ipsum dolor voluptate. Mollit nostrud nulla non dolore laboris. Eiusmod
			non sit labore enim veniam amet consequat veniam irure veniam Lorem. In tempor reprehenderit magna nulla officia do anim. Eiusmod
			irure culpa elit proident voluptate est qui Lorem sit ad deserunt exercitation. Laboris incididunt est culpa aute pariatur sunt id
			sunt sunt voluptate veniam consectetur. Dolore velit nostrud pariatur id tempor anim. Velit cupidatat labore sunt minim dolore dolore
			aliqua eiusmod exercitation. Tempor sint culpa anim anim duis ea aute deserunt eu. Qui id exercitation est cupidatat amet aliqua
			nostrud commodo ullamco duis esse culpa in. Adipisicing adipisicing excepteur labore officia mollit reprehenderit ea minim
			esse.Commodo do minim consequat fugiat adipisicing ea ut aliqua aute consequat ea. Aliqua ullamco fugiat nulla aliqua commodo ipsum do
			ea id irure deserunt. Sunt mollit excepteur consequat culpa. Sit consequat officia eu pariatur et ullamco ipsum ad enim fugiat eu
			pariatur proident veniam. Magna magna irure pariatur dolor culpa pariatur ipsum. Esse anim commodo do consectetur. Minim ut aliquip
			est voluptate exercitation anim Lorem. Labore ad deserunt velit deserunt et anim reprehenderit ullamco. Amet consequat cillum sint
			enim culpa occaecat velit qui eiusmod quis excepteur do dolor. Ea ea ut labore esse laboris ullamco eu nisi. Nulla deserunt sunt
			eiusmod nostrud culpa anim eiusmod aute velit dolor pariatur. Ullamco fugiat dolore proident proident et amet ut ad nostrud est cillum
			do cillum Lorem. Anim ipsum laboris est officia enim labore fugiat incididunt. Culpa sit incididunt dolor magna deserunt eiusmod amet.
			Irure Lorem amet tempor anim occaecat nulla eiusmod adipisicing eiusmod incididunt. Deserunt ut id cillum minim enim. Ea commodo
			labore nulla veniam magna eiusmod ipsum ullamco. Commodo consectetur ipsum fugiat nostrud est et fugiat sit occaecat officia. Nisi non
			ullamco ut proident id Lorem eiusmod exercitation ullamco commodo nulla id elit. Elit consequat sint enim enim amet eiusmod ad est
			sint ex id ut. Et sunt minim sint qui consectetur consequat ex. Adipisicing commodo nulla consequat velit commodo aliqua dolore nisi.
			Tempor consequat non veniam consectetur laborum ullamco nulla in amet id anim laboris ea labore. Aute ullamco fugiat labore non dolor
			ullamco officia excepteur Lorem occaecat dolore culpa. Amet est pariatur pariatur enim aute minim consectetur duis sunt ut
			exercitation eiusmod consequat. Magna reprehenderit officia eiusmod dolor cupidatat ad eu minim minim ad adipisicing irure pariatur.
			Fugiat occaecat eiusmod cupidatat veniam do eiusmod. Consectetur dolore id magna veniam in non nisi ut ipsum officia velit amet Lorem
			aliquip. Est laboris exercitation ut enim aliqua officia sunt culpa ad. Lorem labore Lorem adipisicing mollit aliquip labore id anim
			quis nostrud ea ipsum. Ipsum sint incididunt labore velit. Velit culpa ea est fugiat et elit cillum reprehenderit excepteur. Occaecat
			amet dolor id eu dolor. Adipisicing et tempor fugiat sint ipsum do sint anim nostrud amet deserunt proident minim. Veniam labore
			consectetur do sunt laborum voluptate cillum ipsum dolor aute ipsum dolor voluptate. Mollit nostrud nulla non dolore laboris. Eiusmod
			non sit labore enim veniam amet consequat veniam irure veniam Lorem. In tempor reprehenderit magna nulla officia do anim. Eiusmod
			irure culpa elit proident voluptate est qui Lorem sit ad deserunt exercitation. Laboris incididunt est culpa aute pariatur sunt id
			sunt sunt voluptate veniam consectetur. Dolore velit nostrud pariatur id tempor anim. Velit cupidatat labore sunt minim dolore dolore
			aliqua eiusmod exercitation. Tempor sint culpa anim anim duis ea aute deserunt eu. Qui id exercitation est cupidatat amet aliqua
			nostrud commodo ullamco duis esse culpa in. Adipisicing adipisicing excepteur labore officia mollit reprehenderit ea minim esse.
		</Grid>
	);
};
