import React from 'react'
import './ButtonMain.scss'

type IProps = {
	children: string
	onClick: () => void
}
function ButtonMain({ children, onClick }: IProps) {
	return (
		<button className='button-main' onClick={onClick}>
			{children}
		</button>
	)
}

export default ButtonMain
