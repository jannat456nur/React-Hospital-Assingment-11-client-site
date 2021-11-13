
import './App.css';
import Aboutus from './pages/Aboutus/Aboutus';
import ManageServices from './pages/ManageService/ManageService'
import Booking from './pages/Booking/Booking'
import Contactus from './pages/Contactus/Contactus';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import AuthProvider from './pages/Context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/privateRoute';
import Home from './pages/Home/Home';
import Addservices from './pages/Addservices/Addservices';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              {/* <Signin></Signin> */}
              <Signup></Signup>
            </Route>
            <Route path="/signin">
              <Signup></Signup>
            </Route>
            <PrivateRoute path="/aboutus">
              <Aboutus></Aboutus>
            </PrivateRoute>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/contactus">
              <Contactus></Contactus>
            </Route>
            <PrivateRoute path="/addservices">
              <Addservices></Addservices>
            </PrivateRoute>
            <PrivateRoute path="/manageservices">
              <ManageServices></ManageServices>
            </PrivateRoute>
          </Switch>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
