import React from 'react'
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
        <nav className='nav'>
            <ul className='ul'>
                <Link to="/">Home</Link>
                <Link to="/productos">Productos</Link>
                <Link to="/nosotros">Nosotros</Link>
            </ul>
        </nav>
    </>
  )
}

export default NavBar