
import './App.css';
import Aboutus from './pages/Aboutus/Aboutus';
import ManageServices from './pages/ManageService/ManageService'
import Booking from './pages/Booking/Booking'
import Contactus from './pages/Contactus/Contactus';
import Footer from './pages/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import AuthProvider from './pages/Context/AuthProvider';
import Login from './pages/Login/Login';
import PrivateRoute from './pages/PrivateRoute/privateRoute';
import Home from './pages/Home/Home';
import Addservices from './pages/Addservices/Addservices';

function App() {
  return (
    <div className="App">

      {/* <BrowserRouter>
        <Aboutus></Aboutus>
        <Banner></Banner>
        <Contactus></Contactus>
        <Footer></Footer>
        <Gellery></Gellery>

      </BrowserRouter> */}

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
              <Login></Login>
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
            <Route path="/addservices">
              <Addservices></Addservices>
            </Route>
            <Route path="/manageservices">
              <ManageServices></ManageServices>
            </Route>
          </Switch>
          {/* <Footer /> */}
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
