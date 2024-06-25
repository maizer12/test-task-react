import React from 'react';
import styles from './ProductInfoBanner.module.scss';
import ProductImg from '../../assets/images/product-banner-img.png';
import Button from '../../common/Button/Button';

export default function ProductInfoBanner() {
	return (
		<section className={styles.main}>
			<div className={styles.inner}>
				<div className={styles.wrapper}>
					<img src={ProductImg} />
				</div>
				<div className={styles.content}>
					<h3 className={styles.title}>Discover the Standout Qualities of Our Newest Products</h3>
					<ul className={styles.list}>
						<li>Construction: All frames are made from hardwood solids and laminates, ensuring durability and strength.</li>
						<li>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</li>
						<li>Structure: The arms, backs, and seats are structurally reinforced for maximum support and comfort.</li>
					</ul>
					<div className={styles.bottom}>
						<Button>Add cart</Button>
						<h5 className={styles.price}>$32.00</h5>
					</div>
				</div>
			</div>
		</section>
	);
}
