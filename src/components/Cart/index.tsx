import { useDispatch, useSelector } from 'react-redux'

import { CartContainer, Overlay, Total, Viewport } from './styles'

import trashIcon from '../../assets/image/trash.svg'

import Button from '../Button'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrices } from '../../pages/Restaurant'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentValue) => {
      return (accumulator += currentValue.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <Viewport className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <CartContainer>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <img className="itemImg" src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formatPrices(item.preco)}</p>
              </div>
              <img
                onClick={() => removeItem(item.id)}
                className="removeItem"
                src={trashIcon}
              />
            </li>
          ))}
        </ul>
        <Total>
          <span>Valor total</span>
          <span>R$ {formatPrices(getTotalPrice())}</span>
        </Total>
        <Button type="button" title="Continuar">
          Continuar com a entrega
        </Button>
      </CartContainer>
    </Viewport>
  )
}

export default Cart
