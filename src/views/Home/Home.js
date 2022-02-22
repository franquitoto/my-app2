import React, {useContext} from 'react'
import ProductList from '../../componentes/ProductList/ProductList'
import { ProductContext } from '../../ProductContext';

const Home = () => {
  const [items, setItems] = useContext(ProductContext);
  
  return (
    <div>
      <ProductList></ProductList>
    </div>
  )
}

export default Home