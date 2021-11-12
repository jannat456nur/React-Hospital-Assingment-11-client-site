import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Gellery from '../Gellary/Gellary';
import Services from '../Services/Services';
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Gellery></Gellery>
            <Signup></Signup>
            {/* <Signin></Signin> */}
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;