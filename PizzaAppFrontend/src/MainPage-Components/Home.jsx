import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserLogin from '../User-Components/UserLogin';
import AdminLogin from '../Admin-Components/AdminLogin';
import AdminPage from '../Admin-Components/AdminPage';
import UserPage from '../User-Components/UserPage';
import UserRegister from '../User-Components/UserRegister';
import AdminRegister from '../Admin-Components/AdminRegister';
import HomeNavbar from './HomeNavbar';

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <Router>
      <Route path="/user" component={UserLogin} />
      <Route path="/admin" component={AdminLogin} />
      <Route path="/adminpage" component={AdminPage} />
      <Route path="/userpage" component={UserPage} />
      <Route path="/userregister" component={UserRegister} />
      <Route path="/adminregister" component={AdminRegister} />
    </Router>
  );
}

export default Home;
