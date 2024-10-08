import { InputMaybe, PropertiesFilterInput } from '../../apigw-resolvers-types';

const createFilterQueryString = (filter?: InputMaybe<PropertiesFilterInput>) => {
	let filterQs = '';

	if (filter == null) {
		return '';
	}

	const filteredFilters = Object.fromEntries(Object.entries(filter).filter(([key, value]) => value != null));

	for (const [key, value] of Object.entries(filteredFilters)) {
		const typedKey = key as keyof typeof filter;

		switch (typedKey) {
			case 'bedsCount': {
				filterQs = filterQs.concat(`&P_Beds=${value}x`);
				break;
			}
			case 'bathsCount': {
				filterQs = filterQs.concat(`&P_Baths=${value}x`);
				break;
			}
			case 'location': {
				filterQs = filterQs.concat(`&P_Location=${value}`);
				break;
			}
			case 'propertyType': {
				filterQs = filterQs.concat(`&P_PropertyTypes=${value}`);
				break;
			}
			case 'minPrice': {
				filterQs = filterQs.concat(`&P_Min=${value}`);
				break;
			}
			case 'maxPrice': {
				filterQs = filterQs.concat(`&P_Max=${value}`);
				break;
			}
			default: {
				return ''; // if error
			}
		}
	}

	return filterQs;
};

export { createFilterQueryString };
