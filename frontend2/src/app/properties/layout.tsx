import { Stack } from '@mui/material';
import { FC, ReactNode } from 'react';
import { FiltersPanel } from '../../components/properties/Filters/FiltersPanel';
import { usePathname } from 'next/navigation';

const PropertiesLayout: FC<
	Readonly<{
		children: ReactNode;
	}>
> = ({ children }) => {

	return (
		<Stack direction={'row'} minHeight={'100vh'}>
			<FiltersPanel />
			{children}
		</Stack>
	);
};

export default PropertiesLayout;
