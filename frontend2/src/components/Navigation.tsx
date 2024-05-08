'use client';
import { Button, Drawer, IconButton, Link, Stack, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Logo from '../../public/logo_dark.svg';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import { usePathname } from 'next/navigation';

export const navigation = [
	{
		title: <FormattedMessage id={'menu.home'} />,
		url: '/',
	},
	{
		title: <FormattedMessage id={'menu.properties'} />,
		url: '/properties',
	},
	{
		title: <FormattedMessage id={'menu.blog'} />,
		url: '/blog',
	},
	{
		title: <FormattedMessage id={'menu.about-us'} />,
		url: '/about-us',
	},
	{
		title: <FormattedMessage id={'menu.contact'} />,
		url: '/contact',
	},
];

export const Navigation: FC = () => {
	const [openDrawer, setOpenDrawer] = useState(false);
	const path = usePathname();
	const [changeBg, setChangeBg] = useState(false);

	useEffect(() => {
		addEventListener('scroll', () => {
			if (window !== undefined && window.scrollY > 600) {
				setChangeBg(true);
			} else {
				setChangeBg(false);
			}
		});
	}, []);

	return (
		<Stack
			position={path === '/' ? 'fixed' : 'unset'}
			top={changeBg ? 0 : 'unset'}
			width={{ lg: 'calc(100% - 80px)', xs: '100%' }}
			direction={'row'}
			alignItems={'center'}
			justifyContent={'space-between'}
			p={2}
			borderBottom={(theme) => `1px solid ${theme.palette.grey[300]}`}
			zIndex={1}
			bgcolor={(theme) => (changeBg ? theme.palette.common.white : 'transparent')}
		>
			<Image src={Logo} alt={'logo'} width={150} objectFit={'cover'} />
			<Stack direction={'row'} display={{ xs: 'none', lg: 'flex' }}>
				{navigation.map((link, i) => (
					<>
						<Link
							key={link.url}
							href={link.url}
							sx={{
								textDecoration: 'none',
								color: '#000',
								borderBottom: '1px solid transparent',
								transition: 'border-bottom 0.3s ease',
								'&:hover': {
									borderBottom: '1px solid #000',
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
			<Stack display={{ xs: 'none', lg: 'flex' }}>
				<Button variant={'contained'} href={navigation[1].url}>
					<Typography variant={'button'}>
						<FormattedMessage id={'header.button.list-properties'} />
					</Typography>
				</Button>
			</Stack>
			<IconButton onClick={() => setOpenDrawer(true)} sx={{ display: { lg: 'none' } }}>
				<MenuIcon />
			</IconButton>
			<Drawer
				anchor={'right'}
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				sx={{
					'.MuiPaper-root': {
						p: 3,
						alignItems: 'center',
					},
				}}
			>
				<Stack p={2} gap={3}>
					{navigation.map((link, i) => (
						<Stack key={link.url}>
							<Link
								key={link.url}
								href={link.url}
								sx={{
									textDecoration: 'none',
									color: '#000',
									borderBottom: '1px solid transparent',
									transition: 'border-bottom 0.3s ease',
									'&:hover': {
										borderBottom: '1px solid #000',
									},
								}}
							>
								<Typography>{link.title}</Typography>
							</Link>
						</Stack>
					))}
				</Stack>
				<Stack marginTop={'auto'}>
					<Image src={Logo} alt={'logo'} width={150} objectFit={'cover'} />
				</Stack>
			</Drawer>
		</Stack>
	);
};
