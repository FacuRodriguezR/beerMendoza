import '../App.css'
import React, { useState, useEffect } from 'react'

import Item from '../components/containers/Item'
import { useParams } from 'react-router';
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore';

const ItemListContainer = () => {

    const [data, setData] = useState([]);
    const{ categoryId } = useParams();

    useEffect(()=>{
     const querydb = getFirestore();
     const queryCollection = collection(querydb, 'products');
     
     if(categoryId){
         const queryFilter = query(queryCollection, where('id_category', '==', categoryId))
         getDocs(queryFilter)
         .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))

     }else{
        getDocs(queryCollection)
         .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))

     }
    
    }, [categoryId] );



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