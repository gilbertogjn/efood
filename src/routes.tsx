import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Products from './pages/Restaurant'

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<Products />} />
  </Routes>
)

export default RoutesComponent
