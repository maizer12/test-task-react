import create from 'zustand'
import ICard from './types/ICard'

interface ICardState {
	listRecipes: ICard[]
	selectedRecipes: ICard[]
	page: number
	fetchRecipes: (page: number) => Promise<void>
	chooseSelected: (elem: ICard) => void
	removeSelected: (elem: ICard) => void
	clearElem: (elem: ICard) => void
	deleteFiveElements: () => void
}

export const useRecipe = create<ICardState>(set => ({
	listRecipes: [],
	selectedRecipes: [],
	page: 1,
	chooseSelected: (elem: ICard) => {
		set(state => ({
			selectedRecipes: [...state.selectedRecipes, elem],
		}))
	},
	removeSelected: (elem: ICard) => {
		set(state => ({
			selectedRecipes: state.selectedRecipes.filter(e => e.id !== elem.id),
		}))
	},
	clearElem: (elem: ICard) => {
		set(state => ({
			listRecipes: [...state.listRecipes.filter(e => e.id !== elem.id)],
			selectedRecipes: [],
		}))
	},
	deleteFiveElements: () => {
		set(state => ({
			listRecipes: [...state.listRecipes.slice(5)],
		}))
	},
	fetchRecipes: async (page: number) => {
		try {
			const result = await fetch(
				'https://api.punkapi.com/v2/beers?page=' + page
			)
			const json = (await result.json()) as ICard[]
			set(state => ({ listRecipes: [...state.listRecipes, ...json] }))
		} catch {
			alert('Error')
		}
	},
}))
