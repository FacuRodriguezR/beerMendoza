import React from 'react'
import '../App.css'
import  { useEffect, useState } from 'react'

import ItemDetail from './ItemDetail'
import { useParams } from 'react-router'
import { getFirestore, doc, getDoc} from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [item, setData] = useState([]);

    const{ detalleId } = useParams();

    useEffect(()=>{
        
            const querydb = getFirestore();
            const queryDoc = doc(querydb, 'products', detalleId);
            getDoc(queryDoc)
            .then(res => setData({
                id: res.id, ...res.data() }))
    }, [detalleId]);
    return(
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer