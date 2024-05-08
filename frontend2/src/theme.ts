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

		button: {
			fontFamily: roboto.style.fontFamily,
			fontWeight: 200,
			textTransform: 'none',
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				contained: {
					border: 'none',
					borderRadius: 20,
					backgroundColor: '#000',
					'&:hover': {
						backgroundColor: '#fff',
						outline: '1px solid #000',
						color: '#000',
					},
				},
			},
		},
	},
});

export default theme;
