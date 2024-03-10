import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
)

export default RoutesComponent
