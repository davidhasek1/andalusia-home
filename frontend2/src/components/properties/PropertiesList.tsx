'use client';
import { CircularProgress, Stack } from '@mui/material';
import { FC } from 'react';
import { PropertyCard } from './PropertyCard';
import { useQuery } from '@apollo/client';
import { graphql } from '../../gql';
import { FormattedMessage } from 'react-intl';

export const listProperties = graphql(`
	query listProperties {
		listPropertiesForSale {
			QueryInfo {
				PropertyCount
				CurrentPage
				PropertiesPerPage
			}
			Property {
				AgencyRef
				Location
				Province
				Area
				Bedrooms
				Bathrooms
				Price
				Currency
				Description
				Built
				GardenPlot
			}
		}
	}
`);

export const PropertiesList: FC = () => {
	const { data, loading } = useQuery(listProperties);
	console.log(data);

	if (loading) {
		return <CircularProgress />;
	}

	const properties = data?.listPropertiesForSale.Property ?? [];
	return (
		<Stack width={'100%'} position={'relative'} gap={5} p={5}>
			<FormattedMessage id={`properties.list.results-count`} values={{ count: data?.listPropertiesForSale.QueryInfo.PropertyCount }} />
			{properties.map((property) => (
				<PropertyCard key={property.AgencyRef} property={property} />
			))}
		</Stack>
	);
};
