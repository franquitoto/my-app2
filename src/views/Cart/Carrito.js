import React, {useContext} from 'react'
import { ProductContext } from '../../ProductContext'
import CartCard from '../../componentes/CartCard/CartCard';
import './Carrito.css';
let carrito2
const Carrito = () => {
    let precioTotal = 0
    const [items, setItems, setCarrito, carrito] = useContext(ProductContext);
    carrito2 = JSON.parse(carrito)
  return (
    <> 
    <div className='container2'>
        <div className='resumen'>
            {carrito2.map((e) => {
                precioTotal = precioTotal + e.price
                return(<li>{e.name}</li>)
            })}
            <p>$ {precioTotal}</p>
        </div>
        <div className='articulos'>
            {carrito2.map((data) =>{
                return(<CartCard data={data}></CartCard>)
            })}
        </div>
    </div>
        
    </>
  )
}

export default Carrito