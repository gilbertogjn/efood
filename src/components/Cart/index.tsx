import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

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

import { formatPrices, getTotalPrice } from '../../utils'
import { usePurchaseMutation } from '../../services/api'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [currentScreen, setCurrentScreen] = useState<number>(1)
  const [addressOn, setAddressOn] = useState(true)
  const [purchase, { isLoading, isError, data, isSuccess }] =
    usePurchaseMutation()
  const dispatch = useDispatch()

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
      fullName: Yup.string()
        .min(5, 'O campo deve ter no minímo 5 caracteres')
        .required('Campo obrigatório'),
      address: Yup.string()
        .min(5, 'O campo deve ter no minímo 5 caracteres')
        .required('Campo obrigatório'),
      city: Yup.string()
        .min(3, 'O campo deve ter no minímo 3 caracteres')
        .required('Campo obrigatório'),
      postalCode: Yup.string()
        .min(8, 'O campo deve ter no minímo 8 caracteres')
        .required('Campo obrigatório'),
      number: Yup.number()
        .min(3, 'O campo deve ter no minímo 3 caracteres')
        .required('Campo obrigatório'),
      complement: Yup.string(),

      cardName: Yup.string().min(5).required('Campo obrigatório'),
      cardNumber: Yup.string().min(12).required('Campo obrigatório'),
      cardCode: Yup.string().min(3).required('Campo obrigatório'),
      expiresMonth: Yup.string().min(2).required('Campo obrigatório'),
      expiresYear: Yup.string().min(4).required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: [
          {
            id: 1,
            price: 10
          }
        ],
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.postalCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })

      handleNext()
      setAddressOn(true)
    }
  })

  const handleNext = () => {
    setCurrentScreen(currentScreen + 1)
  }

  const handlePrevious = () => {
    setCurrentScreen(currentScreen - 1)
  }

  const getErrorMsg = (fieldName: string, msg?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return msg

    return ''
  }

  const isValidAdress = () => {
    if (
      'fullName' in form.touched ||
      'address' in form.touched ||
      'city' in form.touched ||
      'postalCode' in form.touched ||
      'number' in form.touched
    ) {
      setAddressOn(
        'fullName' in form.errors ||
          'address' in form.errors ||
          'city' in form.errors ||
          'postalCode' in form.errors ||
          'number' in form.errors
      )
    }
  }

  const closeCart = () => {
    dispatch(close())
  }

  const clearCart = () => {
    dispatch(clear())
    dispatch(close())
    setCurrentScreen(1)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 1:
        return (
          <>
            {items.length === 0 ? (
              <>
                <p>Seu carrinho esta vazio</p>
                <Button
                  title="Voltar para produtos"
                  type="button"
                  onClick={() => dispatch(close())}
                >
                  Voltar para produtos
                </Button>
              </>
            ) : (
              <>
                <ul>
                  {items.map((item) => (
                    <li key={item.id}>
                      <img
                        className="itemImg"
                        src={item.foto}
                        alt={item.nome}
                      />
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
                  <span>R$ {formatPrices(getTotalPrice(items))}</span>
                </Total>
                <Button type="button" title="Continuar" onClick={handleNext}>
                  Continuar com a entrega
                </Button>
              </>
            )}
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
                      <small>
                        {getErrorMsg('fullName', form.errors.fullName)}
                      </small>
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
                      <small>
                        {getErrorMsg('address', form.errors.address)}
                      </small>
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
                      <small>{getErrorMsg('city', form.errors.city)}</small>
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup>
                      <label htmlFor="postalCode">CEP</label>
                      <InputMask
                        id="postalCode"
                        type="text"
                        name="postalCode"
                        value={form.values.postalCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        mask="99999-999"
                      />
                      <small>
                        {getErrorMsg('postalCode', form.errors.postalCode)}
                      </small>
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
                      <small>{getErrorMsg('number', form.errors.number)}</small>
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup>
                      <label htmlFor="complement">Complemento (opcional)</label>
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
                        onClick={isValidAdress}
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
                    Pagamento - Valor a pagar R${' '}
                    {formatPrices(getTotalPrice(items))}
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
                      <small>
                        {getErrorMsg('cardName', form.errors.cardName)}
                      </small>
                    </InputGroup>
                  </Row>
                  <Row className="card-data-row">
                    <InputGroup>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <InputMask
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        mask="9999 9999 9999 9999"
                      />
                      <small>
                        {getErrorMsg('cardNumber', form.errors.cardNumber)}
                      </small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cardCode">CVV</label>
                      <InputMask
                        id="cardCode"
                        type="text"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        mask="999"
                      />
                      <small>
                        {getErrorMsg('cardCode', form.errors.cardCode)}
                      </small>
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup>
                      <label htmlFor="expiresMonth">Mês de vencimento</label>
                      <InputMask
                        id="expiresMonth"
                        type="text"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        mask="99"
                      />
                      <small>
                        {getErrorMsg('expiresMonth', form.errors.expiresMonth)}
                      </small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="expiresYear">Ano de vencimento</label>
                      <InputMask
                        id="expiresYear"
                        type="text"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        mask="9999"
                      />
                      <small>
                        {getErrorMsg('expiresYear', form.errors.expiresYear)}
                      </small>
                    </InputGroup>
                  </Row>
                  <Row>
                    <div className="buttons">
                      <Button
                        onClick={form.handleSubmit}
                        title="Clique aqui para finaliar o pagamento"
                        type="submit"
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
        return isSuccess ? (
          <>
            <h3>Pedido realizado - {data.orderId}</h3>
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
        ) : (
          <p>Processando o pedido...</p>
        )
    }
  }

  return (
    <Viewport className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <CartContainer>{renderCurrentScreen()}</CartContainer>
    </Viewport>
  )
}

export default Cart
