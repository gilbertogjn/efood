import { Container, Socials } from './styles'
import logo from '../../assets/image/logo.svg'
import instagram from '../../assets/image/instagram.svg'
import facebook from '../../assets/image/facebook.svg'
import twitter from '../../assets/image/twitter.svg'
import { Link } from 'react-router-dom'

const Footer = () => (
  <Container>
    <Link to="/">
      <img src={logo} />
    </Link>
    <Socials>
      <a href="#">
        <img src={instagram} />
      </a>
      <a href="#">
        <img src={facebook} />
      </a>
      <a href="#">
        <img src={twitter} />
      </a>
    </Socials>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </Container>
)

export default Footer
