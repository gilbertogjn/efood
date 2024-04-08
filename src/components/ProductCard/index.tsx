import { useState } from 'react'

import { Card, Modal } from './styles'

import close from '../../assets/image/close.svg'

import Button from '../Button'

import { useDispatch } from 'react-redux'
import { open } from '../../store/reducers/cart'

type Props = {
  title: string
  description: string
  image: string
  price: number
  portion: string
}

const ProductCard = ({ title, description, image, price, portion }: Props) => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  const [modalOn, setModalOn] = useState(false)

  function letterLimit(text: string, maxLength: number) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...'
    }
    return text
  }

  return (
    <>
      <Card>
        <img src={image} />
        <h3>{title}</h3>
        <p>{letterLimit(description, 125)}</p>
        <Button
          type="button"
          to=""
          title="Mais detalhes"
          onClick={() => setModalOn(true)}
        >
          Mais detalhes
        </Button>
      </Card>
      <Modal className={modalOn ? 'visible' : ''}>
        <div className="overlay" onClick={() => setModalOn(false)}></div>
        <div className="container">
          <img src={image} alt="Pizza de Marguerita" />
          <img
            className="close"
            src={close}
            alt="Botão fechar"
            onClick={() => setModalOn(false)}
          />
          <div className="infos">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Serve: {portion}</p>
            <Button
              onClick={openCart}
              type="button"
              title="Adicionar ao carrinho"
            >
              {`Adicionar ao carrinho - R$ ${price}`}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ProductCard
