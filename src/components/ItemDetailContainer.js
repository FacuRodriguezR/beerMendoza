import React from 'react'
import '../App.css'
import  { useEffect, useState } from 'react'
import productos from '../data/productos'
import Item from '../components/containers/Item'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router'

const ItemDetailContainer = () => {
    const [data, setData] = useState([]);

    const{ id } = useParams();

    useEffect(()=>{
        
            const dataPromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(productos);
                }, 1000);
            });
        
            dataPromise.then(
                (response) => {
                    setData(response.find(productos=>productos.id === parseInt(id)));
                },
        
            [])
                return(
                    <ItemDetail data={data}/>
                )
                
                
    });
}

export default ItemDetailContainer