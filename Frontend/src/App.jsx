import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Cart from './Pages/Cart'
import Header from './component/Header/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
  