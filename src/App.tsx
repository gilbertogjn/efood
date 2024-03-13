import { BrowserRouter } from 'react-router-dom'
import RoutesComponent from './routes'

import { GlobalCss } from './styles'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <RoutesComponent />
      <Footer />
    </BrowserRouter>
  )
}

export default App
