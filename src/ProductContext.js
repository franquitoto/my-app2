import React, { createContext, useState, useEffect } from 'react';

// FIREBASE - FIRESTON 
import {db} from './firebase/firebaseConfig';
import { collection, query, where, getDocs, QuerySnapshot } from 'firebase/firestore';

const initialCart = []
let changedCart;
let auxChangedCart;


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
    
    const addCarritoSoloUno = (data) =>{
        changedCart = [
            ...carrito2,
            data,
        ]
        auxChangedCart = changedCart
        setCarrito2(changedCart)
    }
    const addCarrito = (data) => {
        if (carrito2.length === 0) {
            addCarritoSoloUno(data)
        }else{
            let aux = 0;
            auxChangedCart.forEach(e => {
                if(e.id == data.id){
                    e.selection+=1
                    aux = 1
                }
            });
            if(aux === 0){
                addCarritoSoloUno(data)
            }else{
                setCarrito2(auxChangedCart)
            }
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
        <ProductContext.Provider value={[items,carrito2, setItems, addCarrito,  removCarrito, setCarrito2]}>
            {children}
        </ProductContext.Provider>
    );
}