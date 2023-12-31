import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Card, CardContent, CardMedia, Typography,CardActions,Button } from '@mui/material';
import { axiosDeleteProduct, axiosAllProducts } from '../Service-Components/ServiceProduct';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { axiosGetItemsOrderId } from '../Service-Components/ServiceOrder';
import { useHistory } from 'react-router-dom';



toast.configure();

// const styling = makeStyles({

//     buttonadd: {
//         fontSize: '14px',
//         screenLeft: '120px',
//         marginTop: '10px',
//         marginBottom: '10px'
//     }
// })

// Display all Users
const OrderedItems = () => {

   
    const [product, setProduct] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])
    const history=useHistory();
    const { id } = useParams();
    const getProducts = async () => {
        const response = await axiosGetItemsOrderId(id);
        console.log(response);
        setProduct(response.data.cart.pizzas);
    }

    const notifywarning = (msg) => {
        toast.warning(msg, {
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

    const GoBack = async () => {

        history.push("/orders")
    }
    // Returns the HTML file for the respective method and the form for displaying the product details
    return (
     <div >
      <div >
        <Button className='back-btn'   variant="contained" color="primary" align="center" onClick={() => GoBack()}>Back</Button>
        </div>
        
        <div className='cardcontainer'>
         
        <Container >
       
        <Grid container spacing={3} >
          {Array.isArray(product) && product.length > 0 ? (
            product.map((data) => (
            <Grid item key={data.pizzaId} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <div className="image-container">
              <div className="image-wrapper">
                <CardMedia className="extraordinary-hover"
                  component="img"
                  alt={data.pizzaName}
                  height="200"
                  image={data.pizzaImage}
                />
                 <div className="hover-effect"></div>
                </div>
                </div>
                <CardContent>
                  <Typography variant="h6">{data.pizzaName}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Price: {data.pizzaPrice}
                  </Typography>
                </CardContent>
                <CardActions>
              
                             </CardActions>
              </Card>
            </Grid>
          )))
          : 
          (
              <p>Your cart is empty.</p>
          )
          }
        </Grid>
      </Container>
      </div>
      </div>
    )

}

export default OrderedItems;