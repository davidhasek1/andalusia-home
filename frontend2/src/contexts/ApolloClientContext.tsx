'use client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { FC, PropsWithChildren } from 'react';

let GRAPHQL_URL;

if (process.env.NODE_ENV === 'development') {
	console.log('using local');
	GRAPHQL_URL = 'http://localhost:10000/graphql';
} else {
		console.log('using render');
	GRAPHQL_URL = 'https://andalusia-home-api.onrender.com/graphql';
}
const client = new ApolloClient({
	uri: GRAPHQL_URL,
	cache: new InMemoryCache(),
});

const ApolloClientContext: FC<PropsWithChildren> = ({ children }) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export { ApolloClientContext };
