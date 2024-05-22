'use client';
import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

export const useOpenSnackbar = () => {
	const [open, setOpen] = React.useState(false);
	const [message, setMessage] = React.useState('');
	const openSnackbar = (message: string) => {
		setMessage(message);
		setOpen(true);
	};

	const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	const SnackBarComponent = () => <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message={message} />;
	return { openSnackbar, SnackBarComponent };
};
