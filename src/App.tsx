import Cards from './components/Cards'
import './assets/style/null.scss'
import ButtonMain from './components/UI/ButtonMain'
import { useRecipe } from './store'

function App() {
	const { clearElem, selectedRecipes } = useRecipe()

	const deleteCards = () => {
		selectedRecipes.map(e => clearElem(e))
	}
	return (
		<div className='App'>
			<Cards />
			{Boolean(selectedRecipes.length) && (
				<ButtonMain onClick={deleteCards}>Clear</ButtonMain>
			)}
		</div>
	)
}

export default App
