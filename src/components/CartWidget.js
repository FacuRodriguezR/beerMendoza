
import '../App.css'
import React, { useContext } from 'react'
import carrito from '../assets/img/carrito.png'
import { Badge } from '@mui/material'
import { CartContext } from './CartContext'



 const CartWidget = () => {
  const test = useContext(CartContext);
  return (
    <div className='navCarrito'>
        <img className='carrito' src={carrito}/>
        <Badge badgeContent={4} color="primary">
        </Badge>
    </div>
  )
}

export default CartWidget;