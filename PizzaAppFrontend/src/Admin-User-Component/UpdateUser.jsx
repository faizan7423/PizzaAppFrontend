// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button, MenuItem, Select } from '@material-ui/core';
// import { useHistory, useParams } from 'react-router-dom';
// import { axiosGetById, axiosSearchProducts, axiosUpdateProduct } from '../Service-Components/ServiceProduct';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { axiosAllCategories } from '../Service-Components/ServiceCategory';
// import { axiosAllUsers, axiosGetUserById, axiosUpdateUser } from '../Service-Components/ServiceUser';

// const myComponent = {
//     width: '550px',
//     height: '400px',
//     overflowX: 'hidden',
//     overflowY: 'hidden',
//     top: '150px',
//     left: '350px'
// };

// toast.configure();


// const initialvalue = {
//     username: "",
//     email: "",
//     address: "",
//     number: 0,
//     role: ""
// }
// const UpdateUser = () => {

//     // const [product, setProduct] = useState(initialvalue);
//     // const { productName, productCategory, productImageUrl, productPrice, productStock } = product;
//     const [user, setUser] = useState(initialvalue);
//     const { username, email, address, number, role } = user;
//     const { id } = useParams();
//     const onValueInput = (e) => {
//         setUser({ ...user, [e.target.name]: e.target.value });
//         console.log(user);
//     }

//     useEffect(() => {
       
//         loadAllUsers();
        
//     }, [])

//     const loadAllUsers = async () => {
//         const response = await axiosGetUserById(id);
//         setUser(response.data)
//     }

//     const history = useHistory();


//     const notifysuccess = (msg) => {
//         toast.success(msg, {
//             position: 'top-center',
//             autoClose: 2000,
//             hideProgressBar: true,
//             closeOnClick: false,
//             pauseOnHover: true,
//             draggable: false,
//             progress: undefined,
//             theme: 'colored'
//         });
//     }

//     const UpdateUserDetails = async () => {
//         await axiosUpdateUser(id, user);
//         notifysuccess("The details of '" + username + "' has been updated successfully!!!")
//         history.push('/allusers');
//     }

//     return (
//         <div className='add-product-form' style={myComponent}>
//         <Container maxWidth="sm">
//             <Box my={5}>
//                 <Typography variant="h5" align="center"><b>Update User Details</b></Typography>
//                 <FormGroup>
//                     <FormControl>
//                         <InputLabel>User Name</InputLabel>
//                         <Input onChange={(e) => onValueInput(e)} name="username" value={username} />
//                     </FormControl>
                    
//                     <FormControl>
//                         <InputLabel>Email</InputLabel>
//                         <Input onChange={(e) => onValueInput(e)} name="email" value={email} />
//                     </FormControl>
//                     <FormControl>
//                         <InputLabel>Number</InputLabel>
//                         <Input onChange={(e) => onValueInput(e)} name="number" value={number} />
//                     </FormControl>
//                     <FormControl>
//                         <InputLabel>Role</InputLabel>
//                         <Input onChange={(e) => onValueInput(e)} name="role" value={role} />
//                     </FormControl>
//                     <FormControl>
//                         <InputLabel>Address</InputLabel>
//                         <Input onChange={(e) => onValueInput(e)} name="address" value={address} />
//                     </FormControl>
//                     <Box my={3}>
//                         <Button variant="text" onClick={() => UpdateUserDetails()} color="primary" align="center">Update</Button>
//                         <Button component={Link} to={`/allusers`} variant="text" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
//                     </Box>
//                 </FormGroup>
//             </Box>
//         </Container>
//     </div>
//     )
// }

// export default UpdateUser;