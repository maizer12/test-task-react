import ICard from '../types/ICard'

export const checkCard = (arr: ICard[], card: ICard) => {
	return arr.find(e => e.id === card.id)
}
