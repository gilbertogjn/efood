import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

export type Dish = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
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
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <RestaurantList restaurants={restaurants} />
    </>
  )
}

export default Home
