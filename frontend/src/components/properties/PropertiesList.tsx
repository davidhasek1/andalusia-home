'use client';
import { Button, CircularProgress, Drawer, Stack, Typography, Pagination } from '@mui/material';
import { FC, useState } from 'react';
import { PropertyCard } from './PropertyCard';
import { useQuery } from '@apollo/client';
import { FormattedMessage } from '../utils/FormattedMessage';
import { useFilters } from '../../contexts/FiltersContext';
import { FiltersPanel } from './Filters/FiltersPanel';
import { useLocalStorage } from '../../hooks/useLocalStoarge';
import { Property } from '../../gql/graphql';
import { listProperties } from 'utils/fetchProperties';

export const PropertiesList: FC = () => {
	const { appliedFilters } = useFilters();
	const [openDrawer, setOpenDrawer] = useState(false);
	const [page, setPage] = useState(1);
	const { value: watchlist } = useLocalStorage<Property>('watchlist');
	const { data, loading, fetchMore } = useQuery(listProperties, { variables: { filter: appliedFilters, page: page } });
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

	const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
		fetchMore({
			variables: {
				page: value,
			},
		});
	};

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
			{properties.length > 0 ? (
				properties.map((property) => {
					const isWatchlisted = watchlist && watchlist.some((wl) => wl.Reference === property.Reference);
					return <PropertyCard key={property.Reference} property={property} isWatchlisted={isWatchlisted ?? false} />;
				})
			) : (
				<Typography variant={'h4'}>
					<FormattedMessage id={'properties.filters.no-results'} />
				</Typography>
			)}
			<Stack alignItems={'center'}>
				<Pagination count={pages.length} page={page} onChange={handlePageChange} />
			</Stack>
		</Stack>
	);
};
