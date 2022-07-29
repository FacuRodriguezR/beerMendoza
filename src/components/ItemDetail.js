import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import CartContext from './CartContext'
import ItemCount from './itemCount'
import { useCartContext } from './CartContext'





const ItemDetail = ( {item}) => {

    

    const [carritoCompra, setCarritoCompra] = useState(false);
    const test = useContext(CartContext);
    const {addToCart} = useCartContext();

    const onAdd = (qty) => {
        setCarritoCompra(true)
      addToCart(item,qty)
    
    }
    return ( <>
        <div className='cardsBeer'>
            <img src={item.image} alt='hola' width='300px'/>
            <h2>{item.name}</h2>
            <p className='descBeer'>{item.description}</p>
            <p className='infoBeer'>{item.descriptionGeneral}</p>
         
            {
                carritoCompra 
                ? <Link to="/cart">Terminar Compra</Link>
                : <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
            }


            
        </div>
        

        </>
       
    )
}

export default ItemDetail