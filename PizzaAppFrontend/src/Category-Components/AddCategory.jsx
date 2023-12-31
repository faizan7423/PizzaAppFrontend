import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { axiosAddCategory } from '../Service-Components/ServiceCategory';

const initialvalue = {
    categoryName: ""
  
}
const AddCategory = () => {

    const [category, setCategory] = useState(initialvalue);
    const { categoryName} = category;

    const history = useHistory();

    const onValueInput = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value });
        console.log(category);
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

    const AddCat = async () => {

        await axiosAddCategory(category);
        notifysuccess('Category Added Succeffully')
        history.push('/Allcategories');
       // alert('Admin Registered Succeffully')

    }
    return (
        <div className='add-category'>
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center"><b>Add Category</b></Typography>
                    <FormGroup>
                        <FormControl>
                            <InputLabel>Category Name</InputLabel>
                            <Input onChange={(e) => onValueInput(e)} name="categoryName" value={categoryName} />
                        </FormControl>
                        
                        <Box my={3}>
                            <Button variant="text" onClick={() => AddCat()} color="primary" align="center">Add</Button>
                            <Button onClick={() => history.push("/allcategories")} variant="text" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                            <br></br><br></br>
                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )
}

export default AddCategory;