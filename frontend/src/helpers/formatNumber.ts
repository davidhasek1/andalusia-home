const formatNumber = (number?: number | string) => {
	if (number == null) {
		return 'N/A';
	}

	const stringifyValue = typeof number === 'number' ? number.toString() : number;

	return stringifyValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export { formatNumber };
