import { HeaderBar, HeaderProductInfo, HeroBar } from './styles'
import bgHeroBar from '../../assets/image/bgHeroBar.jpg'
import bgHeader from '../../assets/image/bgHeader.svg'

import logo from '../../assets/image/logo.svg'
import { Link } from 'react-router-dom'

const HeaderProduct = () => (
  <HeaderBar style={{ backgroundImage: `url(${bgHeader})` }}>
    <div className="container">
      <HeaderProductInfo>
        <Link className="restaurantsBtn" to="/">
          Restaurantes
        </Link>
        <Link className="logoHome" to="/">
          <img src={logo} />
        </Link>
        <p>0 produto(s) no carrinho</p>
      </HeaderProductInfo>
    </div>
    <HeroBar style={{ backgroundImage: `url(${bgHeroBar})` }}>
      <div className="container">
        <h3>Italiana</h3>
        <h2>La Dolce Vita Trattoria</h2>
      </div>
    </HeroBar>
  </HeaderBar>
)

export default HeaderProduct
