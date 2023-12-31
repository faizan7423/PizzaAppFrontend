import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button, MenuItem, Select } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { axiosGetById, axiosGetBycategoryId, axiosSearchProducts, axiosUpdateProduct } from '../Service-Components/ServiceProduct';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { axiosAllCategories, axiosCategoryGetById, axiosUpdateCategory } from '../Service-Components/ServiceCategory';
import { axiosAllUsers, axiosGetUserById, axiosUpdateUser } from '../Service-Components/ServiceUser';

const myComponent = {
    width: '550px',
    height: '400px',
    overflowX: 'hidden',
    overflowY: 'hidden',
    top: '150px',
    left: '350px'
};

toast.configure();


const initialvalue = {
   categoryName: "",
   
}
const UpdateCategory = () => {

    // const [product, setProduct] = useState(initialvalue);
    // const { productName, productCategory, productImageUrl, productPrice, productStock } = product;
    const [category, setCategory] = useState(initialvalue);
    const { categoryName } = category;
    const { id } = useParams();
    const onValueInput = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value });
        console.log(category);
    }

    useEffect(() => {
       
        loadAllCategories();
        
    }, [])

    const loadAllCategories = async () => {
        const response = await axiosCategoryGetById(id);
        setCategory(response.data)
        console.log(category);
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

    const UpdateCategory = async () => {
        await axiosUpdateCategory(id, category);
        notifysuccess("The details of '" + categoryName + "' has been updated successfully!!!")
        history.push('/allcategories');
    }

    return (
        <div className='add-product-form' style={myComponent}>
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center"><b>Update Category Details</b></Typography>
                <FormGroup>
                    <FormControl>
                        <InputLabel>Category Name</InputLabel>
                        <Input onChange={(e) => onValueInput(e)} name="categoryName" value={categoryName} />
                    </FormControl>
                    
                   
                    <Box my={3}>
                        <Button variant="text" onClick={() => UpdateCategory()} color="primary" align="center">Update</Button>
                        <Button component={Link} to={`/allcategories`} variant="text" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                    </Box>
                </FormGroup>
            </Box>
        </Container>
    </div>
    )
}

export default UpdateCategory;