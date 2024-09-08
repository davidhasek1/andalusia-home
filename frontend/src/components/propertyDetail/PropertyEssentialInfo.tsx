/* eslint-disable formatjs/no-literal-string-in-jsx */
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
import { PropertyDetail } from './PropertyDetail';
import { FormattedMessage } from '../utils/FormattedMessage';
import { formatNumber } from '../../helpers/formatNumber';

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

const Divider: FC = () => {
	const theme = useTheme();
	return (
		<Box
			alignSelf={'center'}
			width={{ lg: '1px', xs: '100%' }}
			height={{ lg: 80, xs: '1px' }}
			border={'none'}
			borderLeft={{ lg: `1px solid ${theme.palette.grey[300]}`, xs: 'none' }}
			borderBottom={{ lg: `none`, xs: `1px solid ${theme.palette.grey[300]}` }}
		/>
	);
};

export const PropertyEssentialInfo: FC<{ property: PropertyDetail | undefined }> = ({ property }) => {
	const theme = useTheme();
	return (
		<Stack direction={{ lg: 'row', xs: 'column' }}>
			<Container
				title={<FormattedMessage id={'property.detail.caption.price'} />}
				data={`${formatNumber(property?.Price)} ${property?.Currency === 'EUR' ? '€' : property?.Currency}`}
			/>
			<Divider />
			<Container title={<FormattedMessage id={'property.detail.caption.bedrooms'} />} data={property?.Bedrooms} />
			<Divider />
			<Container title={<FormattedMessage id={'property.detail.caption.bathrooms'} />} data={property?.Bathrooms} />
			<Divider />
			<Container
				title={<FormattedMessage id={'property.detail.caption.plot-built-size'} />}
				data={property && property?.GardenPlot + property?.Built}
			/>
		</Stack>
	);
};
