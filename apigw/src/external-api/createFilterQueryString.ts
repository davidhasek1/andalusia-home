import { InputMaybe, PropertiesFilterInput } from '../../apigw-resolvers-types';

const createFilterQueryString = (filter?: InputMaybe<PropertiesFilterInput>) => {
	let filterQs = '';

	if (filter == null) {
		return '';
	}

	for (const [key, value] of Object.entries(filter)) {
		switch (key) {
			case 'bedsCount': {
				return filterQs.concat(`&P_Beds=${value}`);
			}
			default: {
				return ''; // if error
			}
		}
	}

	return filterQs;
};

export { createFilterQueryString };
