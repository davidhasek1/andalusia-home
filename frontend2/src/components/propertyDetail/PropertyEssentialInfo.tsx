/* eslint-disable formatjs/no-literal-string-in-jsx */
import { Box, Grid, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { PropertyDetail } from './PropertyDetail';
import { FormattedMessage } from 'react-intl';

const Container: FC<{ title: JSX.Element | string; data: any }> = ({ title, data }) => {
	if (data == null || data === '') {
		return 'N/A';
	}

	return (
		<Stack p={2} px={2} gap={1} width={'100%'}>
			<Typography variant={'subtitle1'}>{title}</Typography>
			<Typography fontSize={22} fontWeight={900}>
				{data}
			</Typography>
		</Stack>
	);
};

export const PropertyEssentialInfo: FC<{ property: PropertyDetail | undefined }> = ({ property }) => {
	return (
		<Stack flexDirection={'row'}>
			<Container
				title={<FormattedMessage id={'property.detail.caption.price'} />}
				data={`${property?.Price} ${property?.Currency === 'EUR' ? '€' : property?.Currency}`}
			/>
			<Box alignSelf={'center'} width={'1px'} height={80} border={'none'} borderLeft={(theme) => `1px solid ${theme.palette.grey[300]}`} />
			<Container title={<FormattedMessage id={'property.detail.caption.bedrooms'} />} data={property?.Bedrooms} />
			<Box alignSelf={'center'} width={'1px'} height={80} border={'none'} borderLeft={(theme) => `1px solid ${theme.palette.grey[300]}`} />
			<Container title={<FormattedMessage id={'property.detail.caption.bathrooms'} />} data={property?.Bathrooms} />
			<Box alignSelf={'center'} width={'1px'} height={80} border={'none'} borderLeft={(theme) => `1px solid ${theme.palette.grey[300]}`} />
			<Container
				title={<FormattedMessage id={'property.detail.caption.plot-built-size'} />}
				data={property && property?.GardenPlot + property?.Built}
			/>
		</Stack>
	);
};
