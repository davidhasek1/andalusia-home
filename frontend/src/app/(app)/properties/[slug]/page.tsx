import PropertyDetail from 'components/propertyDetail/PropertyDetail';
import React, { FC } from 'react';

type PropertyDetailPageProps = {
	params: { slug: string };
};

const PropertyDetailPage: FC<PropertyDetailPageProps> = ({ params }) => {
	return <PropertyDetail slug={params?.slug} />;
};

export default PropertyDetailPage;
