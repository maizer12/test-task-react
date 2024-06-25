import React from 'react';
import styles from './Products.module.scss';
import ProductCard from './ProductCard';
import Button from '../../common/Button/Button';

export default function Products() {
	return (
		<section className={styles.wrapper}>
			<div className='container'>
				<h2 className={styles.title + ' title'}>Products:</h2>
				<ul className={styles.products}>
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</ul>
				<Button className={styles.btn}>Views all</Button>
			</div>
		</section>
	);
}
