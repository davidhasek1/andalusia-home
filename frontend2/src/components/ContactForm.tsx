import { Button, Stack, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';

type Props = Readonly<{
	imageSrc?: string | null;
}>;

export const ContactForm: FC<Props> = ({ imageSrc }) => {
	const form = useForm({ defaultValues: { name: '', email: '', message: '' } });
	return (
		<Stack direction={'row'}>
			<Stack height={'100vh'} sx={{ backgroundColor: (theme) => theme.palette.common.black }}>
				<Stack
					sx={{
						backgroundImage: `url(${imageSrc})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'bottom center',
						height: '90vh',
					}}
					my={20}
					ml={20}
					position={'relative'}
					width={'60vw'}
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
				</Stack>
			</Stack>

			<Stack width={'100%'} p={5} gap={3}>
				<Typography variant={'h2'}>
					<FormattedMessage id={'contact-form.title'} />
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
							minRows={20}
							style={{}}
						/>
						<Button type={'submit'} variant={'contained'}>
							<FormattedMessage id={'contact-form.button.submit'} />
						</Button>
					</Stack>
				</form>
			</Stack>
		</Stack>
	);
};
