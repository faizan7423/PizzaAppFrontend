import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import AdminNavbar from './AdminNavbar';
import AdminRegister from './AdminRegister';
import AllProducts from '../Admin-Product-Component/AllProducts';
import AllCategories from '../Category-Components/AllCategories';
import AddCategory from '../Category-Components/AddCategory';
import AddProduct from '../Admin-Product-Component/AddProduct';
import AdminLogOut from './AdminLogOut';
import UpdateProduct from '../Admin-Product-Component/UpdateProduct';
import AllUsers from '../Admin-User-Component/AllUsers';
import UpdateUser from '../Admin-User-Component/UpdateUser';
import AddUser from '../Admin-User-Component/AddUser';
import UpdateCategory from '../Category-Components/UpdateCategory';

const AdminPage = () => {
  return (
    <Router>
      <AdminNavbar />
      <Route path="/admin" component={AdminLogin} />
      <Route path="/adduser" component={AddUser} />
      <Route path="/adminregister" component={AdminRegister} />
      <Route path="/adminnavbar" component={AdminNavbar} />
      <Route path="/productsall" component={AllProducts} />
      <Route path="/allcategories" component={AllCategories} />
      <Route path="/addcategory" component={AddCategory} />
      <Route path="/addproduct" component={AddProduct} />
      <Route path="/alogout" component={AdminLogOut} />
      <Route path="/allusers" component={AllUsers} />
      <Route path="/editproduct/:id" component={UpdateProduct} />
      <Route path="/edituser/:id" component={UpdateUser} />
      <Route path="/editcategory/:id" component={UpdateCategory} />
    </Router>
  );
}

export default AdminPage;
