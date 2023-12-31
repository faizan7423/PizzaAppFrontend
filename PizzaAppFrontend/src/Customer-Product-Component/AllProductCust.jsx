import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {  Typography, FormControl, InputLabel, Input, Box, FormGroup, MenuItem, Select } from '@material-ui/core';
import { Container, Grid, Card, CardContent, CardMedia,CardActions,Button } from '@mui/material';
import {  axiosAllProducts, axiosGetById, axiosGetBycategoryId } from '../Service-Components/ServiceProduct';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { axiosAddToCart } from '../Service-Components/ServiceCart';
import axios from 'axios';
import './DisplayCart.css';


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
const AllProductCust = () => {

    const history = useHistory();
    const [product, setProduct] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getProducts();
        axios.get('http://localhost:8083/category/findAll').then((response) => {
            setCategories(response.data);
            console.log(categories);
        });
    }, [])

    const getProducts = async () => {
        const response = await axiosAllProducts();
        console.log(response);
        setProduct(response.data);
    }
    const DisplayCategoryProducts = async (id) => {
        if(id !== "")
        {
            console.log(id);
            const response = await axiosGetBycategoryId(id);
        console.log(response);
        setProduct(response.data);
        }
        if(id=== "")
        {
            console.log(id);
            getProducts();
        }

        
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

    // Returns the HTML file for the respective method and the form for displaying the product details
    return (
     <div >       
        <div className="drop-cat mrincat">
        <InputLabel ><center>Pizza Category</center></InputLabel>
                    <center className='mrincenter'><Select
                        value={categories.categoryName}
                        onChange={(e) => {
                             const selectedCategoryId = e.target.value;
                            DisplayCategoryProducts(selectedCategoryId);
                            
                        }}
                    className="drop">
                        <MenuItem value="">
                            <em>All</em>
                        </MenuItem>
                        {categories.map((category) => (
                            <MenuItem key={category.categoryId} value={category.categoryId}>
                                {category.categoryName}
                            </MenuItem>
                        ))}
                    </Select></center>
                    </div> 
        <div className='cardcontainer'>
        
        <Container >
       
        <Grid container spacing={3} >
          {product.map((data) => (
            <Grid item key={data.pizzaId} xs={12} sm={6} md={4} lg={3}>
              <Card>
                {/* <div className="border-div"> */}
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
                <Button onClick={() => addToCart(data.pizzaId)} style={{ marginLeft: '80px' }} variant="text" color="primary" size="small">Add To Cart</Button>
                            
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

export default AllProductCust;