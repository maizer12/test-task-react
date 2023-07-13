import { useEffect } from 'react'
import { useRecipe } from '../../store'
import './Cards.scss'
import Card from '../Card'
function Cards() {
	const { listRecipes, fetchRecipes } = useRecipe()
	useEffect(() => {
		fetchRecipes()
	}, [])
	return (
		<ul className='card-items'>
			{listRecipes.map((e, i) => i < 15 && <Card key={e.id} card={e} />)}
		</ul>
	)
}

export default Cards
