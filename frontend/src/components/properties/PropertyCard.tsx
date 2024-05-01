import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { PropertyType } from './PropertiesList';

const PropertyCard: FC<{ propertyData: PropertyType }> = ({ propertyData }) => {
	return (
		<Link href={`/properties/${propertyData.Area}`}>
			<Card>
				<div className={'relative w-full h-[20rem]'}>
					<Image src={propertyData.MainImage ?? '/property-placeholder.webp'} alt={''} fill sizes={'25vw'} objectFit={'cover'} />
				</div>
				<CardHeader>
					<p>{propertyData.Area}</p>
					<CardTitle>{propertyData.Location}</CardTitle>
				</CardHeader>
				<CardContent>
					<div className={'flex items-center gap-10'}>
						<p>{propertyData.Bedrooms}</p>
						<p>{propertyData.Bathrooms}</p>
						<p>{propertyData.Built}</p>
						<p>{propertyData.GardenPlot}</p>
					</div>
				</CardContent>
				<CardFooter>
					<p>
						{/* eslint-disable-next-line formatjs/no-literal-string-in-jsx */}
						{propertyData.Price} {propertyData.Currency === 'EUR' && '€'}
					</p>
				</CardFooter>
			</Card>
		</Link>
	);
};

export default PropertyCard;
