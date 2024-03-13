import { Card } from './styles'

import Button from '../Button'

type Props = {
  title: string
  description: string
  image: string
}

const ProductCard = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} />
    <h3>{title}</h3>
    <p>{description}</p>
    <Button type="button" to="" title="Saiba mais">
      Adicionar ao carrinho
    </Button>
  </Card>
)

export default ProductCard
