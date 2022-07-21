import React from 'react'
import ItemCount from './itemCount'



const ItemDetail = ( {item}) => {
    const onAdd = (param) => {
        console.log(`la cantidad comprada es ${param}` )
    
    }
    return ( <>
        <div className='cardsBeer'>
            <img src={item.image} width='300px'/>
            <h2>{item.name}</h2>
            <p className='descBeer'>{item.description}</p>
            <p className='infoBeer'>{item.descriptionGeneral}</p>
         
            <ItemCount initial={1} stock={16} onAdd={onAdd}/>


            
        </div>
        

        </>
       
    )
}

export default ItemDetail