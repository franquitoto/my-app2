import React, { useState, useContext } from 'react'
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { ProductContext } from '../../ProductContext'
const initialState = {
    name:'',
    lastName: '',
    city: '',
};

const Shops = () => {
    const [items,carrito2, setItems, addCarrito,  removCarrito, cargarCarrito,setCarrito2] = useContext(ProductContext);
    const [values, setValues] = useState(initialState);
    const[purchaseID, setPurcheseID] = useState('')
    const onChange = (e) =>{
        const {value, name} = e.target;
        setValues({...values, [name]: value })
    }
    const dltCarrito = () =>{
        setCarrito2([])
    }
    const onSubmit = async (e) =>{
        e.preventDefault()
        const docRef = await addDoc(collection(db, "purchase"),{
            values
        });
        console.log(docRef.id);
        setPurcheseID(docRef.id)
        setValues(initialState)
        dltCarrito()
        console.log(carrito2)
    }

  return (
    <>
        <form className='formContainer' onSubmit={onSubmit}>
            <input 
                placeholder='name'
                name="name"
                value={values.name}
                onChange={onChange}
                >
                
            </input>
            <input 
                placeholder='lastName'
                name="lastName"
                value={values.lastName}
                onChange={onChange}
                >
                
            </input>
            <input 
                placeholder='city'
                name="city"
                value={values.city}
                onChange={onChange}
                >
                
            </input>
            <button>enviar</button>
            {purchaseID && <p>compra exitosa, su codigo de compra es: ${purchaseID}</p>}
        </form>
    </>
  )
}

export default Shops