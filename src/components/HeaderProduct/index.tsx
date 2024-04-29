import { Link, useParams } from 'react-router-dom'

import { HeaderBar, HeaderProductInfo, HeroBar } from './styles'

import bgHeader from '../../assets/image/bgHeader.svg'
import logo from '../../assets/image/logo.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useGetRestaurantQuery } from '../../services/api'

const HeaderProduct = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    if (items.length > 0) {
      dispatch(open())
    }
  }

  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantQuery(id!)

  return (
    <HeaderBar style={{ backgroundImage: `url(${bgHeader})` }}>
      <div className="container">
        <HeaderProductInfo>
          <Link
            title="Voltar para restaurantes"
            className="restaurantsBtn"
            to="/"
          >
            Restaurantes
          </Link>
          <Link title="Voltar para restaurantes" className="logoHome" to="/">
            <img src={logo} />
          </Link>
          <p onClick={openCart}>{items.length} produto(s) no carrinho</p>
        </HeaderProductInfo>
      </div>
      <HeroBar style={{ backgroundImage: `url(${restaurant?.capa})` }}>
        <div className="container">
          <h3>{restaurant?.tipo}</h3>
          <h2>{restaurant?.titulo}</h2>
        </div>
      </HeroBar>
    </HeaderBar>
  )
}

export default HeaderProduct
