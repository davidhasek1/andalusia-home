import { RESTDataSource } from '@apollo/datasource-rest';
import { KeyValueCache } from '@apollo/utils.keyvaluecache';
import { InputMaybe, Properties, PropertiesFilterInput } from '../../apigw-resolvers-types';
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

	async listProperties(filter?: InputMaybe<PropertiesFilterInput>): Promise<Properties> {
		console.log('FILTER QS RESULT', createFilterQueryString(filter));
		URL;
		return await this.get(
			`SearchProperties?p_agency_filterid=1&p1=${this.contactId}&p2=${this.token}&P_sandbox=true${createFilterQueryString(filter)}`,
		);
	}
}

export { ResaleOnlineAPI };
