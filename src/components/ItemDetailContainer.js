import React from 'react'
import '../App.css'
import  { useEffect, useState } from 'react'
import productos from '../data/productos'
import Item from '../components/containers/Item'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const dataPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos[1]);
        }, 1000);
    });

    dataPromise.then(
        (response) => {
            setData(response);
        },

    )
    return (
        <>  
        <div className="cards">
            <ItemDetail item={data}/>
            </div>    
        </>

    )
}

export default ItemDetailContainer