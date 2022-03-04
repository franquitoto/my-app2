import React, {useContext} from 'react'
import { ProductContext } from '../../ProductContext'
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [items,carrito, setItems, addCarrito,  removCarrito] = useContext(ProductContext);
  return (
    <>
        <nav className='nav'>
            <ul className='ul'>
                <Link to="/">Home</Link>
                <Link to="/productos">Productos</Link>
                <Link to="/nosotros">Nosotros</Link>
                <Link to="/carrito" >Carrito: {carrito.length}</Link>
            </ul>
        </nav>
    </>
  )
}

export default NavBar