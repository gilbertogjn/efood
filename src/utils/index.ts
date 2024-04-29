import { Dish } from '../pages/Home'

export const getTotalPrice = (items: Dish[]) => {
  return items.reduce((accumulator, currentValue) => {
    return (accumulator += currentValue.preco)
  }, 0)
}

export const formatPrices = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
