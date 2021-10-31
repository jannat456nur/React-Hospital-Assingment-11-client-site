import React from 'react';
import img from "../Banner/depositphotos_164830206-stock-photo-courier\ \(1\).jpg"

import './Banner.css'



const Banner = () => {
    return (
        <div className="banner col-lg-12 col-md-6 col-sm-4 ">

            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h1 className="text-white text">Best on Time</h1>
                    <h3 className="text-white text">Courier Services</h3>

                </div>
                <div className="col-lg-6">
                    {/* <img src={img} alt="" /> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;