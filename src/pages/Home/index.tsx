import ItemList from '../../components/ItemList'
import { restaurants } from '../../data/restaurantsList'

const Home = () => (
  <>
    <ItemList restaurants={restaurants} />
  </>
)

export default Home
