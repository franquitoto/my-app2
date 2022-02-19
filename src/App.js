
import './App.css';

import { ProductProvider } from './ProductContext';

// Componentes
import NavBar from './componentes/NavBar/NavBar';

// REAC ROUTER DOM
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import React from 'react';

import Home from './views/Home/Home';
import Nosotros from './views/Nosotros/Nosotros';
import Productos from './views/Productos/Productos';


const App = () => {
  return (
    <ProductProvider>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/nosotros' element={<Nosotros/>}></Route>
        <Route path='/productos' element={<Productos/>}></Route>
      </Routes>
    </Router>
    </ProductProvider>
  )
}

export default App
