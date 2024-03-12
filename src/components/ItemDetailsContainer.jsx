import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {ItemDetail} from './ItemDetail.jsx';
import { getProduct } from '../firebase/firebase.js';

export const ItemDetailsContainer = () => {
    const [item, SetItem] = useState([])
    const { pid } = useParams()
    useEffect(() => {
        getProduct(pid)
        .then(prod => SetItem(prod))
        .catch(error => console.log(error))
    }, [])

    return (
        <div >
            <ItemDetail item={item} />
        </div>
    )
}