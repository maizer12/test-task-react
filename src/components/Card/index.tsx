import ICard from '../../types/ICard'
import { useRecipe } from '../../store'
import './Card.scss'
import { checkCard } from '../../helpers/checkCard'
import { Link } from 'react-router-dom'
type IProps = {
	card: ICard
}

function Card({ card }: IProps) {
	const { chooseSelected, selectedRecipes, removeSelected } = useRecipe()
	const checkSelected = checkCard(selectedRecipes, card)

	const clickCard = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault()
		const checked = checkCard(selectedRecipes, card)
		checked ? removeSelected(card) : chooseSelected(card)
	}
	return (
		<Link
			to={'/product/' + card.id}
			className={`card-item ${checkSelected ? 'active-card' : ''}`}
			onContextMenu={clickCard}
		>
			<h3 className='card-item__num'>{card.id}</h3>
			<img className='card-item__img' src={card.image_url} alt='card img' />
			<h4 className='card-item__name'>{card.name}</h4>
			<p className='card-item__desc'>{card.description}</p>
		</Link>
	)
}

export default Card
