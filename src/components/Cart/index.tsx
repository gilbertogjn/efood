import React, { useEffect, useState } from 'react'
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
import { close, remove, clear } from '../../store/reducers/cart'

import { formatPrices } from '../../pages/Restaurant'

import { useFormik } from 'formik'
import * as Yup from 'yup'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [currentScreen, setCurrentScreen] = useState<number>(1)
  const [addressOn, setAddressOn] = useState(true)

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      postalCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().min(5).required('Campo obrigatório'),
      address: Yup.string().min(5).required('Campo obrigatório'),
      city: Yup.string().min(5).required('Campo obrigatório'),
      postalCode: Yup.string().min(8).required('Campo obrigatório'),
      number: Yup.string().min(8).required('Campo obrigatório'),
      complement: Yup.string(),

      cardName: Yup.string().min(5).required('Campo obrigatório'),
      cardNumber: Yup.string().min(12).required('Campo obrigatório'),
      cardCode: Yup.string().min(3).required('Campo obrigatório'),
      expiresMonth: Yup.string().min(2).required('Campo obrigatório'),
      expiresYear: Yup.string().min(4).required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const handleNext = () => {
    setCurrentScreen(currentScreen + 1)
  }

  const handlePrevious = () => {
    setCurrentScreen(currentScreen - 1)
  }

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 1:
        return (
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
            <Button type="button" title="Continuar" onClick={handleNext}>
              Continuar com a entrega
            </Button>
          </>
        )
      case 2:
        return (
          <>
            <form onSubmit={form.handleSubmit}>
              {addressOn ? (
                <div className="address-screen">
                  <h3>Entrega</h3>
                  <Row>
                    <InputGroup>
                      <label htmlFor="fullName">Quem irá receber</label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={form.values.fullName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('fullname')}</small>
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup>
                      <label htmlFor="address">Endereço</label>
                      <input
                        id="address"
                        type="text"
                        name="address"
                        value={form.values.address}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup>
                      <label htmlFor="city">Cidade</label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        value={form.values.city}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup>
                      <label htmlFor="postalCode">CEP</label>
                      <input
                        id="postalCode"
                        type="text"
                        name="postalCode"
                        value={form.values.postalCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="number">Número</label>
                      <input
                        id="number"
                        type="text"
                        name="number"
                        value={form.values.number}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup>
                      <label htmlFor="complement">Complemento</label>
                      <input
                        id="complement"
                        type="text"
                        name="complement"
                        value={form.values.complement}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <div className="buttons">
                      <Button
                        onClick={() => setAddressOn(false)}
                        title="Clique aqui para continuar com o pagamento"
                        type="button"
                      >
                        Continuar com o pagamento
                      </Button>
                      <Button
                        onClick={handlePrevious}
                        title="Clique aqui para voltar ao carrinho"
                        type="button"
                      >
                        Voltar para o carrinho
                      </Button>
                    </div>
                  </Row>
                </div>
              ) : (
                <div className="payment-screen">
                  <h3>
                    Pagamento - Valor a pagar R$ {formatPrices(getTotalPrice())}
                  </h3>
                  <Row>
                    <InputGroup>
                      <label htmlFor="cardName">Nome no cartão</label>
                      <input
                        id="cardName"
                        type="text"
                        name="cardName"
                        value={form.values.cardName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </InputGroup>
                  </Row>
                  <Row className="card-data-row">
                    <InputGroup>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <input
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cardCode">CVV</label>
                      <input
                        id="cardCode"
                        type="text"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup>
                      <label htmlFor="expiresMonth">Mês de vencimento</label>
                      <input
                        id="expiresMonth"
                        type="text"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="expiresYear">Ano de vencimento</label>
                      <input
                        id="expiresYear"
                        type="text"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <div className="buttons">
                      <Button
                        onClick={form.handleSubmit}
                        title="Clique aqui para finaliar o pagamento"
                        type="button"
                      >
                        Finalizar o pagamento
                      </Button>
                      <Button
                        onClick={() => setAddressOn(true)}
                        title="Clique aqui para voltar a edição de endereço"
                        type="button"
                      >
                        Voltar para edição do endereço
                      </Button>
                    </div>
                  </Row>
                </div>
              )}
            </form>
          </>
        )
      case 3:
        return (
          <>
            <h3>Pedido realizado - (ORDER_ID)</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Button
              onClick={clearCart}
              title="Clique para concluir"
              type="button"
            >
              Concluir
            </Button>
          </>
        )
    }
  }

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const clearCart = () => {
    dispatch(clear())
    dispatch(close())
    setCurrentScreen(1)
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
      <CartContainer>{renderCurrentScreen()}</CartContainer>
    </Viewport>
  )
}

export default Cart
