import React, {useContext} from 'react'
import { ProductContext } from '../../ProductContext'
import CartCard from '../../componentes/CartCard/CartCard';
import './Carrito.css';
import { Link } from 'react-router-dom';

const Carrito = () => {
    let bolean = false
    let precioTotal = 0
    const [items,carrito2, setItems, addCarrito,  removCarrito, cargarCarrito] = useContext(ProductContext);
    if(carrito2.lenth === 0){
        bolean = true
    }
    
  return (
    <>
    {carrito2.length === 0 ?<p>El carrito esta vacio, vuelva a <Link to="/">Home</Link> para completarlo</p> :
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
                
                return(<CartCard data={data} key={data.id} ></CartCard>)
            })}
        </div>
    </div> 
    }
    
        
    </>
  )
}

export default Carrito