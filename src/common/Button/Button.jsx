import React from 'react';
import styles from './Button.module.scss';

export default function Button({ children, className }) {
	return <button className={className + ' ' + styles.btn}>{children}</button>;
}
