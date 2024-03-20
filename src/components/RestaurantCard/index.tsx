import { Card, Rating, TitleBar, Infos, TagBar } from './styles'

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
}: Props) => {
  function letterLimit(text: string, maxLength: number) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...'
    }
    return text
  }

  return (
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
        <p>{letterLimit(description, 220)}</p>
        <Button type="link" to={`/restaurant/${id}`} title="Saiba mais">
          Saiba mais
        </Button>
      </Infos>
    </Card>
  )
}

export default RestaurantCard
