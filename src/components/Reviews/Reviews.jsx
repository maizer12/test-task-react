import React from 'react';
import styles from './Reviews.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactStars from 'react-stars';

import 'swiper/css';

export default function Reviews() {
	return (
		<section className={styles.main}>
			<div className='container'>
				<div className={styles.header}>
					<h2 className='title'>What Our Customers Are Saying</h2>
					<div className={styles.buttons}>
						<button>
							<svg width='21.876953' height='15.755737' viewBox='0 0 21.877 15.7557' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
								<desc>Created with Pixso.</desc>
								<defs />
								<path id='Vector' d='M8.26 0.33L0.38 7.08C0.26 7.18 0.16 7.31 0.1 7.44C0.03 7.58 0 7.73 0 7.87C0 8.02 0.03 8.17 0.1 8.31C0.16 8.44 0.26 8.57 0.38 8.67L8.26 15.42C8.5 15.63 8.84 15.75 9.19 15.75C9.53 15.75 9.87 15.63 10.12 15.42C10.36 15.21 10.5 14.92 10.5 14.62C10.5 14.33 10.36 14.04 10.12 13.83L4.48 9L20.56 9C20.91 9 21.24 8.88 21.49 8.67C21.73 8.46 21.87 8.17 21.87 7.87C21.87 7.57 21.73 7.29 21.49 7.08C21.24 6.87 20.91 6.75 20.56 6.75L4.48 6.75L10.12 1.92C10.36 1.71 10.5 1.42 10.5 1.12C10.5 0.82 10.36 0.54 10.12 0.33C9.87 0.11 9.54 0 9.19 0C8.84 0 8.5 0.11 8.26 0.33L8.26 0.33Z' fill='#000000' fill-opacity='1.000000' fill-rule='nonzero' />
							</svg>
						</button>
						<button>
							<svg width='21.876953' height='15.755737' viewBox='0 0 21.877 15.7557' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
								<desc>Created with Pixso.</desc>
								<defs />
								<path id='Vector' d='M13.61 0.33L21.49 7.08C21.61 7.18 21.71 7.31 21.77 7.44C21.84 7.58 21.87 7.73 21.87 7.87C21.87 8.02 21.84 8.17 21.77 8.31C21.71 8.44 21.61 8.57 21.49 8.67L13.61 15.42C13.36 15.63 13.03 15.75 12.68 15.75C12.33 15.75 12 15.63 11.75 15.42C11.51 15.21 11.37 14.92 11.37 14.62C11.37 14.33 11.51 14.04 11.75 13.83L17.39 9L1.31 9C0.96 9 0.63 8.88 0.38 8.67C0.13 8.46 0 8.17 0 7.87C0 7.57 0.13 7.29 0.38 7.08C0.63 6.87 0.96 6.75 1.31 6.75L17.39 6.75L11.75 1.92C11.5 1.71 11.37 1.42 11.37 1.12C11.37 0.82 11.5 0.54 11.75 0.33C12 0.11 12.33 0 12.68 0C13.03 0 13.36 0.11 13.61 0.33L13.61 0.33Z' fill='#000000' fill-opacity='1.000000' fill-rule='nonzero' />
							</svg>
						</button>
					</div>
				</div>
				<Swiper spaceBetween={13} slidesPerView='auto' onSlideChange={() => console.log('slide change')} onSwiper={swiper => console.log(swiper)}>
					<SwiperSlide className={styles.card}>
						<div className={styles['card-top']}>
							<h5 className={styles['card-title']}>Emily R.</h5>
							<ReactStars count={5} size={22.5} color2={'#FFC633'} className={styles.stars} />
						</div>
						<p className={styles['card-text']}>Shopping at Shop.co has been a game changer! Their collection is always up-to-date with the latest trends, and I can always find something that suits my style. The quality is exceptional and the prices are reasonable.</p>
					</SwiperSlide>
					<SwiperSlide className={styles.card}>
						<div className={styles['card-top']}>
							<h5 className={styles['card-title']}>Emily R.</h5>
							<ReactStars count={5} size={18} color2={'#FFC633'} className={styles.stars} />
						</div>
						<p className={styles['card-text']}>Shopping at Shop.co has been a game changer! Their collection is always up-to-date with the latest trends, and I can always find something that suits my style. The quality is exceptional and the prices are reasonable.</p>
					</SwiperSlide>
					<SwiperSlide className={styles.card}>
						<div className={styles['card-top']}>
							<h5 className={styles['card-title']}>Emily R.</h5>
							<ReactStars count={5} size={18} color2={'#FFC633'} className={styles.stars} />
						</div>
						<p className={styles['card-text']}>Shopping at Shop.co has been a game changer! Their collection is always up-to-date with the latest trends, and I can always find something that suits my style. The quality is exceptional and the prices are reasonable.</p>
					</SwiperSlide>
					<SwiperSlide className={styles.card}>
						<div className={styles['card-top']}>
							<h5 className={styles['card-title']}>Emily R.</h5>
							<ReactStars count={5} size={18} color2={'#FFC633'} className={styles.stars} />
						</div>
						<p className={styles['card-text']}>Shopping at Shop.co has been a game changer! Their collection is always up-to-date with the latest trends, and I can always find something that suits my style. The quality is exceptional and the prices are reasonable.</p>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
}
