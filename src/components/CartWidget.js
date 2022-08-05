
import '../App.css'
import React, { useContext } from 'react'
import carrito from '../assets/img/carrito.png'
import { Badge } from '@mui/material'
import { CartContext, useCartContext } from './CartContext'



 const CartWidget = () => {
  const test = useContext(CartContext)
  const {totalItems} = useCartContext();

  console.log(totalItems)
  return (
    <div className='navCarrito'>
        <img className='carrito' src={carrito} alt='cart'/>
        <Badge badgeContent={totalItems()} color="primary">
        </Badge>
    </div>
  )
}

export default CartWidget;