'use client';
import { CircularProgress, Stack } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
import Logo from '../../public/logo-white.svg';

export const LoadingScreen: FC = () => {
	return (
		<Stack minHeight={'100vh'} justifyContent={'center'} alignItems={'center'} bgcolor={(theme) => theme.palette.common.black}>
			<Image src={Logo} width={1000} height={250} alt={'andalusia-home-logo'} />
			<CircularProgress sx={{ color: '#F8CA00' }} />
		</Stack>
	);
};
