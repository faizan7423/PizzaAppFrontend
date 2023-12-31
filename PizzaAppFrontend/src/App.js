import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminLogin from './Admin-Components/AdminLogin';
import UserLogin from './User-Components/UserLogin';
import AdminPage from './Admin-Components/AdminPage';
import UserPage from './User-Components/UserPage';
import UserRegister from './User-Components/UserRegister';
import AdminRegister from './Admin-Components/AdminRegister';

import Home from './MainPage-Components/Home';
import Slid from './Slider/Slidereffect';
import HomeNavbar from './MainPage-Components/HomeNavbar';

function App() {
 return(
  <Router>
    <Switch>
        <Route exact path = "/" component = {HomeNavbar}></Route>
        <Route exact path = "/user" component = {UserLogin}></Route>
        <Route exact path = "/admin" component = {AdminLogin}></Route>
        <Route exact path = "/adminpage" component = {AdminPage}></Route>
        <Route exact path = "/userpage" component = {UserPage}></Route>
        <Route exact path = "/userregister" component = {UserRegister}></Route>
        <Route exact path = "/adminregister" component = {AdminRegister}></Route>
        <Route exact path = "/call" component = {Slid}></Route>
        <Route path="/nav" component={Home} exact />
    </Switch>
  </Router>
 );
}

export default App;
