import { RESTDataSource } from '@apollo/datasource-rest';
import { Todo } from '../../apigw-resolvers-types';

class ResaleOnlineAPI extends RESTDataSource {
	override baseURL = 'https://jsonplaceholder.typicode.com/'; /* 'https://webapi.resales-online.com/V6/'; */

	async listTodo(): Promise<Todo[]> {
		return await this.get(`todos`);
	}
	async getTodo(id: string): Promise<Todo[]> {
		return await this.get(`todos/${encodeURIComponent(id)}`);
	}
}

export { ResaleOnlineAPI };
