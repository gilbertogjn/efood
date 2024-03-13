import ProductCard from '../ProductCard'
import Product from '../../models/Product'

import { Grid } from './styles'

export type Props = {
  products: Product[]
}

const ProductList = ({ products }: Props) => (
  <div className="container">
    <Grid>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
        />
      ))}
    </Grid>
  </div>
)

export default ProductList
