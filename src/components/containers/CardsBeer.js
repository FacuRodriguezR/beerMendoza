import React from 'react'
import '../../App.css'
import ItemCount from '../itemCount';

 function CardsBeer  (props) {

    const onAdd = (param) => {console.log(`la cantidad comprada es ${param}` )}
    return ( <>
        <div className='cardsBeer'>
            <img src={props.image} width=' 200px'/>
            <h2>{props.name}</h2>
            <p>{props.description}</p>

        
            <ItemCount initial={1} stock={16} onAdd={onAdd}/>
        </div>
        

        </>
       
    )
}

export default CardsBeer;