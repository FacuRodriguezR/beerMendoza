import React from 'react'
import '../../App.css'

import { Link } from 'react-router-dom'

const Item = (props) => {

    
    return ( <>
        <div className='cardsBeer'>
            <img src={props.item.image} width='200px' alt='img'/>
            <h2 className='nameItem'>{props.item.name}</h2>
            <p className='descriptionItem'>{props.item.description}</p>
            
            <Link className='detalle' to={`/item/${props.item.id}`}>Detalle</Link>

            


            
        </div>
        

        </>
       
    )

}

export default Item