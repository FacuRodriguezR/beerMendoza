import React from 'react'
import '../../App.css'



 function CardsBeer  (props) {

    
    return ( <>
        <div className='cardsBeer'>
            <img src={props.image} width=' 200px'/>
            <h2>{props.name}</h2>
            <p>{props.description}</p>

    
        </div>
        

        </>
       
    )
}

export default CardsBeer;