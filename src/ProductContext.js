import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const initialState = [
    { id: 1, name: 'Mesa', price: 1000, stock: 10, selection: 1 },
    { id: 2, name: 'Silla', price: 650, stock: 10, selection: 1 },
    { id: 3, name: 'Desayunador', price: 300, stock: 10, selection: 1 },
    { id: 4, name: 'Cocinita', price: 1200, stock: 10, selection: 1 },
    { id: 5, name: 'Matero', price: 250, stock: 10, selection: 1 },
    { id: 6, name: 'Pizera', price: 150, stock: 10, selection: 1 },

];

export const ProductProvider = ({ children }) => {
    const [items, setItems] = useState(initialState);
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