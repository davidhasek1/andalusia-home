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
		h1: {
			fontFamily: ourFont.style.fontFamily,

			'@media (max-width:800px)': {
				fontSize: 48,
			},
			'@media (max-width:600px)': {
				fontSize: 36,
			},
		},
		h2: {
			fontFamily: ourFont.style.fontFamily,

			'@media (max-width:800px)': {
				fontSize: 48,
			},
			'@media (max-width:600px)': {
				fontSize: 36,
			},
		},
		h3: {
			fontFamily: ourFont.style.fontFamily,
			'@media (max-width:800px)': {
				fontSize: 36,
			},
			'@media (max-width:600px)': {
				fontSize: 28,
			},
			//fontSize: 48,
		},
		h4: {
			fontFamily: ourFont.style.fontFamily,
			'@media (max-width:800px)': {
				fontSize: 28,
			},
			'@media (max-width:600px)': {
				fontSize: 22,
			},
		},
		h5: {
			fontFamily: ourFont.style.fontFamily,
		},
		h6: {
			fontFamily: ourFont.style.fontFamily,
			//fontSize: 26,
		},
		body1: {
			fontFamily: ourFont.style.fontFamily,
		},

		button: {
			fontFamily: roboto.style.fontFamily,
			fontWeight: 200,
			textTransform: 'none',
		},
		caption: {
			fontFamily: roboto.style.fontFamily,
			fontSize: 14,
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
