import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Favourites from './pages/Favourites';

const App = () => {
  return (
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/favourites' element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
