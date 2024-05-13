/* eslint-disable formatjs/no-literal-string-in-jsx */
'use client';
import { Button, Grid, IconButton, Stack, Typography } from '@mui/material';
import { FC, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import image1 from '../../../public/undraw_building_blocks_re_5ahy.svg';
import image2 from '../../../public/assets/main-image.webp';
import image3 from '../../../public/assets/main-image-heart.webp';
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

export const PropertyDetail: FC = () => {
	const [open, setOpen] = useState(false);
	return (
		<Stack gap={3}>
			<Lightbox
				open={open}
				close={() => setOpen(false)}
				slides={[image1, image2, image3]}
				render={{ slide: NextJsImage, thumbnail: NextJsImage }}
				plugins={[Thumbnails]}
			/>
			<Stack>
				<Stack position={'relative'} height={{ lg: '70vh', xs: '40vh' }} width={'100%'}>
					<Typography
						variant={'h2'}
						sx={{ zIndex: 2, position: 'absolute', color: (theme) => theme.palette.common.white, left: 0, top: 0, mt: 2, ml: 2 }}
					>
						Elviria
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
						Elviria, Malaga
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
					<Image src={image3} alt={'foo'} fill objectFit={'cover'}></Image>
				</Stack>
			</Stack>

			<Grid container flexDirection={'row'} justifyContent={'space-between'}>
				<Grid item xs={12} lg={8} border={(theme) => `1px solid ${theme.palette.grey[300]}`} p={3}>
					Dscription in bodered box wit withd bg
				</Grid>
				<Grid item xs={12} lg={4} bgcolor={(theme) => theme.palette.grey[200]} p={3} width={'100%'}>
					<Stack gap={3}>
						<Stack direction={'row'} alignItems={'center'} gap={2}>
							<BedOutlined fontSize={'large'} />3 Bedrooms
						</Stack>
						<Stack direction={'row'} alignItems={'center'} gap={2}>
							<ShowerOutlined fontSize={'large'} />2 Bathrooms
						</Stack>
					</Stack>
				</Grid>
			</Grid>
		</Stack>
	);
};
