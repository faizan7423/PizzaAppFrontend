import React, { useState } from 'react';

import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';

import { useHistory } from 'react-router-dom';

import { axiosAddUser } from '../Service-Components/ServiceUser';

import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import './User.css';

import './UserRegister.css';
import App from '../Menu/Menu';

 

toast.configure();

 

const initialvalue = {

    username: "",

    password: "",

    email: "",

    role: "",

    name:"",

    number: "",

    address:""

}

const UserRegister = () => {

 

    const [user, setUser] = useState(initialvalue);

    const { username, password, email,role,name,number ,address} = user;

   

    const history = useHistory();

 

    const [errors, setErrors] = useState({

        username: "",

        password: "",

        email: "",

        role: "",

        name: "",

        number: "",

        address: "",

    });

 

    const onValueInput = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value });

        console.log(user);

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

 

    const validateForm = () => {

        const newErrors = {};

 

       

        if (!user.email.trim()) {

            newErrors.email = "Email is required";

        } else if (!/^\S+@\S+\.\S+$/.test(user.email)) {

            newErrors.email = "Email is not in the correct format";

        }

       

        if (!user.number.trim()) {

            newErrors.number = "Mobile Number is required";

        } else if (!/^\d+$/.test(user.number)) {

            newErrors.number = "Mobile Number should contain only numbers";

        }

       

 

        setErrors(newErrors);

        return Object.values(newErrors).every((error) => error === "");

    };

 

   

    const registerUser = async () => {

        if (validateForm()) {

        await axiosAddUser(user);

        notifysuccess('User Registered Succeffully');

        // alert('User Registered Succeffully')

        history.push('/user');

    }

};

    return (

        <div className='register-form'>

            <Container maxWidth="sm">

                <Box my={5}>

                    <Typography variant="h5" align="center">Customer Registration Form</Typography>

                    <FormGroup>

                    <FormControl>

                            <InputLabel>Customer userName</InputLabel>

                            <Input onChange={(e) => onValueInput(e)} name="username" value={username} />

                            <div className="error">{errors.username}</div>

                        </FormControl>

                        <FormControl>

                            <InputLabel>Customer Email</InputLabel>

                            <Input onChange={(e) => onValueInput(e)} name="email" value={email} />

                            <div className="error">{errors.email}</div>

                        </FormControl>

                        <FormControl>

                            <InputLabel>Password</InputLabel>

                            <Input onChange={(e) => onValueInput(e)} name="password" value={password} />

                            <div className="error">{errors.password}</div>

                        </FormControl>

                        <FormControl>

                            <InputLabel>Role</InputLabel>

                            <Input onChange={(e) => onValueInput(e)} name="role" value={role} />

                        </FormControl>

                        <FormControl>

                            <InputLabel>Name</InputLabel>

                            <Input onChange={(e) => onValueInput(e)} name="name" value={name} />

                        </FormControl>

                        <FormControl>

                            <InputLabel>Mobile Number</InputLabel>

                            <Input onChange={(e) => onValueInput(e)} name="number" value={number} />

                            <div className="error">{errors.number}</div>

                        </FormControl>

                        <FormControl>

                            <InputLabel>Address</InputLabel>

                            <Input onChange={(e) => onValueInput(e)} name="address" value={address} />

                        </FormControl>

                        <Box my={3}>

                            <Button variant="text" onClick={() => registerUser()} color="primary" align="center">Register</Button>

                            <Button onClick={() => history.push("/user")} variant="text" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>

                            <br></br><br></br>

                        </Box>

                    </FormGroup>

                </Box>

            </Container>
            <App/>

        </div>

    )

}

 

export default UserRegister;