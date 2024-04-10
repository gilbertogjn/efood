import { Card, Rating, TitleBar, Infos, TagBar, Description } from './styles'

import star from '../../assets/image/star.svg'
import Button from '../Button'
import Tag from '../Tag'

type Props = {
  id: number
  title: string
  rate: number
  category: string
  featured: boolean
  description: string
  image: string
}

const RestaurantCard = ({
  id,
  title,
  rate,
  category,
  featured,
  description,
  image
}: Props) => (
  <Card>
    <img className="photo" src={image} />
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
      <Description>{description}</Description>
      <Button type="link" to={`/restaurant/${id}`} title="Saiba mais">
        Saiba mais
      </Button>
    </Infos>
  </Card>
)

export default RestaurantCard
