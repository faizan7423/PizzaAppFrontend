import '../App.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, makeStyles, Menu } from '@material-ui/core';
import Slid from '../Slider/Slidereffect';
import TheFooter from '../Footer/footer';
import './Mrin.css';
import Toppings from '../Toppings/Toppings';
import App from '../Menu/Menu';

// const styling = makeStyles(
//     {
//         home: {
//             color: '#ffc107',
//             textDecoration: 'none'
//         },
//         user: {
//             marginLeft: '40px',
//             textDecoration: 'none',
//             color: 'white'
//         },
//         admin: {
//             marginLeft: '800px',
//             textDecoration: 'none',
//             color: 'white'
//         }
//     }
// )

const HomeNavbar = () => {
    // const styles = styling();
    return (
        <div>
        <AppBar color='secondary' >
            
        <Toolbar variant="dense">
            <Typography className='mrinbox' variant="h4" color="inherit" component="div">
                <strong className='mrin'> Pizza</strong>
            </Typography>
          
        </Toolbar>
        
    </AppBar>
    <App/>
    <Slid/>
    <Toppings/>
    <TheFooter/>

    </div>
    
    );
}

export default HomeNavbar;