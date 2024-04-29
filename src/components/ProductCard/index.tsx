import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Card, Description, Modal } from './styles'

import close from '../../assets/image/close.svg'

import Button from '../Button'

import { add, open } from '../../store/reducers/cart'
import { formatPrices } from '../../utils'

type Props = {
  dish: Dish
}

const ProductCard = ({ dish }: Props) => {
  const dispatch = useDispatch()
  const [modalOn, setModalOn] = useState(false)

  const openCart = () => {
    setModalOn(false)
    dispatch(open())
    dispatch(add(dish))
  }

  return (
    <>
      <Card>
        <img src={dish.foto} />
        <h3>{dish.nome}</h3>
        <Description>{dish.descricao}</Description>
        <Button
          type="button"
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
              {`Adicionar ao carrinho - R$ ${formatPrices(dish.preco)}`}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ProductCard
