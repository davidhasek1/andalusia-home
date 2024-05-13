import React, { FC } from 'react';
import { PropertyDetail } from '../../../components/propertyDetail/PropertyDetail';
import { Stack } from '@mui/material';

type PropertyDetailPageProps = {
	params: { slug: string };
};

const PropertyDetailPage: FC<PropertyDetailPageProps> = ({ params }) => {
	return (
		<>
			{/* {params.slug} */}
			<Stack width={'100%'} p={{ lg: 10, xs: 0 }}>
				<PropertyDetail />
			</Stack>
		</>
	);
};

export default PropertyDetailPage;
