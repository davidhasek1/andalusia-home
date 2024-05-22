import { Stack } from '@mui/material';
import { WatchlistList } from '../../components/watchlist/WatchlistList';

const Watchlist = () => {
	return (
		<Stack minHeight={'100vh'}>
			<Stack p={{ lg: 10, md: 5, xs: 2 }}>
				<WatchlistList />
			</Stack>
		</Stack>
	);
};

export default Watchlist;
