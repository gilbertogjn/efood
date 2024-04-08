import ProductCard from '../ProductCard'

import { Grid } from './styles'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Restaurant } from '../../pages/Home'

const ProductList = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

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
