'use client';
import { FC } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStoarge';
import { Property } from '../../gql/graphql';
import { Stack, Typography } from '@mui/material';
import { PropertyCard } from '../properties/PropertyCard';
import { FormattedMessage } from 'react-intl';

export const WatchlistList: FC = () => {
	const { value: watchlist } = useLocalStorage<Property>('watchlist');

	return (
		<Stack width={'100%'} position={'relative'} gap={5}>
			<Typography variant={'h3'}>
				<FormattedMessage id={`watchlist.title`} />
			</Typography>

			{watchlist.length <= 0 && (
				<Typography>
					<FormattedMessage id={`watchlist.no-properties`} />
				</Typography>
			)}

			{watchlist.map((property) => {
				const isWatchlisted = watchlist && watchlist.some((wl) => wl.Reference === property.Reference);
				return (
					<PropertyCard
						key={property.Reference}
						property={property as any /* FIXME: not good not terrible  */}
						isWatchlisted={isWatchlisted ?? false}
					/>
				);
			})}
		</Stack>
	);
};
