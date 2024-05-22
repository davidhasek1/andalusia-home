'use client';
import { Button, CircularProgress, Drawer, Stack } from '@mui/material';
import { FC, useState } from 'react';
import { PropertyCard } from './PropertyCard';
import { useQuery } from '@apollo/client';
import { graphql } from '../../gql';
import { FormattedMessage } from 'react-intl';
import { useFilters } from '../../contexts/FiltersContext';
import { FiltersPanel } from './Filters/FiltersPanel';
import { useLocalStorage } from '../../hooks/useLocalStoarge';
import { Property } from '../../gql/graphql';

export const listProperties = graphql(`
	query listProperties($filter: PropertiesFilterInput, $page: Int) {
		listPropertiesForSale(filter: $filter, page: { page: $page }) {
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
				MainImage
			}
		}
	}
`);

export const PropertiesList: FC = () => {
	const { filters } = useFilters();
	const [openDrawer, setOpenDrawer] = useState(false);
	const [page, setPage] = useState(1);
	const { value: watchlist } = useLocalStorage<Property>('watchlist');
	const { data, loading, fetchMore } = useQuery(listProperties, { variables: { filter: filters, page: page } });
	const pageInfo = data?.listPropertiesForSale.QueryInfo;

	//TODO: Move this into some paginator component
	const pages = [];

	if (loading) {
		return <CircularProgress />;
	}

	if (pageInfo == null) {
		return null;
	}

	//TODO: Move this into some paginator component
	for (let i = 0; i <= pageInfo.PropertyCount / pageInfo.PropertiesPerPage; i++) {
		pages.push({ page: i + 1 });
	}
	//console.log('[QueryInfo]', data?.listPropertiesForSale.QueryInfo);
	const properties = data?.listPropertiesForSale.Property ?? [];

	return (
		<Stack width={'100%'} position={'relative'} gap={5} p={5}>
			<Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
				<FormattedMessage id={`properties.list.results-count`} values={{ count: data?.listPropertiesForSale.QueryInfo.PropertyCount }} />
				<Button variant={'outlined'} sx={{ display: { lg: 'none', xs: 'block' } }} onClick={() => setOpenDrawer(true)}>
					<FormattedMessage id={'properties.filters.title'} />
				</Button>
			</Stack>
			<Drawer
				anchor={'left'}
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				sx={{
					'.MuiPaper-root': {
						p: 3,
						alignItems: 'center',
					},
				}}
			>
				<FiltersPanel />
			</Drawer>
			{properties.map((property) => {
				const isWatchlisted = watchlist && watchlist.some((wl) => wl.Reference === property.Reference);
				return <PropertyCard key={property.Reference} property={property} isWatchlisted={isWatchlisted ?? false} />;
			})}

			<Stack direction={'row'} flexWrap={'wrap'}>
				{pages.map((p) => (
					<Button key={p.page} onClick={() => setPage(p.page)}>
						{p.page}
					</Button>
				))}
			</Stack>
		</Stack>
	);
};
