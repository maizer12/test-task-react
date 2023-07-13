import React from 'react'
import ICard from '../../Types/ICard'
import { useRecipe } from '../../store'
import './Card.scss'
import { checkCard } from '../../helpers/checkCard'
type IProps = {
	card: ICard
}

function Card({ card }: IProps) {
	const { chooseSelected, selectedRecipes, removeSelected } = useRecipe()
	const checkSelected = checkCard(selectedRecipes, card)

	const clickCard = () => {
		const checked = checkCard(selectedRecipes, card)
		checked ? removeSelected(card) : chooseSelected(card)
	}
	return (
		<li
			className={`card-item ${checkSelected ? 'active-card' : ''}`}
			onClick={clickCard}
		>
			<img className='card-item__img' src={card.image_url} alt='card img' />
			<h4 className='card-item__name'>{card.name}</h4>
			<p className='card-item__desc'>{card.description}</p>
		</li>
	)
}

export default Card
