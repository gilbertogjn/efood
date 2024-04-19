import { useDispatch, useSelector } from 'react-redux'

import {
  CartContainer,
  InputGroup,
  Overlay,
  Row,
  Total,
  Viewport
} from './styles'

import trashIcon from '../../assets/image/trash.svg'

import Button from '../Button'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrices } from '../../pages/Restaurant'
import { useState } from 'react'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [openDelivery, setOpenDelivery] = useState(false)

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
        {!openDelivery ? (
          <>
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
            <Button
              type="button"
              title="Continuar"
              onClick={() => setOpenDelivery(true)}
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <>
            <h3>Entrega</h3>
            <form>
              <Row>
                <InputGroup>
                  <label>Quem irá receber</label>
                  <input type="text" />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label>Endereço</label>
                  <input type="text" />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label>Cidade</label>
                  <input type="text" />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label>CEP</label>
                  <input type="text" />
                </InputGroup>
                <InputGroup>
                  <label>Número</label>
                  <input type="text" />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label>Complemento</label>
                  <input type="text" />
                </InputGroup>
              </Row>
              <Row>
                <div className="buttons">
                  <Button
                    title="Clique aqui para continuar com o pagamento"
                    type="button"
                  >
                    Continuar com o pagamento
                  </Button>
                  <Button
                    title="Clique aqui para voltar ao carrinho"
                    type="button"
                  >
                    Voltar para o carrinho
                  </Button>
                </div>
              </Row>
            </form>
          </>
        )}
      </CartContainer>
    </Viewport>
  )
}

export default Cart
