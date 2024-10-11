import type { Metadata } from 'next';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { ApolloClientContext } from '../contexts/ApolloClientContext';
import { ReactNode, Suspense } from 'react';
import localFont from 'next/font/local';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { FiltersProvider } from '../contexts/FiltersContext';
import { LoadingScreen } from '../components/LoadingScreen';

import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

const ourFont = localFont({ src: '../fonts/eurostarregularextended.ttf' });

export const metadata: Metadata = {
	title: 'Andalusia Home',
	description:
		'Objevte luxusní nemovitosti na prodej v Marbelle, nejprestižnější pobřežní destinaci ve Španělsku. Prozkoumejte nádherné vily, exkluzivní apartmány a špičkové realitní příležitosti v nejžádanějších lokalitách Marbelly. Najděte si svůj vysněný domov nebo investiční nemovitost ještě dnes!',
};

export default async function AppLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	/* @todo
	if (process.env.REACT_APP_COMMIT_HASH != null) {
		console.log(`Commit hash %c${process.env.REACT_APP_COMMIT_HASH}`, 'font-weight: bold');
	}

	if (process.env.REACT_APP_BUILT_AT != null) {
		console.log(`Build at %c${process.env.REACT_APP_BUILT_AT}`, 'font-weight: bold');
	} */

	const locale = await getLocale();
	const messages = await getMessages();

	return (
		<html lang={locale}>
			<head>
				<meta name={'viewport'} content={'width=device-width initial-scale=1 viewport-fit=cover'} />
				<meta name={'mobile-web-app-capable'} content={'yes'} />
				<meta name={'apple-mobile-web-app-capable'} content={'yes'} />
				<meta name={'theme-color'} content={'#000'} />
				<link rel={'icon'} href={'/favicon.ico'} sizes={'any'} />
			</head>
			<body className={ourFont.className}>
				<ApolloClientContext>
					<NextIntlClientProvider messages={messages}>
						<FiltersProvider>
							<Suspense fallback={<LoadingScreen />}>{children}</Suspense>
						</FiltersProvider>
					</NextIntlClientProvider>
				</ApolloClientContext>
			</body>
		</html>
	);
}
