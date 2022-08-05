import React from 'react'
import Nav from './components/NavBar';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';


import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { CartContext } from './components/CartContext';
import Cart from './components/Cart';
import  CartContextProvider from './components/CartContext';



function App() {
  return (
    <>
   <CartContextProvider>
   <BrowserRouter>
      <Nav/>  
        <Routes>
            <Route path ="/" element={<ItemListContainer />} />
            <Route path ="/category/:categoryId" element={<ItemListContainer />} />
            <Route path ="/item/:detalleId" element={<ItemDetailContainer />} />
            <Route path ="/cart" element={<Cart/>}/>
        </Routes> 
      </BrowserRouter>
      </CartContextProvider>
    </>
    );
  
}

export default App;
