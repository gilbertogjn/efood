import { CartContainer, Overlay, Total, Viewport } from './styles'

import itemImg from '../../assets/image/product1.jpg'
import trashIcon from '../../assets/image/trash.svg'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <Viewport className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <CartContainer>
        <ul>
          <li>
            <img className="itemImg" src={itemImg} />
            <div>
              <h3>Pizza Marguerita</h3>
              <p>R$ 60,90</p>
            </div>
            <img className="removeItem" src={trashIcon} />
          </li>
          <li>
            <img className="itemImg" src={itemImg} />
            <div>
              <h3>Pizza Marguerita</h3>
              <p>R$ 60,90</p>
            </div>
            <img className="removeItem" src={trashIcon} />
          </li>
          <li>
            <img className="itemImg" src={itemImg} />
            <div>
              <h3>Pizza Marguerita</h3>
              <p>R$ 60,90</p>
            </div>
            <img className="removeItem" src={trashIcon} />
          </li>
        </ul>
        <Total>
          <span>Valor total</span>
          <span>R$ 182,70</span>
        </Total>
        <Button type="button" title="Continuar">
          Continuar com a entrega
        </Button>
      </CartContainer>
    </Viewport>
  )
}

export default Cart
