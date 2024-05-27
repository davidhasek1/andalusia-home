/* eslint-disable formatjs/no-literal-string-in-jsx */
import { Button, Stack } from '@mui/material';
import { FC } from 'react';

export const GetMoreInfoForm: FC = () => {
	return (
		<Stack height={400} border={'1px solid'} bgcolor={(theme) => theme.palette.common.white}>
			Get more info
			<Button variant={'contained'}>Get more info</Button>
		</Stack>
	);
};
