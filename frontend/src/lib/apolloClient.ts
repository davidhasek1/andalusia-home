import { ApolloClient, InMemoryCache } from '@apollo/client';

let GRAPHQL_URL;

if (process.env.NODE_ENV === 'development') {
	console.log('using local');
	GRAPHQL_URL = 'http://localhost:4000/graphql';
} else {
	console.log('using render');
	GRAPHQL_URL = 'https://andalusia-home-api.onrender.com/graphql';
}

export const client = new ApolloClient({
	uri: GRAPHQL_URL,
	cache: new InMemoryCache(),
});
