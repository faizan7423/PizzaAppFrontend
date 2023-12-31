import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { axiosAddUser } from '../Service-Components/ServiceUser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const initialvalue = {
    username: "",
    password: "",
    email: "",
    role: "customer", // Set role by default as "customer"
    number: "",
    address: ""
};

const AddUser = () => {
    const [user, setUser] = useState(initialvalue);
    const { username, password, email, role, number, address } = user;
    const history = useHistory();

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

    const AddUser = async () => {
        // Validate email and number
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const numberPattern = /^\d{10}$/;

        if (!email.match(emailPattern)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!number.match(numberPattern)) {
            alert('Please enter a valid 10-digit mobile number.');
            return;
        }

        await axiosAddUser(user);
        notifysuccess('User Registered Successfully');
        history.push('/allusers');
    }

    return (
        <div className='register-form'>
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center">Add User Form</Typography>
                    <FormGroup>
                        <FormControl>
                            <InputLabel>Customer Name</InputLabel>
                            <Input onChange={(e) => onValueInput(e)} name="username" value={username} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Customer Email</InputLabel>
                            <Input onChange={(e) => onValueInput(e)} name="email" value={email} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Password</InputLabel>
                            <Input onChange={(e) => onValueInput(e)} name="password" value={password} />
                        </FormControl>
                        
                        <FormControl>
                            <InputLabel>Mobile Number</InputLabel>
                            <Input onChange={(e) => onValueInput(e)} name="number" value={number} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Address</InputLabel>
                            <Input onChange={(e) => onValueInput(e)} name="address" value={address} />
                        </FormControl>
                        <Box my={3}>
                            <Button variant="text" onClick={() => AddUser()} color="primary" align="center">Register</Button>
                            <Button onClick={() => history.push("/allusers")} variant="text" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                            <br></br><br></br>
                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )
}

export default AddUser;
