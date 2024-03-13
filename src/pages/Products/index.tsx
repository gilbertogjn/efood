import HeaderProduct from '../../components/HeaderProduct'
import ProductList from '../../components/ProductList'
import { products } from '../../data/productsList'

const Products = () => (
  <>
    <HeaderProduct />
    <ProductList products={products} />
  </>
)

export default Products
