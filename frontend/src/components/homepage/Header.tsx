'use client';
import { Button, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
//import { Searchbox } from './Searchbox/Searchbox';

export const Header: FC = () => {
	return (
		<Stack
			position={'relative'}
			px={{ lg: 10, xs: 2 }}
			pt={15}
			sx={{
				backgroundImage: `url("assets/main-image-heart.webp")`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				height: '120vh',
				aspectRatio: '1 / 1',
			}}
		>
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(255, 255, 255, 0.1)',
				}}
			/>
			<Stack
				zIndex={0}
				height={'100%'}
				mt={10}
				alignItems={'flex-start'}
				justifyContent={'flex-start'}
				alignSelf={'center'}
				pt={{ lg: 10 }}
			>
				<Stack alignItems={'center'} direction={{ lg: 'row', xs: 'column' }} gap={10}>
					<Stack justifyContent={'center'} width={'100%'}>
						<Typography variant={'h1'} color={(theme) => theme.palette.common.white} sx={{ textShadow: '3px 3px 4px rgba(0, 0, 0, 0.5)' }}>
							<FormattedMessage id={'header.title'} />
						</Typography>
					</Stack>
				</Stack>
			</Stack>
			{/* 	<Stack display={{ md: 'flex', xs: 'none' }} position={'relative'} top={{ lg: '-25%', xs: 0 }} justifyContent={'center'}>
				<Searchbox />
			</Stack> */}
			<Stack position={'relative'} top={{ lg: '-25%', xs: '-35%' }} justifyContent={'center'} alignItems={'center'} width={'100%'}>
				<Button href={'/properties'} variant={'contained'} sx={{ width: { lg: '25%', sm: '40%', xs: '60%' } }}>
					<FormattedMessage id={'header.button.search'} />
				</Button>
			</Stack>
		</Stack>
	);
};
