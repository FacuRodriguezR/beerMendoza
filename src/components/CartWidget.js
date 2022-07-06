
import '../App.css'
import React from 'react'
import carrito from '../assets/img/carrito.png'

export const CartWidget = () => {
  return (
    <div>
        <img className='carrito' src={carrito}/> <span>0</span>
    </div>
  )
}

export default CartWidget;