import React, { useState} from 'react'
import { Link } from 'react-router-dom'

import ItemCount from './itemCount'
import { useCartContext } from './CartContext'





const ItemDetail = ( {item}) => {

    

    const [carritoCompra, setCarritoCompra] = useState(false);

    const {addToCart} = useCartContext();
   

    const onAdd = (quantity) => {
        setCarritoCompra(true)
      addToCart(item,quantity)
    
    }
    return ( <>
        <div className='cardsDetail'>
            <img src={item.image} alt='hola' width='300px'/>
            <h2>{item.name}</h2>
            <p className='descBeer'>{item.description}</p>
            <p className='infoBeer'>{item.stock} en stock</p>
         
            {
                carritoCompra 
                ? <Link to="/cart" className='detalle'>Terminar Compra</Link>
                : <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
            }


            
        </div>
        

        </>
       
    )
}

export default ItemDetail