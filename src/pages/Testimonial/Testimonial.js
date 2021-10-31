import React from 'react';
import './Testimonial.css'

const Testimonial = () => {
    return (
        <div className="testi">
            {/* <div className="row">
                <div className="col-lg-12 test">
                    <h1>Testimonials</h1>
                    <p>They Provide express delivery service ate an affordable price</p>
                </div>
            </div> */}

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">



                        <h1>Testimonials</h1>
                        <p>They Provide express delivery service ate an affordable price</p>
                        <h3> <i className="fas fa-user"></i>Rahul Sanun</h3>


                    </div>
                    <div className="carousel-item">

                        <h1>Testimonials</h1>
                        <p>They Provide express delivery service ate an affordable price</p>
                        <h3><i className="fas fa-user"></i> Jannat Rahman</h3>
                    </div>
                    <div className="carousel-item">

                        <h1>Testimonials</h1>
                        <p>They Provide express delivery service ate an affordable price</p>
                        <h3> <i className="fas fa-user"></i>Ronni Gupta</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;