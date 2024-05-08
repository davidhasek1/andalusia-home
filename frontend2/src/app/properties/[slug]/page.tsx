import React, { FC } from 'react';

type PropertyDetailPageProps = {
	params: { slug: string };
};

const PropertyDetailPage: FC<PropertyDetailPageProps> = ({ params }) => {
	return <>{params.slug}</>;
};

export default PropertyDetailPage;
