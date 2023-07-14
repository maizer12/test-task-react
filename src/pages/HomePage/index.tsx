import React from 'react'
import ButtonMain from '../../components/UI/ButtonMain'
import { useRecipe } from '../../store'
import Cards from '../../components/Cards'
const HomePage = () => {
	const { clearElem, selectedRecipes } = useRecipe()
	const deleteCards = () => {
		selectedRecipes.map(e => clearElem(e))
	}
	return (
		<main className='home'>
			<Cards />
			{Boolean(selectedRecipes.length) && (
				<ButtonMain onClick={deleteCards}>Clear</ButtonMain>
			)}
		</main>
	)
}

export default HomePage
