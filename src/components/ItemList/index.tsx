import Item from '../Item'
import Restaurant from '../../models/Restaurant'

import { Grid } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const ItemList = ({ restaurants }: Props) => (
  <div className="container">
    <Grid>
      {restaurants.map((restaurant) => (
        <Item
          key={restaurant.id}
          featured={restaurant.featured}
          category={restaurant.category}
          description={restaurant.description}
          image={restaurant.image}
          title={restaurant.title}
          rate={restaurant.rate}
        />
      ))}
    </Grid>
  </div>
)

export default ItemList
