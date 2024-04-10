import HeaderProduct from '../../components/HeaderProduct'
import ProductList from '../../components/ProductList'

export const formatPrices = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const Restaurant = () => (
  <>
    <HeaderProduct />
    <ProductList />
  </>
)

export default Restaurant
