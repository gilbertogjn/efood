import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'

export type Dish = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Dish[]
}

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Header />
        <RestaurantList restaurants={restaurants} />
      </>
    )
  }

  return <h3>Carregando...</h3>
}

export default Home
