import React, { useState } from 'react'



const ItemCount = ({initial, stock, onAdd}) => {

    

    const [counter, setCounter] = useState(initial)

    

    const add = () => {
        if (counter < stock){
            const aux = counter+1
            setCounter(aux)
        } else {
            alert('No hay más stock')
        }
    }

    const substract = () =>{
        if (counter > initial){
            const aux = counter-1
            setCounter(aux)
        }
    }

  return (
    <>
    <div>
        <div className='botonAdd'>
            <button  onClick={substract}>-</button>
            <p>{counter}</p>
            <button onClick={add}>+</button>
        </div>
        <button className='agregarCarr' onClick={()=>onAdd(counter)}>Agregar al carrito</button>
    </div>
    </>
  )
  
}

export default ItemCount;