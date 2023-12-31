import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button, MenuItem, Select } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { axiosGetById, axiosSearchProducts, axiosUpdateProduct } from '../Service-Components/ServiceProduct';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { axiosAllCategories } from '../Service-Components/ServiceCategory';

const myComponent = {
    width: '550px',
    height: '400px',
    overflowX: 'hidden',
    overflowY: 'hidden',
    top: '150px',
    left: '350px'
};

toast.configure();



const UpdateProduct = () => {

    // const [product, setProduct] = useState(initialvalue);
    // const { productName, productCategory, productImageUrl, productPrice, productStock } = product;
    const [product, setProduct] = useState({
        pizzaName: '',
            pizzaPrice:0,
            quantity:0,
            pizzaImage:'',
        category: null,
    });
    const [category, setCategories] = useState([]);
    const { id } = useParams();
    const onValueInput = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
        console.log(product);
    }

    useEffect(() => {
       
        loadProductdeatils();
        
    }, [])

    const loadProductdeatils = async () => {
        const response = await axiosGetById(id);
        setProduct(response.data)
        const responsecat= await axiosAllCategories();
        setCategories(responsecat.data)
    }

    const history = useHistory();


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

    const UpdateProductDetails = async () => {
        await axiosUpdateProduct(id, product);
        notifysuccess("The details of '" + product.pizzaName + "' has been updated successfully!!!")
        history.push('/productsall');
    }

    return (
        <div className='add-product-form' style={myComponent}>
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center"><b>Update Pizza Details</b></Typography>
                <FormGroup>
                    <FormControl>
                        <InputLabel>Pizza Name</InputLabel>
                        <Input onChange={(e) => onValueInput(e)} name="pizzaName" value={product.pizzaName} />
                    </FormControl>
                    <FormControl variant="outlined" fullWidth>
                <InputLabel>Pizza Category</InputLabel>
                <Select
                    value={product.category ? product.category.categoryId : ''}
                    onChange={(e) => {
                        const selectedCategoryId = e.target.value;
                        const selectedCategory = category.find((c) => c.categoryId === selectedCategoryId);
                        setProduct({ ...product, category: selectedCategory });
                    }}
                >
                    <MenuItem value="">
                        <em>Select a Category</em>
                    </MenuItem>
                    {category.map((cat) => (
                        <MenuItem key={cat.categoryId} value={cat.categoryId}>
                            {cat.categoryName}
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
                        <Button variant="text" onClick={() => UpdateProductDetails()} color="primary" align="center">Update</Button>
                        <Button component={Link} to={`/productsall`} variant="text" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                    </Box>
                </FormGroup>
            </Box>
        </Container>
    </div>
    )
}

export default UpdateProduct;