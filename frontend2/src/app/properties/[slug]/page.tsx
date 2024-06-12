'use client';
import React, { FC } from 'react';
import { PropertyDetail } from '../../../components/propertyDetail/PropertyDetail';
import { CircularProgress, Stack } from '@mui/material';
import { graphql } from '../../../gql';
import { useQuery } from '@apollo/client';

type PropertyDetailPageProps = {
	params: { slug: string };
};

const PropertyDetailPage: FC<PropertyDetailPageProps> = ({ params }) => {
	return (
		<>
			<Stack width={'100%'}>
				<PropertyDetail referenceId={params.slug} />
			</Stack>
		</>
	);
};

export default PropertyDetailPage;
