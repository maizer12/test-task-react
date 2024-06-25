import React from 'react';
import styles from './Banner.module.scss';

export default function Banner() {
	return (
		<section className={styles.banner}>
			<h1 className={styles.title}>Technology That Exceeds Expectations</h1>
			<div className={styles.buttons}>
				<button className={styles.sign + ' btn'}>Sign Up Now</button>
				<button className={styles.contact + ' btn'}>Contact Us</button>
			</div>
		</section>
	);
}
