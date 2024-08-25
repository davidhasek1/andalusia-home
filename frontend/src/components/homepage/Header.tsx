'use client';
import { Button, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import SearchForm from './Searchbox/Searchbox';

export const Header: FC = () => {
	return (
		<Stack
			position={'relative'}
			px={{ lg: 10, xs: 2 }}
			pt={15}
			sx={{
				backgroundImage: `url("assets/main-pic.jpg")`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				height: '110vh',
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
					<Stack justifyContent={'center'} width={'100%'} alignItems={'flex-start'} pt={{ lg: 0, xs: 0 }}>
						<Typography
							variant={'h1'}
							color={(theme) => theme.palette.common.white}
							sx={{ textShadow: '3px 3px 4px rgba(0, 0, 0, 0.5)', textAlign: { xs: 'center', md: 'left' } }}
						>
							<FormattedMessage id={'header.title'} />
						</Typography>
					</Stack>
				</Stack>
			</Stack>
			<Stack display={{ md: 'flex' }} position={'relative'} top={{ lg: '-35%', xs: 0 }} justifyContent={'center'} alignItems={'center'}>
				<SearchForm />
			</Stack>
		</Stack>
	);
};
