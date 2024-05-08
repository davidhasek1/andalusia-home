'use client';

import { createTheme } from '@mui/material/styles';
import localFont from 'next/font/local';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
});

export const ourFont = localFont({ src: './fonts/eurostarregularextended.ttf' });

const theme = createTheme({
	typography: {
		fontFamily: ourFont.style.fontFamily,
		fontSize: 16,

		caption: {
			fontFamily: roboto.style.fontFamily,
		},
	},
});

export default theme;
