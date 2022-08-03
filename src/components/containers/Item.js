import React from 'react'
import '../../App.css'
import ItemCount from '../itemCount'
import { Link } from 'react-router-dom'

const Item = (props) => {

    const onAdd = (param) => {console.log(`la cantidad comprada es ${param}` )}
    return ( <>
        <div className='cardsBeer'>
            <img src={props.item.image} width='200px'/>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            
            <Link className='detalle' to={`/item/${props.item.id}`}>Detalle</Link>

            


            
        </div>
        

        </>
       
    )

}

export default Item