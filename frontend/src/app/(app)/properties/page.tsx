import PropertyCard from 'components/propertyCard/PropertyCard';
import React from 'react';
import { graphql } from '../../../gql';
import { useQuery } from '@apollo/client';

const testProperties = [
	{
		image: '/header.jpeg',
		address: 'address',
		title: 'title1',
		bedrooms: 1,
		bathrooms: 1,
		insideSurface: 1,
		outsideSurface: 1,
		price: 1,
	},
	{
		image: '/header.jpeg',
		address: 'address',
		title: 'title2',
		bedrooms: 1,
		bathrooms: 1,
		insideSurface: 1,
		outsideSurface: 1,
		price: 1,
	},
	{
		image: '/header.jpeg',
		address: 'address',
		title: 'title3',
		bedrooms: 1,
		bathrooms: 1,
		insideSurface: 1,
		outsideSurface: 1,
		price: 1,
	},
	{
		image: '/header.jpeg',
		address: 'address',
		title: 'title4',
		bedrooms: 1,
		bathrooms: 1,
		insideSurface: 1,
		outsideSurface: 1,
		price: 1,
	},
];

const propertiesQuery = graphql(`
	query getExample {
		getExample {
			Property {

			}
		}
	}
`);

const PropertiesPage = () => {
	// const { data } = useQuery(propertiesQuery);

	// console.log('<<<<<', data);

	return (
		<div className={'my-5 container'}>
			<ul className={'grid items-center gap-10' + ' md:grid-cols-2' + ' lg:grid-cols-3'}>
				{testProperties.map((item, index) => (
					<li key={index}>
						<PropertyCard {...item} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default PropertiesPage;
