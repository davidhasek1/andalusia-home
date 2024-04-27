import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

type PropertyCardProps = {
	image: string;
	address: string;
	title: string;
	bedrooms: number;
	bathrooms: number;
	insideSurface: number;
	outsideSurface: number;
	price: number;
};

const PropertyCard: FC<PropertyCardProps> = ({ image, address, title, bedrooms, bathrooms, insideSurface, outsideSurface, price }) => {
	return (
		<Link href={`/properties/${title}`}>
			<Card>
				<div className={'relative w-full h-[20rem]'}>
					<Image src={image} alt={title} fill sizes={'25vw'} objectFit={'cover'} />
				</div>
				<CardHeader>
					<p>{address}</p>
					<CardTitle>{title}</CardTitle>
				</CardHeader>
				<CardContent>
					<div className={'flex items-center gap-10'}>
						<p>{bedrooms}</p>
						<p>{bathrooms}</p>
						<p>{insideSurface}</p>
						<p>{outsideSurface}</p>
					</div>
				</CardContent>
				<CardFooter>
					<p>{price}</p>
				</CardFooter>
			</Card>
		</Link>
	);
};

export default PropertyCard;
