const PRICE_STEP = 50000;
const createPriceOptions = (maxPrice: number): number[] => {
	const priceStepsArray: number[] = [];
	for (let currVal = 0; currVal <= maxPrice; currVal += PRICE_STEP) {
		priceStepsArray.push(currVal);
	}

	return priceStepsArray;
};

export { createPriceOptions, PRICE_STEP };
