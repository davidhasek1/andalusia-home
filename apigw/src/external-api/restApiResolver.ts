import { RESTDataSource } from '@apollo/datasource-rest';
import { KeyValueCache } from '@apollo/utils.keyvaluecache';
import { InputMaybe, Properties, PropertiesFilterInput, PropertiesPaginateInput, PropertyDetails } from '../../apigw-resolvers-types';
import { createFilterQueryString } from './createFilterQueryString';

class ResaleOnlineAPI extends RESTDataSource {
	override baseURL = 'https://webapi.resales-online.com/V6/';

	private contactId: string;
	private token: string;

	constructor(options: { token?: string; contactId?: string; cache: KeyValueCache }) {
		super(options);
		this.contactId = options.contactId ?? '';
		this.token = options.token ?? '';
	}

	async listProperties(filter?: InputMaybe<PropertiesFilterInput>, page?: InputMaybe<PropertiesPaginateInput>): Promise<Properties> {
		//console.log('FILTER QS RESULT', createFilterQueryString(filter));
		const filters = createFilterQueryString(filter)
		const pageNumber = page?.page ?? '';
		return await this.get(
			`SearchProperties?p_agency_filterid=52231&p1=${this.contactId}&p2=${this.token}&P_sandbox=true${filters}&P_PageNo=${pageNumber}`,
		);
	}
	async getProperty(referenceId: string): Promise<PropertyDetails> {
		return await this.get(
			`PropertyDetails?p_agency_filterid=52231&p1=${this.contactId}&p2=${this.token}&P_sandbox=true&P_RefId=${referenceId}`,
		);
	}
}

export { ResaleOnlineAPI };
