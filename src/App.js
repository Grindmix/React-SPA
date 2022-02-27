import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/home'
import ProductInfo from './pages/productInfo';
import AboutPage from './pages/about';

import {Route, Routes} from 'react-router-dom';

function App() {
  return(
    <div className='app'>
      <Header text='Столы на заказ' />
      <Routes>
          <Route index element={<HomePage/>} />
          <Route exact path='/productInfo/:id' element={<ProductInfo />} />
          <Route exact path='/about' element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
