import { Stack } from '@mui/material';
import { FC, ReactNode, Suspense } from 'react';
import { FiltersPanel } from '../../components/properties/Filters/FiltersPanel';

const PropertiesLayout: FC<
	Readonly<{
		children: ReactNode;
	}>
> = ({ children }) => {
	return (
		<Stack direction={'row'} minHeight={'100vh'}>
			<Suspense>
				<Stack display={{ lg: 'inherit', xs: 'none' }}>
					<FiltersPanel />
				</Stack>
			</Suspense>
			{children}
		</Stack>
	);
};

export default PropertiesLayout;
