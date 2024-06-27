import React from 'react';
import ProductImg from '../../assets/images/product.png';
import styles from './Products.module.scss';
import ReactStars from 'react-stars';

export default function ProductCard() {
	return (
		<li className={styles.card}>
			<div className={styles['img-wrapper']}>
				<img alt='Product' src={ProductImg} />
			</div>
			<h5 className={styles['product-title']}>Fjallraven - Foldsack No....</h5>
			<div className={styles.rating}>
				<ReactStars count={5} size={19} color2={'#FFC633'} className={styles.stars} />
				<p>
					4/<span>5</span>
				</p>
			</div>
			<h5 className={styles['product-price']}>$145</h5>
		</li>
	);
}
