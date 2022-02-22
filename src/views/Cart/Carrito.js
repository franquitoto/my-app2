import React, {useContext} from 'react'
import { ProductContext } from '../../ProductContext'
import CartCard from '../../componentes/CartCard/CartCard';
import './Carrito.css';

const Carrito = () => {
    let precioTotal = 0
    const [items,carrito, setItems, addCarrito,  removCarrito] = useContext(ProductContext);
    
  return (
    <> 
    <div className='container2'>
        <div className='resumen'>
            {carrito.map((e) => {
                precioTotal = precioTotal + e.price
                return(<li>{e.name}</li>)
            })}
            <p>$ {precioTotal}</p>
        </div>
        <div className='articulos'>
            {carrito.map((data) =>{
                
                return(<CartCard data={data} key={data.id} ></CartCard>)
            })}
        </div>
    </div>
        
    </>
  )
}

export default Carrito