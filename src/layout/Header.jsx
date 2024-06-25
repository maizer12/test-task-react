import React from 'react';
import styles from './Layout.module.scss';

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
		label: 'Home 1',
		link: '/',
	},
];

export default function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.menu}>
				{menu.map(e => (
					<a href={e.link} key={e.label}>
						{e.label}
					</a>
				))}
			</nav>
		</header>
	);
}
