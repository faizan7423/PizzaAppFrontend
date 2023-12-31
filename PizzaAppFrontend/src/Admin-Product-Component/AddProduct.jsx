import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button, MenuItem, Select } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { axiosAddProduct } from '../Service-Components/ServiceProduct';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const myComponent = {
    width: '550px',
    height: '400px',
    overflowX: 'hidden',
    overflowY: 'hidden',
    top: '150px',
    left: '350px'
};
toast.configure();


const AddProduct = () => {

   
    const [product, setProduct] = useState({
        pizzaName: '',
            pizzaPrice:0,
            quantity:0,
            pizzaImage:'',
        category: null,
    });
    const [categories, setCategories] = useState([]);
    const history = useHistory();

    const onValueInput = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
        console.log(product);
    }

    useEffect(() => {
        // Fetch existing categories
        axios.get('http://localhost:8083/category/findAll').then((response) => {
            setCategories(response.data);
            console.log(categories);
        });
    }, []);

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

    const addProduct = async () => {
        await axiosAddProduct(product);
        notifysuccess("New Product: '" + product.pizzaName + "' added into the database successfully!!!")
        // alert("New Product: '"+product.productName+ "' added into the database successfully!!!")
        history.push('/productsall');
    }

    return (
        <div className='add-product-form' style={myComponent}>
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center"><b>Add Pizza Details</b></Typography>
                    <FormGroup>
                        <FormControl>
                            <InputLabel>Pizza Name</InputLabel>
                            <Input onChange={(e) => onValueInput(e)} name="pizzaName" value={product.pizzaName} />
                        </FormControl>
                        <FormControl variant="outlined" fullWidth>
                    <InputLabel>Pizza Category </InputLabel>
                    <Select
                        value={product.category ? product.category.categoryId : ''}
                        onChange={(e) => {
                            const selectedCategoryId = e.target.value;
                            const selectedCategory = categories.find((c) => c.categoryId === selectedCategoryId);
                            setProduct({ ...product, category: selectedCategory });
                        }}
                    >
                        <MenuItem value="">
                            <em>Select a Category</em>
                        </MenuItem>
                        {categories.map((category) => (
                            <MenuItem key={category.categoryId} value={category.categoryId}>
                                {category.categoryName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                        <FormControl>
                            <InputLabel>Pizza Image Url</InputLabel>
                            <Input onChange={(e) => onValueInput(e)} name="pizzaImage" value={product.pizzaImage} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Pizza Price</InputLabel>
                            <Input onChange={(e) => onValueInput(e)} name="pizzaPrice" value={product.pizzaPrice} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Pizza Quantity</InputLabel>
                            <Input onChange={(e) => onValueInput(e)} name="quantity" value={product.quantity} />
                        </FormControl>
                        <Box my={3}>
                            <Button variant="text" onClick={() => addProduct()} color="primary" align="center">Add Product</Button>
                            <Button component={Link} to={`/productsall`} variant="text" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )
}

export default AddProduct;