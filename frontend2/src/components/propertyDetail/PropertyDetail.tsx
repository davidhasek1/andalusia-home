/* eslint-disable formatjs/no-literal-string-in-jsx */
'use client';
import { Button, CircularProgress, Grid, IconButton, Stack, Tab, Tabs, Typography } from '@mui/material';
import { FC, useRef, useState } from 'react';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import NextJsImage from './NextjsImage';
import Image from 'next/image';
import CollectionsIcon from '@mui/icons-material/Collections';

import { useQuery } from '@apollo/client';
import { DocumentType, graphql } from '../../gql';
import { GetMoreInfoForm } from './GetMoreInfoForm';
import { PropertyEssentialInfo } from './PropertyEssentialInfo';
import { FormattedMessage } from 'react-intl';
import theme from '../../theme';

const getPropertyDetail = graphql(`
	query GetPropertyForSale($referenceId: ID!) {
		getPropertyForSale(referenceId: $referenceId) {
			Property {
				Reference
				AgencyRef
				Country
				Province
				Area
				Location
				SubLocation
				PropertyType {
					NameType
					Type
					TypeId
					Subtype1
					SubtypeId1
				}
				Bedrooms
				Bathrooms
				Currency
				Price
				OriginalPrice
				Community_Fees_Year
				Basura_Tax_Year
				IBI_Fees_Year
				Dimensions
				Built
				Terrace
				GardenPlot
				OwnProperty
				Pool
				Parking
				Garden
				CompletionDate
				BuiltYear
				Description
				PropertyFeatures {
					Category {
						Type
						Value
					}
				}
				Pictures {
					Count
					Picture {
						Id
						PictureURL
					}
				}
			}
		}
	}
`);

