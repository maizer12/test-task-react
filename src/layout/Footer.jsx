import React from 'react';
import styles from './Layout.module.scss';
import arrow from '../assets/images/arrow.svg';
import { contacts } from './contacts.constants';

export default function Footer() {
	return (
		<>
			<div className={styles['footer-top']}>
				<div className={`container ${styles.inner}`}>
					<p>Stay Updated with the Latest Discounts, Sales, and Trendy Collections</p>
					<label>
						<input placeholder='Enter your Email' />
						<button>
							<img src={arrow} />
						</button>
					</label>
				</div>
			</div>
			<footer className={styles.footer}>
				<div className={`container ${styles.inner}`}>
					<div className={styles['columns']}>
						<div className={styles['column']}>
							<h5>Company</h5>
							<ul>
								<li>
									<a>About Us</a>
								</li>
								<li>
									<a>Careers</a>
								</li>
								<li>
									<a>Blog</a>
								</li>
								<li>
									<a>Press</a>
								</li>
							</ul>
						</div>
						<div className={styles['column']}>
							<h5>Support</h5>
							<ul>
								<li>
									<a>Contact Us</a>
								</li>
								<li>
									<a>Help Center</a>
								</li>
								<li>
									<a>Shipping & Delivery</a>
								</li>
								<li>
									<a>Returns & Refunds</a>
								</li>
							</ul>
						</div>
						<div className={styles['column']}>
							<h5>Products</h5>
							<ul>
								<li>
									<a>New Arrivals </a>
								</li>
								<li>
									<a>Best Sellers</a>
								</li>
								<li>
									<a>Clearance</a>
								</li>
								<li>
									<a>Gift Cards</a>
								</li>
							</ul>
						</div>
					</div>
					<div className={styles['contact']}>
						<h5>Contact Information</h5>
						<a className={styles['link']}>Email: info@fakestore.com</a>
						<a className={`${styles['link']} ${styles['link-blue']}`}>Phone: 1 (800) 123-4567</a>
						<div className={styles.icons}>
							{contacts.map(e => (
								<a className={styles.icon}>
									<img src={e.icon} />
								</a>
							))}
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
