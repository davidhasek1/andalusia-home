import { Stack } from '@mui/material';
import React from 'react';
import { PropertyCard } from '../../components/properties/PropertyCard';

const PropertiesPage = () => {
	return (
		// eslint-disable-next-line formatjs/no-literal-string-in-jsx
		<Stack width={'100%'} position={'relative'} gap={5} p={5}>
			99 results
			<PropertyCard />
			<PropertyCard />
			<PropertyCard />
			<PropertyCard />
			<PropertyCard />
			<PropertyCard />
		</Stack>
	);
};

export default PropertiesPage;
