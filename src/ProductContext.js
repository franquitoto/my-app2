import React, { createContext, useState, useEffect } from 'react';

// FIREBASE - FIRESTON 
import {db} from './firebase/firebaseConfig';
import { collection, query, where, getDocs, QuerySnapshot } from 'firebase/firestore';

const initialCart = []
let changedCart;


export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    useEffect(() =>{
        const getProducts = async () =>{
            const q = query(collection(db, 'productos'));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {

                docs.push({...doc.data(), id: parseInt(doc.id)});
                
            });
            setItems(docs)
        }
        getProducts();
    }, []);

    
    const [carrito2, setCarrito2] = useState(initialCart);
    let carrito = [];
    let cont = 0
    const addCarrito = (data) => {
        if(carrito2.length === 0){
            changedCart = [
                ...carrito2,
                data,
            ]
            setCarrito2(changedCart)
            console.log(carrito2)
        }

        /*let aux = 0;
        carrito2.forEach(e => {
            if(e.id == data.id){
                e.selection+=1
                aux = 1
                console.log(carrito)
            }
        });
        const changedCatr = carrito2.map( e => (
            e.id === data.id
            ? data.selection += 1
            : e
        ))
        if(aux == 0){
            carrito.push(data)
            console.log(carrito)
        }*/
        
    }
    
    const removCarrito = (data) =>{
        let i = 0
        carrito.forEach(e => {
            if(e.id == data.id){
                carrito.splice(i, 1)
                console.log(carrito)
            }
            i += 1;
        });
    }




    return (
        <ProductContext.Provider value={[items,carrito2, setItems, addCarrito,  removCarrito]}>
            {children}
        </ProductContext.Provider>
    );
}