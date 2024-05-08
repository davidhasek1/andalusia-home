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

		button: {
			fontFamily: roboto.style.fontFamily,
			fontWeight: 200,
			textTransform: 'none',
		},
		caption: {
			fontFamily: roboto.style.fontFamily,
			fontSize: 14
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				contained: {
					padding: '8px 25px',
					border: 'none',
					borderRadius: 50,
					backgroundColor: '#000',
					'&:hover': {
						backgroundColor: '#fff',
						outline: '1px solid #000',
						color: '#000',
					},
				},
				outlined: {
					border: 'none',
					outline: '1px solid #000',
					color: '#000',
					borderRadius: 20,
					backgroundColor: 'transparent',
					'&:hover': {
						border: 'none',
						backgroundColor: 'transparent',

						color: '#000',
					},
				},
			},
		},
	},
});

export default theme;
