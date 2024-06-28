/* eslint-disable formatjs/no-literal-string-in-jsx */
import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Button, InputBase, Stack, FormLabel } from '@mui/material';
import { styled } from '@mui/system';

const CustomInput = styled(InputBase)(({ theme }) => ({
	'& .MuiInputBase-input': {
		backgroundColor: 'white',
		padding: theme.spacing(1),
		borderRadius: theme.shape.borderRadius,
		width: '100%',
		border: '1px solid',
	},
}));

const CustomFormControl = styled(FormControl)(({ theme }) => ({
	minWidth: 200,
}));

const SearchForm = () => {
	const [field1, setField1] = React.useState('');
	const [field2, setField2] = React.useState('');
	const [field3, setField3] = React.useState('');
	const [field4, setField4] = React.useState('');

	const handleSearch = () => {
		// Zde můžete přidat logiku pro hledání
		console.log('Hledání s hodnotami:', field1, field2, field3, field4);
	};

	return (
		<Stack
			direction={{ lg: 'row', xs: 'column' }}
			position={'absolute'}
			bottom={{ xs: -40 }}
			justifyContent={'center'}
			flexWrap={'nowrap'}
			sx={{ bgcolor: '#fff' }}
			width={{ lg: 'inherit', xs: '100%' }}
		>
			<Stack direction={{ lg: 'row', xs: 'column' }} p={2} gap={2} flexWrap={'wrap'}>
				<CustomFormControl variant={'outlined'}>
					<FormLabel>test</FormLabel>
					<Select
						labelId={'select-field1-label'}
						value={field1}
						onChange={(e) => setField1(e.target.value)}
						label={'Field 1'}
						input={<CustomInput />}
					>
						<MenuItem value={''}>
							<em>None</em>
						</MenuItem>
						<MenuItem value={10}>Option 1</MenuItem>
						<MenuItem value={20}>Option 2</MenuItem>
						<MenuItem value={30}>Option 3</MenuItem>
					</Select>
				</CustomFormControl>

				<CustomFormControl variant={'outlined'}>
					<FormLabel>test</FormLabel>
					<Select
						labelId={'select-field2-label'}
						value={field2}
						onChange={(e) => setField2(e.target.value)}
						label={'Field 2'}
						input={<CustomInput />}
					>
						<MenuItem value={''}>
							<em>None</em>
						</MenuItem>
						<MenuItem value={10}>Option 1</MenuItem>
						<MenuItem value={20}>Option 2</MenuItem>
						<MenuItem value={30}>Option 3</MenuItem>
					</Select>
				</CustomFormControl>

				<CustomFormControl variant={'outlined'}>
					<FormLabel>test</FormLabel>
					<Select
						labelId={'select-field3-label'}
						value={field3}
						onChange={(e) => setField3(e.target.value)}
						label={'Field 3'}
						input={<CustomInput />}
					>
						<MenuItem value={''}>
							<em>None</em>
						</MenuItem>
						<MenuItem value={10}>Option 1</MenuItem>
						<MenuItem value={20}>Option 2</MenuItem>
						<MenuItem value={30}>Option 3</MenuItem>
					</Select>
				</CustomFormControl>

				<CustomFormControl variant={'outlined'}>
					<FormLabel>test</FormLabel>
					<Select
						labelId={'select-field4-label'}
						value={field4}
						onChange={(e) => setField4(e.target.value)}
						label={'Field 4'}
						input={<CustomInput />}
					>
						<MenuItem value={''}>
							<em>None</em>
						</MenuItem>
						<MenuItem value={10}>Option 1</MenuItem>
						<MenuItem value={20}>Option 2</MenuItem>
						<MenuItem value={30}>Option 3</MenuItem>
					</Select>
				</CustomFormControl>
			</Stack>
			<Button sx={{ borderRadius: 0 }} variant={'contained'} color={'primary'} onClick={handleSearch}>
				Hledat
			</Button>
		</Stack>
	);
};

export default SearchForm;
