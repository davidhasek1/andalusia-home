import { Context } from '.';
import { Resolvers } from '../apigw-resolvers-types';

const typeDefs = `#graphql

  type Todo {
    userId: Int,
    id: Int,
    title: String
    completed: Boolean
  }

  type Query {
    listTodo: [Todo]!
    getTodo(id: ID!): Todo!
  }
`;

const resolvers = {
	Query: {
		listTodo: async (parent, {}, context) => {
			return context.dataSource.resalesOnlineAPI.listTodo();
		},
		getTodo: async (parent, { id }, context) => {
			return context.dataSource.resalesOnlineAPI.getTodo(id);
		},
	},
} as Resolvers<Context>;

export { typeDefs, resolvers };
