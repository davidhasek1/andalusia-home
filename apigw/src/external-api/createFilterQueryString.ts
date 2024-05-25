import { InputMaybe, PropertiesFilterInput } from '../../apigw-resolvers-types';

const createFilterQueryString = (filter?: InputMaybe<PropertiesFilterInput>) => {
	let filterQs = '';

	if (filter == null) {
		return '';
	}

	for (const [key, value] of Object.entries(filter)) {
		switch (key) {
			case 'bedsCount': {
				filterQs = filterQs.concat(`&P_Beds=${value}`);
				continue;
			}
			case 'bathsCount': {
				filterQs = filterQs.concat(`&P_Baths=${value}`);
				continue;
			}
			case 'location': {
				filterQs = filterQs.concat(`&P_Location=${value}`);
				continue;
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
