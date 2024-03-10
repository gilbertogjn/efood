import { BrowserRouter } from 'react-router-dom'
import RoutesComponent from './routes'

import Header from './components/Header'
import { GlobalCss } from './styles'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Header />
      <RoutesComponent />
      <Footer />
    </BrowserRouter>
  )
}

export default App
