
import '../App.css'
import React from 'react'
import carrito from '../assets/img/carrito.png'
import { Badge } from '@mui/material'



export const CartWidget = () => {
  return (
    <div className='navCarrito'>
        <img className='carrito' src={carrito}/>
        <Badge badgeContent={4} color="primary">
        </Badge>
    </div>
  )
}

export default CartWidget;