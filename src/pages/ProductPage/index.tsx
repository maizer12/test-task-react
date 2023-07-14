import React from 'react'
import './ProductPage.scss'
import { useParams } from 'react-router-dom'
import { useRecipe } from '../../store'
import { Link } from 'react-router-dom'

function ProductPage() {
	const { listRecipes } = useRecipe()
	const { productId } = useParams()
	const element = listRecipes.find(e => e.id == Number(productId))
	console.log()
	if (!element) {
		return (
			<main className='product-page'>
				<h1 className='title'>product not found</h1>
			</main>
		)
	}
	return (
		<main className='product-page'>
			<div className='product-page__content'>
				<img
					src={element.image_url}
					alt='product'
					className='product-page__img'
				/>
				<div className='product-page__text'>
					<h2 className='product-page__name'>Name: {element.name}</h2>
					<p className='product-page__desc'>Desc: {element.description}</p>
					<h3 className='product-page__tagline'>Tagline: {element.tagline}</h3>
					<ul className='product-page__items'>
						<li className='product-page__item'>
							Date of creation: <span>{element.first_brewed}</span>
						</li>
						<li className='product-page__item'>
							Volume:{' '}
							<span>{element.volume.value + ' ' + element.volume.unit}</span>
						</li>
					</ul>
					<Link className='product-page__btn' to='/'>
						Home
					</Link>
				</div>
			</div>
		</main>
	)
}

export default ProductPage
