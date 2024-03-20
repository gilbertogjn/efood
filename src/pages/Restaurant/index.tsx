import HeaderProduct from '../../components/HeaderProduct'
import ProductList from '../../components/ProductList'
import { products } from '../../data/productsList'

const Restaurant = () => (
  <>
    <HeaderProduct />
    <ProductList products={products} />
  </>
)

export default Restaurant
