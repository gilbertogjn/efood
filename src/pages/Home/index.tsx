import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import { restaurants } from '../../data/restaurantsList'

const Home = () => (
  <>
    <Header />
    <RestaurantList restaurants={restaurants} />
  </>
)

export default Home
