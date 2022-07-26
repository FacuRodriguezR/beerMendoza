import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './itemCount'




const ItemDetail = ( {item}) => {

    const [carritoCompra, setCarritoCompra] = useState(false);

    const onAdd = (qty) => {
        setCarritoCompra(true)
    
    }
    return ( <>
        <div className='cardsBeer'>
            <img src={item.image} width='300px'/>
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