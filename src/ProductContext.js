import React, { createContext, useState, useEffect } from 'react';

// FIREBASE - FIRESTON 
import {db} from './firebase/firebaseConfig';
import { collection, query, where, getDocs, QuerySnapshot } from 'firebase/firestore';


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

    
    const [carrito2, setCarrito2] = useState([]);
    let carrito = [];
    let cont = 0
    const addCarrito = (data) => {
        let aux = 0;
        carrito.forEach(e => {
            if(e.id == data.id){
                e.selection+=1
                aux = 1
                console.log(carrito)
            }
        });
        if(aux == 0){
            carrito.push(data)
            console.log(carrito)
        }
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
        <ProductContext.Provider value={[items,carrito, setItems, addCarrito,  removCarrito]}>
            {children}
        </ProductContext.Provider>
    );
}