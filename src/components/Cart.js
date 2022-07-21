import { useContext } from 'react'
import CartContext from './CartContext'

const Cart = () => {
    const test = useContext(CartContext)
    console.log(test.cartList)

  return (
  <>

  <div>Cart</div>
  <hr/>
  {}
  </>
  )
}

export default Cart