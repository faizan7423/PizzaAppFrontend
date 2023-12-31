import React, { useState } from 'react'
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Admin.css';
import App from '../Menu/Menu';

toast.configure();

const initialvalue = {
    email: "",
    password: ""
}

const AdminLogin = () => {

    const [admindetails, setAdmindetails] = useState(initialvalue)
    const history = useHistory();
    const onValueInput = (e) => {
        setAdmindetails({ ...admindetails, [e.target.name]: e.target.value });
        console.log(admindetails);
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

    const notifyerror = (msg) => {
        toast.error(msg, {
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

    const adminCredentialsValidation = async (data) => {
        let retriveCredentials = await fetch("http://localhost:8083/admin/login")
        let validation = await retriveCredentials.json();
        let flag = false;
        console.log(validation);

        for (let i = 0; i < validation.length; i++) {
            if (validation[i].email === data.email && validation[i].password === data.password) {
                flag = true;
                sessionStorage.setItem("admin", JSON.stringify(validation[i]));
                // sessionStorage.setItem("category", 'null');
            }
        }
        if (flag === true) {
            notifysuccess('Admin Login Successfull !!!!');
            // alert("Admin Login Successfull !!!!") 
            history.push("/adminpage")
        }
        else {
            notifyerror("Admin Credentials are Incorrect !!!!!!")
            // alert("Admin Credentials are Incorrect !!!!!!")
        }
    }
    return (
        <div className='login-form'>
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center">Moderator Login</Typography>
                    <FormGroup>
                        <FormControl>
                            <InputLabel>Moderator Email</InputLabel>
                            <Input onChange={(e) => onValueInput(e)} name="email" value={admindetails.email} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Moderator Password</InputLabel>
                            <Input onChange={(e) => onValueInput(e)} name="password" value={admindetails.password} type="password" />
                        </FormControl>
                        <Box my={3}>
                            <Button variant="contained" onClick={() => adminCredentialsValidation(admindetails)} color="primary" align="center">Login</Button>
                            <Button onClick={() => history.push("/")} variant="text" color="secondary" align="center" style={{ margin: '0px 20px' }}>Back</Button>
                            <br></br><br></br>
                            <span className='theregister'>Register if you are a new admin</span> <Button variant="contained" onClick={() => history.push("/adminregister")} style={{ marginLeft: '30px' }} color="secondary" align="center">Register</Button>
                        </Box>
                    </FormGroup>
                </Box>
            </Container>
            <App/>
        </div>
    )
}

export default AdminLogin;