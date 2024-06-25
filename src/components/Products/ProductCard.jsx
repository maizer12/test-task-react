import React from 'react';
import ProductImg from '../../assets/images/product.png';
import styles from './Products.module.scss';

export default function ProductCard() {
	return (
		<li className={styles.card}>
			<div className={styles['img-wrapper']}>
				<img alt='Product' src={ProductImg} />
			</div>
			<h5 className={styles['product-title']}>Fjallraven - Foldsack No....</h5>
			<div>Here will be stars</div>
			<h5 className={styles['product-price']}>$145</h5>
		</li>
	);
}