export type PropertyDetail = DocumentType<typeof getPropertyDetail>['getPropertyForSale']['Property'];
export const PropertyDetail: FC<Readonly<{ referenceId: string }>> = ({ referenceId }) => {
	const [open, setOpen] = useState(false);
	const { data, loading } = useQuery(getPropertyDetail, { variables: { referenceId } });

	const [tab, setTab] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setTab(newValue);
	};

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

	const handleScrollToDescription = (e: any, id: string) => {
		e.preventDefault();
		if (document) {
			document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<Stack>
			<Stack gap={3}>
				<Lightbox open={open} close={() => setOpen(false)} slides={images as SlideImage[]} render={{ slide: NextJsImage }} />
				<Stack>
					<Stack position={'relative'} height={{ lg: '50vh', xs: '40vh' }} width={'100%'} margin={'auto'}>
						<Typography
							variant={'h2'}
							sx={{ zIndex: 2, position: 'absolute', color: (theme) => theme.palette.common.white, left: 0, top: 0, mt: 2, ml: 2 }}
						>
							{/* eslint-disable-next-line formatjs/no-literal-string-in-jsx */}
							{property?.Location}, {property?.Province}, {property?.Area}
						</Typography>
						<Button
							variant={'outlined'}
							sx={{
								px: 4,
								py: 1,
								zIndex: 2,
								position: 'absolute',
								left: 0,
								bottom: 0,
								mb: 2,
								ml: 2,
								outline: (theme) => `1px solid${theme.palette.common.white}`,
								color: (theme) => theme.palette.common.white,
								'&:disabled': { color: (theme) => theme.palette.common.white },
							}}
							disabled
						>
							{/* eslint-disable-next-line formatjs/no-literal-string-in-jsx */}
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

			<Stack border={(theme) => `1px solid ${theme.palette.grey[300]}`} p={1} m={3}>
				<PropertyEssentialInfo property={property} />
			</Stack>

			<Stack p={3}>
				<Stack>
					<Tabs
						value={tab}
						onChange={handleChange}
						textColor={'inherit'}
						indicatorColor={'primary'}
						sx={{
							marginBottom: 3,
							'.MuiTabs-flexContainer': { borderBottom: (theme) => `1px solid ${theme.palette.grey[300]}` },
							'.MuiTabs-indicator': { backgroundColor: (theme) => theme.palette.common.black },
						}}
					>
						<Tab
							href={'#description'}
							onClick={(e) => handleScrollToDescription(e, '#description')}
							value={0}
							label={<FormattedMessage id={'property.detail.tab.description'} />}
						/>

						<Tab
							href={'#essential-info'}
							onClick={(e) => handleScrollToDescription(e, '#essential-info')}
							value={1}
							label={<FormattedMessage id={'property.detail.tab.essential-info'} />}
						/>

						<Tab
							href={'#essential-info'}
							onClick={(e) => handleScrollToDescription(e, '#features')}
							value={2}
							label={<FormattedMessage id={'property.detail.tab.features'} />}
						/>
					</Tabs>
				</Stack>
				<Stack gap={{ lg: 0, xs: 3 }}>
					<Stack direction={'row'}>
						<Stack
							id={'description'}
							gap={2}
							p={3}
							border={(theme) => `1px solid ${theme.palette.grey[200]}`}
							width={{ lg: '50%', md: '100%', xs: '100%' }}
							alignSelf={'flex-start'}
							minHeight={500}
						>
							<Typography variant={'h4'} lineHeight={'2.5rem'} textAlign={'justify'}>
								<FormattedMessage id={'property.detail.description'} />
							</Typography>
							<Typography variant={'caption'} fontSize={16} lineHeight={'2.5rem'} textAlign={'justify'}>
								{property?.Description}
							</Typography>
						</Stack>
						<Stack
							display={{ lg: 'flex', md: 'none', xs: 'none' }}
							p={2}
							position={'relative'}
							width={'50%'}
							height={'100%'}
							sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
						>
							<Image src={images[0].src ?? ''} alt={'foo'} fill objectFit={'cover'}></Image>
						</Stack>
					</Stack>

					<Stack direction={'row'}>
						<Stack
							display={{ lg: 'flex', md: 'none', xs: 'none' }}
							p={2}
							position={'relative'}
							width={'50%'}
							height={'100%'}
							sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
						>
							<Image src={images[1].src ?? ''} alt={'foo'} fill objectFit={'cover'}></Image>
						</Stack>
						<Stack
							id={'essential-info'}
							gap={2}
							p={3}
							border={(theme) => `1px solid ${theme.palette.grey[200]}`}
							width={{ lg: '50%', md: '100%', xs: '100%' }}
							alignSelf={'flex-end'}
							minHeight={500}
						>
							<Typography variant={'h4'} lineHeight={'2.5rem'} textAlign={'justify'}>
								<FormattedMessage id={'property.detail.essential-info'} />
							</Typography>
							<Typography variant={'caption'} fontSize={16} lineHeight={'2.5rem'} textAlign={'justify'}>
								{property?.Description}
							</Typography>
						</Stack>
					</Stack>
					<Stack direction={'row'}>
						<Stack
							id={'features'}
							gap={2}
							p={3}
							border={(theme) => `1px solid ${theme.palette.grey[200]}`}
							width={{ lg: '50%', md: '100%', xs: '100%' }}
							alignSelf={'flex-start'}
							minHeight={500}
						>
							<Typography variant={'h4'} lineHeight={'2.5rem'} textAlign={'justify'}>
								<FormattedMessage id={'property.detail.features'} />
							</Typography>

							<Grid display={'grid'} gridTemplateColumns={'1fr 1fr 1fr'} gap={4}>
								{property?.PropertyFeatures.Category.map((feature) => (
									<Stack key={feature.Type}>
										<Typography variant={'caption'} fontSize={14} color={'GrayText'}>
											{feature.Type}
										</Typography>
										<Typography variant={'caption'} fontSize={18}>
											{feature.Value[0]}
										</Typography>
									</Stack>
								))}
							</Grid>
						</Stack>
						<Stack
							display={{ lg: 'flex', md: 'none', xs: 'none' }}
							p={2}
							position={'relative'}
							width={'50%'}
							height={'100%'}
							sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
						>
							<Image src={images[1].src ?? ''} alt={'foo'} fill objectFit={'cover'}></Image>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};
