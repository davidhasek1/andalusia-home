'use client';
import { FC } from 'react';
import { DocumentType, graphql } from '../../gql';
import PropertyCard from './PropertyCard';
import { useQuery } from '@apollo/client';

const listProperties = graphql(`
	query listProperties {
		listPropertiesForSale {
			Property {
        Reference
				Price
				Area
				Location
				MainImage
				Bedrooms
				Bathrooms
				GardenPlot
				Built
				Terrace
				Currency
			}
		}
	}
`);

type PropertyType = DocumentType<typeof listProperties>['listPropertiesForSale']['Property'][number];
const PropertiesList: FC = () => {
	const { data } = useQuery(listProperties);
	console.log('[DATA]', data?.listPropertiesForSale.Property);
	return (
		<div className={'grid items-center gap-10' + ' md:grid-cols-2' + ' lg:grid-cols-3'}>
			{data?.listPropertiesForSale.Property.map((property) => (
				<PropertyCard key={property.Reference} propertyData={property} />
			))}
		</div>
	);
};

export { PropertiesList, type PropertyType };
