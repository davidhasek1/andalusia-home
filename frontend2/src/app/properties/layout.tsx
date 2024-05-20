import { Stack } from '@mui/material';
import { FC, ReactNode } from 'react';
import { FiltersPanel } from '../../components/properties/Filters/FiltersPanel';

const PropertiesLayout: FC<
	Readonly<{
		children: ReactNode;
	}>
> = ({ children }) => {
	return (
		<Stack direction={'row'} minHeight={'100vh'}>
			<Stack display={{ lg: 'inherit', xs: 'none' }}>
				<FiltersPanel />
			</Stack>
			{children}
		</Stack>
	);
};

export default PropertiesLayout;
