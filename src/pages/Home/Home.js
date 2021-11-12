import React from 'react';
import Banner from '../Banner/Banner';
import Gellery from '../Gellary/Gellary';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Gellery></Gellery>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;