import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserNavbar from './UserNavbar';
import UserRegister from './UserRegister';
import UserLogin from './UserLogin';
import AllProductCust from '../Customer-Product-Component/AllProductCust';
import DisplayCart from '../Customer-Product-Component/DisplayCart';
import Orders from './Orders';
import OrderedItems from './OrderedItems';
import UserLogOut from './UserLogOut';

import 'bootstrap/dist/css/bootstrap.min.css';

const UserPage = () => {
  return (
    <Router>
      <UserNavbar />
      <Route exact path="/userlogin" component={UserLogin} />
      <Route exact path="/userregister" component={UserRegister} />
      <Route exact path="/usernavbar" component={UserNavbar} />
      <Route exact path="/viewproducts" component={AllProductCust} />
      <Route exact path="/cart" component={DisplayCart} />
      <Route exact path="/orders" component={Orders} />
      <Route exact path="/ulogout" component={UserLogOut} />
      <Route exact path="/orders/:id" component={OrderedItems} />
    </Router>
  );
}

export default UserPage;
