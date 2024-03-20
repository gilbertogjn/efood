import ProductCard from '../ProductCard'
import Product from '../../models/Product'

import { Grid } from './styles'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Restaurant } from '../../pages/Home'

export type Props = {
  products: Product[]
}

const ProductList = ({ products }: Props) => {
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
          <ProductCard
            key={dish.id}
            title={dish.nome}
            description={dish.descricao}
            image={dish.foto}
            price={dish.preco}
            portion={dish.porcao}
          />
        ))}
      </Grid>
    </div>
  )
}

export default ProductList
