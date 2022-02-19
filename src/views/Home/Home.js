import React, {useContext} from 'react'
import ProductList from '../../componentes/ProductList/ProductList'
import { ProductContext } from '../../ProductContext';

const Home = () => {
  const [items, setItems, setCarrito, mostCarrito] = useContext(ProductContext);
  
  return (
    <div>
      <ProductList></ProductList>
      <button onClick={mostCarrito}>Mostrar carrito por consola</button>
    </div>
  )
}

export default Home