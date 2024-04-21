import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ResaleOnlineAPI } from './external-api/restApiResolver';
import { resolvers, typeDefs } from './schema';

export type Context = {
	dataSource: {
		resalesOnlineAPI: ResaleOnlineAPI;
	};
};

const server = new ApolloServer<Context>({
	typeDefs,
	resolvers,
});

const run = async () => {
	const { url } = await startStandaloneServer(server, {
		context: async () => {
			const { cache } = server;
			return {
				dataSource: {
					resalesOnlineAPI: new ResaleOnlineAPI({ cache }),
				},
			};
		},
		listen: { port: 4000 },
	});
	console.log(`Server starts at: ${url}`);
};

run().catch(() => console.error('Server falied to run'));
