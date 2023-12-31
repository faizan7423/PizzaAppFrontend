import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Grid, Card, CardContent, CardMedia, Typography,CardActions,Button } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { axiosAddToCart, axiosDeleteProductCart } from '../Service-Components/ServiceCart';
import { axiosGetCart } from '../Service-Components/ServiceUser';
import { axiosPlaceOrder } from '../Service-Components/ServiceOrder';
import './DisplayCart.css';



toast.configure();


const DisplayCart = () => {

    const [products, setProducts] = useState([]);
    const history = useHistory();
    const [cart, setCart] = useState({});
    const [cart1, setCart1] = useState({});
    
    useEffect(() => {
        getCarts();
    }, [])

    const getCarts = async () => {

        let custid=sessionStorage.getItem('id');
        const response = await axiosGetCart(custid);
        console.log(response);
        setCart(response.data.pizzas);
        setCart1(response.data)
        console.log(cart);
        
        
        
          
        
        
        
    }

    const notifysuccess = (msg) => {
        toast.success(msg, {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: 'colored'
        });
    }
    const addToCart=async(id)=>{
        let custid=sessionStorage.getItem('id');
        axiosAddToCart(custid,id);
        notifysuccess("Product added to cart successfully")
        history.push('/viewproducts');


    }

    const deleteProductCart=async(id)=>{
        let custid=sessionStorage.getItem('id');
        axiosDeleteProductCart(custid,id);
        history.push('/viewproducts');


    }
    const placeOrder=async()=>{
        let custid=sessionStorage.getItem('id');
        await axiosPlaceOrder(custid);
        history.push('/viewproducts');


    }

    
    return (
     <div >    
         <div className='total-display'><b>Total Price:{cart1.totalPrice} </b></div>
      {
        cart1.totalPrice>0? <Button className='place' onClick={() => placeOrder()} variant="contained" color="secondary" size="small"><strong>Place Order</strong></Button>:""
        
    }    
        <div className='cardcontainer1'>
       
        <Container >
       
        <Grid container spacing={3} >
          { Array.isArray(cart) && cart.length > 0 ? (
          cart.map((product) => (
            <Grid item key={product.pizzaId} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <div className="image-container">
                <div className="image-wrapper">
                <CardMedia className="extraordinary-hover"
                  component="img"
                  alt={product.pizzaName}
                  height="200"
                  image={product.pizzaImage}
                />
                 <div className="hover-effect"></div>
                </div>
                </div>
                <CardContent>
                  <Typography variant="h6">{product.pizzaName}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Price: {product.pizzaPrice}
                  </Typography>
                </CardContent>
                <Button onClick={() => addToCart(product.pizzaId)} variant="contained" color="primary" size="small" ><strong>+</strong></Button>
                <Button className='dec' onClick={() => deleteProductCart(product.pizzaId)} variant="contained" color="secondary" size="small"><strong>-</strong></Button>                 
               
              </Card>
             
            </Grid>
             
            
            )))
            : 
            (
             <div className='cart-em'><h4>Your cart is empty.</h4> </div>
            )
            }
             
        </Grid>
      </Container>
      <u/>
      
     
      </div>
      
      
      </div>
      
    )

}

export default DisplayCart;