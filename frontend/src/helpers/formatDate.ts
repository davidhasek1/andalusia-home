const formatDate = (dateString: string | number) => {
	const timestampString = dateString.toString();
	const date = new Date(parseInt(timestampString, 10));
	console.log(date);
	const formattedDate = date.toLocaleString('cs-CZ', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	});

	return formattedDate;
};

export { formatDate };
