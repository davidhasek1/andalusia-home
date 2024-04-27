import Image from 'next/image';
import React, { FC } from 'react';

type PropertyDetailProps = {
	slug: string;
};

const PropertyDetail: FC<PropertyDetailProps> = ({ slug }) => {
	return (
		<div>
			<Image />
			<p>Adresa</p>
			<h1 className={'font-semibold text-4xl'}>Title</h1>
			<div className={'grid grid-cols-2' + ' lg:grid-cols-3'}>
				<div>
					<p>Cena</p>
					<p>1 500 000</p>
				</div>
				<div>
					<p>Ložnice</p>
					<p>3</p>
				</div>
				<div>
					<p>Koupelny</p>
					<p>2</p>
				</div>
				<div>
					<p>Obytná plocha</p>
					<p>900 m2</p>
				</div>
				<div>
					<p>Pozemek</p>
					<p>1 200 m2</p>
				</div>
			</div>
		</div>
	);
};

export default PropertyDetail;
