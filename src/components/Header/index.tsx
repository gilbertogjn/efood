import { HeaderBar } from './styles'
import bgHeader from '../../assets/image/bgHeader.svg'

import logo from '../../assets/image/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${bgHeader})` }}>
    <Link to="/">
      <img src={logo} />
    </Link>
    <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
  </HeaderBar>
)

export default Header
