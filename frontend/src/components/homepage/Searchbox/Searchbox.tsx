/* eslint-disable formatjs/no-literal-string-in-jsx */
import { Button, MenuItem, Select, Stack, TextField, alpha } from '@mui/material';
import { FC } from 'react';

export const Searchbox: FC = () => {
	return (
		<Stack flexDirection={'row'} justifyContent={'center'} position={'relative'} width={{ md: '50%', xs: '100%' }} margin={'auto'}>
			<Select
				value={10}
				sx={{
					'& .MuiInputBase-input': {
						backgroundColor: (theme) => (theme.palette.mode === 'light' ? '#ffffff' : '#1A2027'),
						borderColor: (theme) => (theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843'),
					},
				}}
			>
				<MenuItem value={10}>Elviria</MenuItem>
				<MenuItem value={20}>Marbesa</MenuItem>
				<MenuItem value={30}>Malaga</MenuItem>
			</Select>
			<TextField
				sx={{
					'& .MuiInputBase-input': {
						backgroundColor: (theme) => (theme.palette.mode === 'light' ? '#ffffff' : '#1A2027'),
						borderColor: (theme) => (theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843'),
					},
				}}
			/>
			<TextField
				sx={{
					'& .MuiInputBase-input': {
						backgroundColor: (theme) => (theme.palette.mode === 'light' ? '#ffffff' : '#1A2027'),
						borderColor: (theme) => (theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843'),
					},
				}}
			/>
			{/*  eslint-disable-next-line formatjs/no-literal-string-in-jsx */}
			<Button variant={'contained'} sx={{ borderRadius: 0, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}>
				Search property
			</Button>
		</Stack>
	);
};
