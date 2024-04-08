import { useState } from 'react'

import { Card, Modal } from './styles'

import close from '../../assets/image/close.svg'

import Button from '../Button'

import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { Dish } from '../../pages/Home'

// type Props = {
//   title: string
//   description: string
//   image: string
//   price: number
//   portion: string
// }

type Props = {
  dish: Dish
}

const ProductCard = ({ dish }: Props) => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
    dispatch(add(dish))
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
        <img src={dish.foto} />
        <h3>{dish.nome}</h3>
        <p>{letterLimit(dish.descricao, 125)}</p>
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
          <img src={dish.foto} alt="Pizza de Marguerita" />
          <img
            className="close"
            src={close}
            alt="Botão fechar"
            onClick={() => setModalOn(false)}
          />
          <div className="infos">
            <h3>{dish.nome}</h3>
            <p>{dish.descricao}</p>
            <p>Serve: {dish.porcao}</p>
            <Button
              onClick={openCart}
              type="button"
              title="Adicionar ao carrinho"
            >
              {`Adicionar ao carrinho - R$ ${dish.preco}`}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ProductCard
