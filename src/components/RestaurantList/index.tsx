import RestaurantCard from '../RestaurantCard'
import Restaurant from '../../models/Restaurant'

import { Grid } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <div className="container">
    <Grid>
      {restaurants.map((restaurant) => (
        <RestaurantCard
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

export default RestaurantList
