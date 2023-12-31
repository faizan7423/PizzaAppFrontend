import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { axiosAddAdmin } from '../Service-Components/ServiceAdmin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from '../Menu/Menu';

toast.configure();

const initialvalue = {
    username: "",
    password: "",
    email: "",
    role: "admin", 
    name: "",
    number: "",
    address: ""
};

const AdminRegister = () => {
    const [admin, setAdmin] = useState(initialvalue);
    const { username, password, email, role, name, number, address } = admin;
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
        const { name, value } = e.target;
        setAdmin({ ...admin, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!admin.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(admin.email)) {
            newErrors.email = "Email is not in the correct format";
        }

        if (!admin.number.trim()) {
            newErrors.number = "Mobile Number is required";
        } else if (!/^\d{10}$/.test(admin.number)) {
            newErrors.number = "Mobile Number should be a 10-digit number";
        }

        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === "");
    };

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
    };

    const registerAdmin = async () => {
        if (validateForm()) {
            await axiosAddAdmin(admin);
            notifysuccess('Admin Registered Successfully');
            history.push('/admin');
        }
    };

    return (
        <div className='register-form'>
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center">Admin Registration Form</Typography>
                    <FormGroup>
                        <FormControl>
                            <InputLabel>Moderator userName</InputLabel>
                            <Input onChange={onValueInput} name="username" value={username} />
                           
                        </FormControl>
                        <FormControl>
                            <InputLabel>Moderator Email</InputLabel>
                            <Input onChange={onValueInput} name="email" value={email} />
                            <div className="error">{errors.email}</div>
                        </FormControl>
                        <FormControl>
                            <InputLabel>Moderator Password</InputLabel>
                            <Input onChange={onValueInput} name="password" value={password} />
                            
                        </FormControl>
                        <FormControl>
                            <InputLabel>Role</InputLabel>
                            <Input onChange={onValueInput} name="role" value={role} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Name</InputLabel>
                            <Input onChange={onValueInput} name="name" value={name} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Number</InputLabel>
                            <Input onChange={onValueInput} name="number" value={number} />
                            <div className="error">{errors.number}</div>
                        </FormControl>
                        <FormControl>
                            <InputLabel>Moderator address</InputLabel>
                            <Input onChange={onValueInput} name="address" value={address} />
                        </FormControl>
                        <Box my={3}>
                            <Button
                                variant="text"
                                onClick={registerAdmin}
                                color="primary"
                                align="center">  Register</Button>
                            <Button
                                onClick={() => history.push("/admin")}
                                variant="text"
                                color="secondary"
                                align="center"
                                style={{ margin: '0px 20px' }}
                            >
                                Cancel
                            </Button>
                            <br></br><br></br>
                        </Box>
                    </FormGroup>
                </Box>
            </Container>
            <App/>
        </div>
    );
};

export default AdminRegister;
