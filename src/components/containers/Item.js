import React from 'react'
import '../../App.css'
import ItemCount from '../itemCount'

const Item = (props) => {

    const onAdd = (param) => {console.log(`la cantidad comprada es ${param}` )}
    return ( <>
        <div className='cardsBeer'>
            <img src={props.item.image} width=' 200px'/>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <ItemCount initial={1} stock={16} onAdd={onAdd}/>


            
        </div>
        

        </>
       
    )

}

export default Item