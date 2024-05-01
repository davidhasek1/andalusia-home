'use client';
import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { graphql } from '../gql';
import { useQuery } from '@apollo/client';
const example = graphql(`
	query example {
		listPropertiesForSale {
			Property {
				Price
				Area
				Location
			}
		}
	}
`);

export const Example: FC = () => {
	const { data } = useQuery(example);

	return (
		<div>
			<FormattedMessage id={'test'} />
			<br />
			{/*  eslint-disable-next-line formatjs/no-literal-string-in-jsx */}
			<FormattedMessage id={'test2'} />
			GQL data fetch: {JSON.stringify(data?.listPropertiesForSale)}
		</div>
	);
};
