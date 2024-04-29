import { HeaderBar } from './styles'
import bgHeader from '../../assets/image/bgHeader.svg'

import logo from '../../assets/image/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${bgHeader})` }}>
    <div className="container">
      <Link title="Voltar para home" to="/">
        <h1>
          <img src={logo} />
        </h1>
      </Link>
      <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
    </div>
  </HeaderBar>
)

export default Header
