import { Context } from '.';
import { Resolvers } from '../apigw-resolvers-types';

const typeDefs = `#graphql

  
  type ExampleType {
    ApiId: Int!,
    QueryId: Int!
    SearchType: String!
    PropertyCount: Int!,
    CurrentPage: Int!,
    PropertiesPerPage: Int!
  }
  type GetExample {
    QueryInfo: ExampleType!
  }

  type Query {
    getExample: GetExample!
  }
`;

const resolvers = {
	Query: {
		getExample: async (parent, {}, context) => {
			return await context.dataSource.resalesOnlineAPI.getExample();
		},
	},
} as Resolvers<Context>;

export { typeDefs, resolvers };
