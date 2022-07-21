import React from 'react'
import Nav from './components/NavBar';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';

import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import CartContext from './components/CartContext';
import Cart from './components/Cart';



function App() {
  return (
    <>
   <CartContext.Provider value={'HolaCoders'}>
   <BrowserRouter>
      <Nav/>  
        <Routes>
            <Route path ="/" element={<ItemListContainer />} />
            <Route path ="/category/:id" element={<ItemListContainer />} />
            <Route path ="/item/:id" element={<ItemDetailContainer />} />
            <Route path ="/cart" element={<Cart/>}/>
        </Routes> 
      </BrowserRouter>
    </CartContext.Provider>
    </>
    );
  
}

export default App;
