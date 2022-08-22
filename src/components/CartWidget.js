
import '../App.css'
import React from 'react'
import carrito from '../assets/img/carrito.png'
import { Badge } from '@mui/material'
import { useCartContext } from './CartContext'



 const CartWidget = () => {

  const {totalItems} = useCartContext();

  
  return (
    <div className='navCarrito'>
        <img className='carrito' src={carrito} alt='cart'/>
        <Badge badgeContent={totalItems()} color="primary">
        </Badge>
    </div>
  )
}

export default CartWidget;