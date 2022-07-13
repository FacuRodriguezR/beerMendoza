import '../App.css'
import CardsBeer from './containers/CardsBeer';
import React, { useState } from 'react'
import productos from '../data/productos'
import Item from '../components/containers/Item'

const ItemListContainer = (props) => {

    const [data, setData] = useState([]);

    const dataPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
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
            {data.map((item, index) => {


                return (
                    <>
                        <div key={index}>

                            <Item
                                item={item} />

                        </div>


                    </>
                )
            }
            )}
            </div>
        </>

    )
}

export default ItemListContainer;