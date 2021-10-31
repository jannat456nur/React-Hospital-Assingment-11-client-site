import React from 'react';
import img from '../Aboutus/22801583-delivery-courier-man-in-front-of-cargo-van-delivering-package-parcel-carton-box.jpg'
import './Aboutus.css'

const Aboutus = () => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-6">
                    <img className="w-75 image" src={img} alt="" />
                </div>
                <div className="col-lg-6">
                    <h1>About us</h1>
                    <h6>We provide International Express Courier & Parcel Service. We also offer our shipments through DHL / FedEx / Aramex / UPS with a commitment of safe and on-time delivery. We offer best service with low rate.</h6>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;