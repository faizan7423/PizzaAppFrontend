import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Card, CardContent, CardMedia, Typography,CardActions,Button } from '@mui/material';
import { axiosDeleteProduct, axiosAllProducts } from '../Service-Components/ServiceProduct';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
const AllProducts = () => {

   
    const [product, setProduct] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        const response = await axiosAllProducts();
        console.log(response);
        setProduct(response.data);
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

    const deleteProduct = async (id) => {
        await axiosDeleteProduct(id);
        notifywarning("The Product has been deleted successfully!!!")
        // alert("The Product has been deleted successfully!!!")
        getProducts();
    }
    // Returns the HTML file for the respective method and the form for displaying the product details
    return (
     <div >
      <div className="add-productbtn">
        <Button   variant="contained" color="primary" align="center" component={Link} to={`/addproduct`}>Add Product</Button>
        </div>
        
        <div className='cardcontainer'>
         
        <Container >
       
        <Grid container spacing={3} >
          {product.map((data) => (
            <Grid item key={product.pizzaId}>
              <Card>
                {/* <div className="border-div"> */}
                <div className="image-container">
      <div className="image-wrapper">
                <CardMedia className="extraordinary-hover"
                  component="img"
                  alt={product.pizzaName}
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
              <Button component={Link} to={`/editproduct/${data.pizzaId}`} variant="text" color="primary" size="small">Edit</Button>
                             <Button onClick={() => deleteProduct(data.pizzaId)} style={{ marginLeft: '80px' }} variant="text" color="secondary" size="small">Delete</Button>
                             </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      </div>
      </div>
    )

}

export default AllProducts;