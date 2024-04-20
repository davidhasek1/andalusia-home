'use client';
import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { graphql } from '../gql';
import { useQuery } from '@apollo/client';
const listBooksQuery = graphql(`
	query listBooksQuery {
		books {
			id
			title
		}
	}
`);

export const Example: FC = () => {
	const { data } = useQuery(listBooksQuery);

	return (
		<div>
			<FormattedMessage id="test" />
			<br />
			<FormattedMessage id="test2" />
			GQL data fetch: {JSON.stringify(data?.books)}
		</div>
	);
};
