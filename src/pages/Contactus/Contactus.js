import React from 'react';
import img from '../Contactus/depositphotos_30770151-stock-photo-delivery-man-with-parcel-box.jpg'


const Contactus = () => {
    return (
        <div className="background">
            {/* <div className="row">
                <div className="col-lg-6">
                    {/* <img className="w-75 image" src={img} alt="" /> */}
            {/* </div>
                <div className="col-lg-6">
                    <h2>Contact Us To enjoy the services</h2>
                    
                </div> */}
            {/* </div>  */}

            <div className="row">
                <div className="col-lg-4">
                    <i className="fas icon fa-map-marker-alt"></i><br />
                    <h4>Our Office Address</h4>
                    <p>Courier service
                        Sylhet
                        Closed ⋅ Opens 10AM</p>
                </div>
                <div className="col-lg-4">
                    <i className="fas icon fa-envelope"></i><br />
                    <h4>Generall Enquries</h4>
                    <p>westsupport@justdial.com</p>
                </div>
                <div className="col-lg-4">
                    <i className="fas icon fa-phone-alt"></i><br />
                    <h4>Call Us</h4>
                    <p>· 01719-012570</p>
                </div>
            </div>
        </div>
    );
};

export default Contactus;