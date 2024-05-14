'use client';
import { CircularProgress, Stack } from '@mui/material';
import { FC } from 'react';
import { PropertyCard } from './PropertyCard';
import { useQuery } from '@apollo/client';
import { graphql } from '../../gql';
import { FormattedMessage } from 'react-intl';
import { useFilters } from '../../contexts/FiltersContext';

export const listProperties = graphql(`
	query listProperties($filter: PropertiesFilterInput) {
		listPropertiesForSale(filter: $filter) {
			QueryInfo {
				PropertyCount
				CurrentPage
				PropertiesPerPage
			}
			Property {
				Reference
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
	const { filters } = useFilters();
	const { data, loading } = useQuery(listProperties, { variables: { filter: filters } });
	console.log(data);

	if (loading) {
		return <CircularProgress />;
	}

	const properties = data?.listPropertiesForSale.Property ?? [];
	return (
		<Stack width={'100%'} position={'relative'} gap={5} p={5}>
			<FormattedMessage id={`properties.list.results-count`} values={{ count: data?.listPropertiesForSale.QueryInfo.PropertyCount }} />
			{properties.map((property) => (
				<PropertyCard key={property.Reference} property={property} />
			))}
		</Stack>
	);
};
