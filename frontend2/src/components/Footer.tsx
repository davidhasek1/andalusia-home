'use client';
import { Link, Stack, Typography } from '@mui/material';
import { navigation } from './Navigation';
import Image from 'next/image';
import Logo from '../../public/logo_light.svg';
import { FormattedMessage } from 'react-intl';

export const Footer = () => {
	return (
		<Stack direction={'column'} alignItems={'center'} p={10} gap={10} bgcolor={(theme) => theme.palette.common.black}>
			<Image src={Logo} alt={'logo'} width={150} objectFit={'cover'} />
			<Stack direction={'row'} display={{ lg: 'flex', xs: 'none' }}>
				{navigation.map((link, i) => (
					<>
						<Link
							key={link.url}
							href={link.url}
							sx={{
								textDecoration: 'none',
								color: (theme) => theme.palette.common.white,
								borderBottom: '1px solid transparent',
								transition: 'border-bottom 0.3s ease',
								'&:hover': {
									borderBottom: (theme) => `1px solid  ${theme.palette.common.white}`,
								},
							}}
						>
							<Typography>{link.title}</Typography>
						</Link>
						{i !== navigation.length - 1 ? (
							// eslint-disable-next-line formatjs/no-literal-string-in-jsx
							<Typography mx={2} color={(theme) => theme.palette.grey[300]}>
								/
							</Typography>
						) : (
							''
						)}
					</>
				))}
			</Stack>
			<Stack>
				{/* eslint-disable-next-line formatjs/no-literal-string-in-jsx */}
				<Typography variant={'caption'} color={(theme) => theme.palette.grey[400]}>
					&copy; {new Date().getFullYear()} <FormattedMessage id={'footer.rights'} />
				</Typography>
			</Stack>
		</Stack>
	);
};
