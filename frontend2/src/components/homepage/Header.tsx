'use client';
import { Box, Button, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { FormattedMessage } from 'react-intl';

export const Header: FC = () => {
	return (
		<Stack
			position={'relative'}
			px={10}
			sx={{
				backgroundImage: `url("assets/main-image.webp")`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
				height: '85vh',
			}}
		>
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(255, 255, 255, 0.4)',
				}}
			/>
			<Stack zIndex={0} height={'100%'} alignItems={'center'} justifyContent={'center'}>
				<Stack alignItems={'center'} direction={{ lg: 'row', xs: 'column' }} gap={10}>
					<Stack justifyContent={'center'} width={{ lg: '50%', xs: '100%' }}>
						<Typography variant={'h1'}>
							<FormattedMessage id={'header.title'} />
						</Typography>
					</Stack>
					<Box
						border={'none'}
						borderLeft={{ lg: 1, xs: 0 }}
						borderBottom={{ lg: 0, xs: 1 }}
						height={{ lg: 'calc(100% - 100px)', xs: 'unset' }}
						width={{ lg: 'unset', xs: 'calc(100% - 100px)' }}
					/>

					<Stack justifyContent={'center'} gap={2} width={{ lg: '50%', xs: '100%' }}>
						{/*  eslint-disable-next-line formatjs/no-literal-string-in-jsx */}
						<Typography>
							Nulla elit nostrud nostrud laboris reprehenderit et et tempor est ea magna culpa. Elit culpa adipisicing enim anim velit culpa
							consectetur qui et officia nulla. Exercitation elit commodo nisi sint consectetur incididunt. Ea consectetur sunt enim id elit
							culpa et elit elit mollit incididunt mollit. In fugiat elit aute reprehenderit excepteur cillum minim laboris id quis
							exercitation.
						</Typography>
						<Stack direction={'row'} gap={2}>
							{/* eslint-disable-next-line formatjs/no-literal-string-in-jsx */}
							<Button variant={'contained'}>Discover more</Button>
							{/* eslint-disable-next-line formatjs/no-literal-string-in-jsx */}
							<Button variant={'outlined'}>Some noraml text</Button>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};
