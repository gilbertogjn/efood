import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Products from './pages/Products'

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
  </Routes>
)

export default RoutesComponent
