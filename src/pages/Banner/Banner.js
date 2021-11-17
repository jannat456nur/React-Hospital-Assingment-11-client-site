import React from 'react';
import img from "../Banner/Courier-Service-1024x683.jpg"
import './Banner.css'



const Banner = () => {
    return (
        <div className=" col-lg-12 col-md-6 col-sm-4 ">

            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h1 className="pt-5  text">Best on Time</h1>
                    <h3 className="pt-5 text">Courier Services</h3>

                </div>
                <div className="col-lg-6 ">
                    <img className="banner" src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;