import React, {useContext} from 'react';
import { ProductContext } from '../../ProductContext';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';


const ProductList = () => {
    const [items, setItems, setCarrito] = useContext(ProductContext);
    console.log('data',items);
  return (
        <div className='container'>
            {items.map((items) =>{
                return<ProductCard data={items} key={items.id}></ProductCard>
            })}
        </div>
    
  )
}

export default ProductList