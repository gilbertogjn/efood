import { HeaderBar } from './styles'
import bgHeader from '../../assets/image/bgHeader.svg'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${bgHeader})` }}>
    <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
  </HeaderBar>
)

export default Header
