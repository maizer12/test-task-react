import { useEffect, useState } from 'react'
import { useRecipe } from '../../store'
import './Cards.scss'
import Card from '../Card'
function Cards() {
	const { listRecipes, fetchRecipes, deleteFiveElements } = useRecipe()
	const [page, setPage] = useState<number>(1)
	useEffect(() => {
		if (listRecipes.length < 15) {
			fetchRecipes(page)
			setPage(page + 1)
		}
	}, [listRecipes])

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler)
		return function () {
			document.removeEventListener('scroll', scrollHandler)
		}
	}, [])
	const scrollHandler = (e: Event) => {
		const scrollTop: number = (e.target as Document).documentElement.scrollTop
		const scrollHeight: number = (e.target as Document).documentElement
			.scrollHeight
		const windowHeight: number = window.innerHeight
		if (scrollHeight - (scrollTop + windowHeight) < 100) {
			deleteFiveElements()
		}
	}

	return (
		<ul className='card-items'>
			{listRecipes.map((e, i) => i < 15 && <Card key={e.id} card={e} />)}
		</ul>
	)
}

export default Cards
