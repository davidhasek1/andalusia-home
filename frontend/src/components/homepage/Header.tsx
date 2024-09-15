'use client';
import { Stack, Typography } from '@mui/material';
import { FC } from 'react';

import SearchForm from './Searchbox/Searchbox';
import { useHeaderVideo } from '../../hooks/useHeaderVideo';
import { FormattedMessage } from '../utils/FormattedMessage';

export const Header: FC = () => {
	const { showImage, VideoTransition } = useHeaderVideo();

	return (
		<Stack
			position={'relative'}
			px={{ lg: 10, xs: 2 }}
			pt={15}
			sx={
				showImage
					? {
							backgroundImage: `url("assets/main-pic.jpg")`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							height: '110vh',
					  }
					: { height: '110vh' }
			}
		>
			<VideoTransition />

			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
