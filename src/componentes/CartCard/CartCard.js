import React, {useContext} from 'react';
import { ProductContext } from '../../ProductContext';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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

const CartCard = ({data}) => {
    const [items,carrito, setItems, addCarrito,  removCarrito] = useContext(ProductContext);

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

   const removCart = () =>{
       console.log(data.id)
       
   }
    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {data.name}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        $ {data.price}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Cant: {data.selection}
                    </Typography>
                </CardContent>
                <CardActions>
                    <button onClick={() => removCarrito(data)}>Quitar del carrito</button>
                </CardActions>
            </Card>
        </div>
    )
}

export default CartCard