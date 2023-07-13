import create from 'zustand'
import ICard from './Types/ICard'

interface ICardState {
	listRecipes: ICard[]
	selectedRecipes: ICard[]
	fetchRecipes: () => Promise<void>
	chooseSelected: (elem: ICard) => void
	removeSelected: (elem: ICard) => void
	clearElem: (elem: ICard) => void
}

export const useRecipe = create<ICardState>(set => ({
	listRecipes: [],
	selectedRecipes: [],
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
			listRecipes: state.listRecipes.filter(e => e.id !== elem.id),
			selectedRecipes: [],
		}))
	},
	fetchRecipes: async () => {
		const result = await fetch('https://api.punkapi.com/v2/beers?page=1')
		const json = (await result.json()) as ICard[]
		set({ listRecipes: json })
	},
}))
