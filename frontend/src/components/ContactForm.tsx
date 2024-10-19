'use client';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from './utils/FormattedMessage';
import { useToast } from 'hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from 'components/ui/form';
import { z } from 'zod';
import { Input } from 'components/ui/input';
import { Textarea } from 'components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'components/ui/button';
import { useTranslations } from 'next-intl';

type ContactFormProps = Readonly<{
	propertyId?: string;
}>;

export const ContactForm: FC<ContactFormProps> = ({ propertyId }) => {
	const t = useTranslations();

	const formSchema = z.object({
		name: z.string().min(1, {
			message: t('contact-form.errors.required'),
		}),
		email: z
			.string()
			.min(1, {
				message: t('contact-form.errors.required'),
			})
			.email({
				message: t('contact-form.errors.email'),
			}),
		message: z.string(),
	});

	const { toast } = useToast();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			const response = await fetch('/api/contact', {
				method: 'post',
				body: JSON.stringify({ ...values, propertyId }),
			});
			if (response.status === 200) {
				toast({
					title: 'Email sent!',
				});
				form.reset();
			} else {
				toast({
					title: 'Failed to send email.',
				});
			}
		} catch (error) {
			toast({
				title: 'An error occur',
			});
		}
	};

	return (
		<div className={'container mt-[50px] max-w-[900px]'}>
			<h2 className={'text-3xl md:text-5xl font-semibold mb-[30px]'}>
				<FormattedMessage id={'contact-form.form.title'} />
			</h2>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className={'space-y-4'}>
					<FormField
						control={form.control}
						name={'name'}
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									<FormattedMessage id={'contact-form.label.name'} />
								</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name={'email'}
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									<FormattedMessage id={'contact-form.label.email'} />
								</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name={'message'}
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									<FormattedMessage id={'contact-form.label.message'} />
								</FormLabel>
								<FormControl>
									<Textarea {...field} className={'min-h-[130px]'} />
								</FormControl>
							</FormItem>
						)}
					/>
					<Button type={'submit'}>
						<FormattedMessage id={'contact-form.button.submit'} />
					</Button>
				</form>
			</Form>
		</div>
	);
};
