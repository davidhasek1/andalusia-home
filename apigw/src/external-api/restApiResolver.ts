import { RESTDataSource } from '@apollo/datasource-rest';
import { KeyValueCache } from '@apollo/utils.keyvaluecache';
import { GetExample } from '../../apigw-resolvers-types';

class ResaleOnlineAPI extends RESTDataSource {
	override baseURL = 'https://webapi.resales-online.com/V6/';

	private contactId: string;
	private token: string;

	constructor(options: { token?: string; contactId?: string; cache: KeyValueCache }) {
		super(options);
		this.contactId = options.contactId ?? '';
		this.token = options.token ?? '';
	}

	async getExample(): Promise<GetExample> {
		return await this.get(`SearchProperties?p_agency_filterid=1&p1=${this.contactId}&p2=${this.token}&P_sandbox=true`);
	}
}

export { ResaleOnlineAPI };
