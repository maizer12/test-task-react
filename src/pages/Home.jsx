import React from 'react';
import Banner from '../components/Banner/Banner';
import Products from '../components/Products/Products';
import Reviews from '../components/Reviews/Reviews';
import ProductInfoBanner from '../components/ProductInfoBanner/ProductInfoBanner';

export default function Home() {
	return (
		<>
			<Banner />
			<Products />
			<Reviews />
			<ProductInfoBanner />
		</>
	);
}
