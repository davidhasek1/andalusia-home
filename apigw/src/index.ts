import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ResaleOnlineAPI } from './external-api/restApiResolver';
import { resolvers, typeDefs, typeDefsPropertyDetail, typeDefsProperties, typeDefsLocations, typeDefsPropertyType } from './schema';
import 'dotenv/config';

export type Context = {
	dataSource: {
		resalesOnlineAPI: ResaleOnlineAPI;
	};
};

const PORT = parseInt(process.env.PORT ?? '') || 4000;
const typeDefsMerged = [typeDefs, typeDefsPropertyDetail, typeDefsProperties, typeDefsLocations, typeDefsPropertyType];

const server = new ApolloServer<Context>({
	typeDefs: typeDefsMerged,
	resolvers,
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
		listen: { port: PORT },
	});
	console.log(`Server starts at: ${url}`);
};

run().catch((error) => console.error('Server falied to run', error));
