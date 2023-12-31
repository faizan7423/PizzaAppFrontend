import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper } from '@mui/material';
import {  Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { axiosAllCategories } from '../Service-Components/ServiceCategory';
import { axiosGetOrdersByCustId } from '../Service-Components/ServiceOrder';







// Display all Users
const Orders = () => {



   

    const [order, setOrder] = useState([]);
    const [orderCart, setOrderCart] = useState([]);
    useEffect(() => {
        getOrder();
    }, [])

    const getOrder = async () => {
        let custid=sessionStorage.getItem('id');
        const response = await axiosGetOrdersByCustId(custid);
        console.log(response);
        setOrder(response.data);
        setOrderCart(response.data.cart)
    }
    
    // let total = 0;
    // for (let i = 0; i < order.length; i++) {
    //     total = total + order[i].totalPrice;
    // }

    // Returns the HTML file for the respective method and the form for displaying the product details
    return (

        
        
<div>

            <div className='allOrders-tbl'>
            

<TableContainer component={Paper} >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell><b>Order ID</b></TableCell>
            <TableCell><b>Order Date</b></TableCell>
            <TableCell><b>Order Status</b></TableCell>
            <TableCell><b>TotalPrice</b></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {order.map((data) => (
            <TableRow key={data.orderId}>
              <TableCell><b>{data.orderId}</b></TableCell>
              <TableCell><b>{data.date}</b></TableCell>
              <TableCell><b style={{ color: 'green' }}>{data.status}</b></TableCell>
              <TableCell><b>{data.cart.totalPrice}</b></TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
        </div>
       
        
        
    )

}

export default Orders;