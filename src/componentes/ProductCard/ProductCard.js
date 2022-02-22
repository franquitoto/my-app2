import React, {useContext} from 'react';
import { ProductContext } from '../../ProductContext';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './ProductCard.css';



const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const ProductCard = ({ data }) => {
    const [items,carrito, setItems, addCarrito,  removCarrito] = useContext(ProductContext);
    /*const productosAgregados = [];
    let bolean = false;
    const addCarrito = () =>{
        productosAgregados.forEach(e => {
            if(e.id == data.id){
                bolean = true;
            }
        });
        if(bolean == true){
            alert("No se pueden agregar elementos duplicados");
        }else{
            alert(`Agregaste al carrito ${data.name}`)
            productosAgregados.push(data)
            setCarrito(JSON.stringify(productosAgregados))
        }
        
       
    }*/
    
    const classes = useStyles();
    return (
        <div className='card'>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {data.name}
                    </Typography>
                    <Typography variant="h5" component="h2">
                       $ {data.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <button onClick={() => addCarrito(data)}>Agregar al carrito</button>
                </CardActions>
            </Card>
        </div>
    )
}

export default ProductCard