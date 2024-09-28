'use client';
import { ApolloProvider } from '@apollo/client';
import { client } from 'lib/apolloClient';
import { FC, PropsWithChildren } from 'react';

const ApolloClientContext: FC<PropsWithChildren> = ({ children }) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export { ApolloClientContext };
