const getSubArrayFromValue = (value: number | undefined, array: number[]): number[] | [] => {
	if (value == null) {
		return [];
	}
	const index = array.indexOf(value);

	if (index === -1) {
		return [];
	}
	return array.slice(index + 1);
};

export { getSubArrayFromValue };
