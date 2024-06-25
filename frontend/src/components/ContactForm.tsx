/* eslint-disable formatjs/no-literal-string-in-jsx */
'use client';
import { Button, Grid, Stack, TextField, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import LogoDark from '../../public/logo_dark.svg';
import Image from 'next/image';

type Props = Readonly<{
	imageSrc?: string | null;
	isContactPage?: boolean;
}>;

export const ContactForm: FC<Props> = ({ imageSrc, isContactPage }) => {
	const theme = useTheme();
	const form = useForm({ defaultValues: { name: '', email: '', message: '' } });
	return (
		<Stack direction={'row'}>
			<Stack
				display={{ lg: 'flex', xs: 'none' }}
				height={'100vh'}
				width={'60%'}
				sx={{ backgroundColor: (theme) => theme.palette.common.black }}
			>
				<Stack
					sx={{
						backgroundImage: `url(${imageSrc})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'bottom center',
					}}
					my={{ xl: 20, lg: 10 }}
					ml={{ xl: 20, lg: 10 }}
					position={'relative'}
					height={'100%'}
				>
					<div
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							backgroundColor: 'rgba(0, 0, 0, 0.381)',
						}}
					/>
					<Stack zIndex={0} height={'100%'} width={'fit-content'} alignItems={'flex-start'} justifyContent={'center'} ml={5} gap={3}>
						<Typography variant={'h2'} color={(theme) => theme.palette.common.white} sx={{ textShadow: '3px 3px 4px rgba(0, 0, 0, 0.5)' }}>
							<FormattedMessage id={'contact-form.title'} />
						</Typography>
						<Grid
							display={'grid'}
							gridTemplateColumns={{ xl: '1fr 1fr', lg: '1fr', xs: '1fr' }}
							gap={4}
							color={(theme) => theme.palette.common.white}
							sx={{ textShadow: '3px 3px 4px rgba(0, 0, 0, 0.5)' }}
						>
							<Typography variant={'h5'}>Palo Alto, California</Typography>
							<Typography variant={'h5'}>Instagram</Typography>
							<Typography variant={'h5'}>info@andalusiahome.com</Typography>
							<Typography variant={'h5'}>+420 999 999 999</Typography>
						</Grid>
					</Stack>
				</Stack>
			</Stack>

			<Stack width={{ lg: '40%', xs: '100%' }} p={5} gap={3} justifyContent={'center'}>
				<Typography variant={'h2'} mb={2}>
					<FormattedMessage id={'contact-form.form.title'} />
				</Typography>
				<form
					noValidate
					onSubmit={form.handleSubmit((data) => {
						console.log(data);
					})}
				>
					<Stack gap={3}>
						<TextField label={<FormattedMessage id={'contact-form.label.name'} />} {...form.register('name', { required: true })} />
						<TextField label={<FormattedMessage id={'contact-form.label.email'} />} {...form.register('email', { required: true })} />
						<TextField
							multiline
							label={<FormattedMessage id={'contact-form.label.message'} />}
							{...form.register('message', { required: true })}
							minRows={10}
							style={{}}
						/>
						<Button type={'submit'} variant={'contained'}>
							<FormattedMessage id={'contact-form.button.submit'} />
						</Button>
					</Stack>
				</form>

				<Grid
					display={{ lg: 'none', xs: 'grid' }}
					gridTemplateColumns={{ xl: '1fr 1fr', lg: '1fr', xs: '1fr' }}
					gap={4}
					color={{ lg: theme.palette.common.white, xs: theme.palette.common.black }}
					sx={{ textShadow: { lg: '3px 3px 4px rgba(0, 0, 0, 0.5)', xs: 'none' } }}
				>
					<Typography variant={'body1'}>Palo Alto, California</Typography>
					<Typography variant={'body1'}>Instagram</Typography>
					<Typography variant={'body1'}>info@andalusiahome.com</Typography>
					<Typography variant={'body1'}>+420 999 999 999</Typography>
				</Grid>
				<Stack marginTop={'auto'} alignItems={'center'}>
					<Image src={LogoDark} alt={'logo'} width={150} objectFit={'cover'} />
				</Stack>
			</Stack>
		</Stack>
	);
};
