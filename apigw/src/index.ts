import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ResaleOnlineAPI } from './external-api/restApiResolver';
import { resolvers, typeDefs, typeDefsPropertyDetail } from './schema';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';

import 'dotenv/config';
export type Context = {
	dataSource: {
		resalesOnlineAPI: ResaleOnlineAPI;
	};
};

const PORT = process.env.PORT || 4000;
const typeDefsMerged = `
	${typeDefs}
	${typeDefsPropertyDetail}
`;
const server = new ApolloServer<Context>({
	typeDefs: typeDefsMerged,
	resolvers,
	plugins: [ApolloServerPluginLandingPageDisabled()],
});

const run = async () => {
	const { url } = await startStandaloneServer(server, {
		context: async () => {
			const { cache } = server;
			return {
				dataSource: {
					resalesOnlineAPI: new ResaleOnlineAPI({ contactId: process.env.CONTACT_ID_P1, token: process.env.API_TOKEN_P2, cache }),
				},
			};
		},
		listen: { host: process.env.HOST, port: parseInt(PORT.toString()) },
	});
	console.log(`Server starts at: ${url}`);
};

run().catch(() => console.error('Server falied to run'));
