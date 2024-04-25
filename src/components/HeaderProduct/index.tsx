import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { HeaderBar, HeaderProductInfo, HeroBar } from './styles'
import { Restaurant } from '../../pages/Home'

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
    dispatch(open())
  }

  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantQuery(id!)

  return (
    <HeaderBar style={{ backgroundImage: `url(${bgHeader})` }}>
      <div className="container">
        <HeaderProductInfo>
          <Link className="restaurantsBtn" to="/">
            Restaurantes
          </Link>
          <Link className="logoHome" to="/">
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
