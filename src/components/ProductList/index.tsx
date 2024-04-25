import ProductCard from '../ProductCard'

import { Grid } from './styles'
import { useParams } from 'react-router-dom'
import { useGetRestaurantQuery } from '../../services/api'

const ProductList = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantQuery(id!)

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <div className="container">
      <Grid>
        {restaurant.cardapio.map((dish) => (
          <ProductCard key={dish.id} dish={dish} />
        ))}
      </Grid>
    </div>
  )
}

export default ProductList
