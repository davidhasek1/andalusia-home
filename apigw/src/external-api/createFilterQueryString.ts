import { InputMaybe, PropertiesFilterInput } from '../../apigw-resolvers-types';

const createFilterQueryString = (filter?: InputMaybe<PropertiesFilterInput>) => {
	let filterQs = '';

	if (filter == null) {
		return '';
	}

	const filteredFilters = Object.fromEntries(Object.entries(filter).filter(([key, value]) => value != null));

	for (const [key, value] of Object.entries(filteredFilters)) {
		switch (key) {
			case 'bedsCount': {
				filterQs = filterQs.concat(`&P_Beds=${value}`);
				break;
			}
			case 'bathsCount': {
				filterQs = filterQs.concat(`&P_Baths=${value}`);
				break;
			}
			case 'location': {
				filterQs = filterQs.concat(`&P_Location=${value}`);
				break;
			}
			default: {
				return ''; // if error
			}
		}
	}
	console.log('test', filterQs);
	return filterQs;
};

export { createFilterQueryString };
