import '../App.css'
import CardsBeer from './containers/CardsBeer';
import React, { useState, useEffect } from 'react'
import productos from '../data/productos'
import Item from '../components/containers/Item'
import { useParams } from 'react-router';

const ItemListContainer = (props) => {

    const [data, setData] = useState([]);
    const{ id } = useParams();

    useEffect(()=>{
        if(id=== undefined) {
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
        }else{
            const dataPromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(productos.filter(item=>item.id_category === parseInt(id) ));
                }, 2000);
            });
        
            dataPromise.then(
                (response) => {
                    setData(response);
                },
        
            )
        }
    },[id]);

    // const dataPromise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(productos);
    //     }, 1000);
    // });

    // dataPromise.then(
    //     (response) => {
    //         setData(response);
    //     },

    // )

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