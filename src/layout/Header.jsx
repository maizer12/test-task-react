import React from 'react';
import styles from './Layout.module.scss';
import Logo from '../assets/images/Logo.svg';

const menu = [
	{
		label: 'Home',
		link: '/',
	},
	{
		label: 'About us',
		link: '/',
	},
	{
		label: 'Contacts',
		link: '/',
	},
	{
		label: 'Catalog',
		link: '/',
	},
];

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={`container ${styles['header-inner']}`}>
				<a>
					<img src={Logo} alt='Logo' />
				</a>
				<div className={styles.right}>
					<nav className={styles.menu}>
						{menu.map(e => (
							<a href={e.link} key={e.label}>
								{e.label}
							</a>
						))}
					</nav>
					<div className={styles['header-buttons']}>
						<a className={styles['header-btn']}>
							<svg width='20.929688' height='19.787231' viewBox='0 0 20.9297 19.7872' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
								<desc>Created with Pixso.</desc>
								<defs />
								<path id='Vector' d='M7.9 17.51C7.9 18.35 7.22 19.03 6.37 19.03C5.52 19.03 4.84 18.35 4.84 17.51C4.84 16.67 5.52 15.98 6.37 15.98C7.22 15.98 7.9 16.67 7.9 17.51Z' stroke='#FFFFFF' stroke-opacity='1.000000' stroke-width='1.500000' />
								<path id='Vector' d='M17.11 17.51C17.11 18.35 16.42 19.03 15.57 19.03C14.73 19.03 14.04 18.35 14.04 17.51C14.04 16.67 14.73 15.98 15.57 15.98C16.42 15.98 17.11 16.67 17.11 17.51Z' stroke='#FFFFFF' stroke-opacity='1.000000' stroke-width='1.500000' />
								<path id='Vector' d='M0.75 0.75L1.01 0.84C2.34 1.3 3.01 1.54 3.39 2.09C3.77 2.64 3.77 3.38 3.77 4.85L3.77 7.61C3.77 10.6 3.84 11.59 4.72 12.52C5.61 13.44 7.03 13.44 9.89 13.44L10.97 13.44M15.31 13.44C16.9 13.44 17.7 13.44 18.27 12.99C18.83 12.53 18.99 11.75 19.31 10.2L19.83 7.74C20.18 5.97 20.36 5.09 19.9 4.5C19.45 3.92 17.9 3.92 16.18 3.92L9.97 3.92M3.77 3.92L5.86 3.92' stroke='#FFFFFF' stroke-opacity='1.000000' stroke-width='1.500000' />
							</svg>
						</a>
						<a className={styles['header-btn']}>
							<svg width='21.000000' height='18.000000' viewBox='0 0 21 18' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
								<desc>Created with Pixso.</desc>
								<defs />
								<path id='Vector' d='M10.49 1.46C9.37 0.55 7.91 0 6.3 0C2.82 0 0 2.61 0 5.84C0 7.33 0.59 8.69 1.57 9.73L10.5 18L19.15 9.97L19.41 9.72C20.4 8.69 21 7.33 21 5.84C21 2.61 18.17 0 14.69 0C13.08 0 11.62 0.55 10.5 1.46L10.5 1.46L10.49 1.46ZM10.5 3.65L10.56 3.7L11.55 2.78L11.66 2.69C12.46 2.03 13.52 1.63 14.69 1.63C17.22 1.63 19.25 3.53 19.25 5.84C19.25 6.9 18.82 7.87 18.12 8.61L17.9 8.83L10.5 15.69L2.85 8.6C2.16 7.87 1.75 6.9 1.75 5.84C1.75 3.53 3.77 1.63 6.3 1.63C7.47 1.63 8.53 2.03 9.33 2.69L9.44 2.78L10.43 3.7L10.5 3.65Z' fill='#FFFFFF' fill-opacity='1.000000' fill-rule='evenodd' />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}
