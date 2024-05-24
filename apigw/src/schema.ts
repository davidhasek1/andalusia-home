import { Context } from '.';
import { Resolvers } from '../apigw-resolvers-types';
import { typeDefsPropertyDetail } from './typedefs/propertyDetailTypeDefs';
import { typeDefsProperties } from './typedefs/propertiesTypeDefs';
import { typeDefsLocations } from './typedefs/locationsTypeDefs';

const typeDefs = `#graphql

  type Query {
    listPropertiesForSale(filter: PropertiesFilterInput, page: PropertiesPaginateInput): Properties!
    getPropertyForSale(referenceId: ID!): PropertyDetail!
    listLocations: LocationResponse!
  }
`;

const resolvers = {
	Query: {
		listPropertiesForSale: async (_parent, { filter, page }, context) => {
			//console.log('[MY FILTER]', filter);
			return await context.dataSource.resalesOnlineAPI.listProperties(filter, page);
		},
		getPropertyForSale: async (parent, { referenceId }, context) => {
			//console.log(referenceId);
			return await context.dataSource.resalesOnlineAPI.getProperty(referenceId);
		},
		listLocations: async (_parent, {}, context) => {
			return await context.dataSource.resalesOnlineAPI.listLocation();
		},
	},
} as Resolvers<Context>;

export { typeDefs, typeDefsPropertyDetail, typeDefsProperties, typeDefsLocations, resolvers };
