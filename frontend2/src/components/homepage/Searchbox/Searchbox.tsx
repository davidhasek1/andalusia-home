/* eslint-disable formatjs/no-literal-string-in-jsx */
import { Button, MenuItem, Select, Stack, TextField, alpha } from '@mui/material';
import { FC } from 'react';

export const Searchbox: FC = () => {
	return (
		<Stack flexDirection={{ lg: 'row', sx: 'column' }} justifyContent={'center'} position={'relative'} top={30}>
			<Select
				value={10}
				sx={{
					'& .MuiSelect-select': {
						borderRadius: 0,
						borderTopLeftRadius: 20,
						borderBottomLeftRadius: 20,

						overflow: 'hidden',
					},
					'& .MuiOutlinedInput-notchedOutline': {
						borderRadius: 0,
						borderTopLeftRadius: 20,
						borderBottomLeftRadius: 20,
						overflow: 'hidden',
					},
					'& .MuiInputBase-input': {
						borderColor: 'unset',
						position: 'relative',
						backgroundColor: '#fff',
						overflow: 'hidden',
						fontSize: 16,
						padding: '28px 25px',
						'&:focus': {
							borderColor: 'unset',
						},
						'&:focus:active': {
							borderColor: 'unset',
						},
					},
				}}
			>
				<MenuItem value={10}>Elviria</MenuItem>
				<MenuItem value={20}>Marbesa</MenuItem>
				<MenuItem value={30}>Malaga</MenuItem>
			</Select>
			<TextField
				sx={{
					'& .MuiInputBase-root': {
						borderRadius: 0,
					},
					'& .MuiInputBase-input': {
						borderTopLeftRadius: 0,
						borderBottomLeftRadius: 0,
						position: 'relative',
						backgroundColor: (theme) => (theme.palette.mode === 'light' ? '#ffffff' : '#1A2027'),

						borderColor: (theme) => (theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843'),
						fontSize: 16,

						padding: '28px 25px',
						'&:focus': {
							borderColor: (theme) => theme.palette.primary.main,
						},
					},
				}}
			/>
			<TextField
				sx={{
					'& .MuiInputBase-root': {
						borderRadius: 0,
					},
					'& .MuiInputBase-input': {
						position: 'relative',
						backgroundColor: (theme) => (theme.palette.mode === 'light' ? '#ffffff' : '#1A2027'),

						borderColor: (theme) => (theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843'),
						fontSize: 16,

						padding: '28px 25px',
						'&:focus': {
							borderColor: (theme) => theme.palette.primary.main,
						},
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
