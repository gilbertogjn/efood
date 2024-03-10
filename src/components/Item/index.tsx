import { Card, Rating, TitleBar, Infos, TagBar } from './styles'

import star from '../../assets/image/star.svg'
import Button from '../Button'
import Tag from '../Tag'

type Props = {
  title: string
  rate: string
  category: string
  featured: boolean
  description: string
  image: string
}

const Item = ({
  title,
  rate,
  category,
  featured,
  description,
  image
}: Props) => (
  <Card>
    <img src={image} />
    <TagBar>
      {featured && <Tag>Destaque da semana</Tag>}
      <Tag>{category}</Tag>
    </TagBar>
    <Infos>
      <TitleBar>
        <h3>{title}</h3>
        <Rating>
          <span>{rate}</span>
          <img src={star} />
        </Rating>
      </TitleBar>
      <p>{description}</p>
      <Button type="link" to="/products" title="Saiba mais">
        Saiba Mais
      </Button>
    </Infos>
  </Card>
)

export default Item
