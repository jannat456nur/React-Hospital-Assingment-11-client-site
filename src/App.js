import logo from './logo.svg';
import './App.css';
import Aboutus from './pages/Aboutus/Aboutus';
import Banner from './pages/Banner/Banner';
import Contactus from './pages/Contactus/Contactus';
import Footer from './pages/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Gellery from './pages/Gellary/Gellary';
import Header from './pages/Header/Header';
import AuthProvider from './pages/Context/AuthProvider';
import Services from './pages/Services/Services';
import Testimonial from './pages/Testimonial/Testimonial';
import Login from './pages/Login/Login';
import PrivateRoute from './pages/PrivateRoute/privateRoute';

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
          <Switch>


            <Route exact path="/">
              <Header></Header>
              <Banner></Banner>
              <Services></Services>
              <Gellery></Gellery>
              <Testimonial></Testimonial>
              <Footer></Footer>
            </Route>
            <Route path="/home">
              <Header></Header>
              <Banner></Banner>
              <Services></Services>
              <Gellery></Gellery>
              <Testimonial></Testimonial>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <Header></Header>
              <Login></Login>
            </Route>
            <PrivateRoute path="/aboutus">
              <Header></Header>
              <Aboutus></Aboutus>
            </PrivateRoute>

            <Route path="/contactus">
              <Header></Header>
              <Contactus></Contactus>
            </Route>
          </Switch>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
