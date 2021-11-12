import React from 'react';
import './Gellary.css'
import img1 from '../Gellary//courier-parcel-delivery.jpg'
import img2 from '../Gellary/courier.png'


const Gellery = () => {
    return (

        <div className="div row">
            <h2> Our Gellary</h2>
            <div className="col-lg-6 gellery d-flex ">

                <div className="col-lg-4 ">
                    <img className="w-50 m-5 round" src={img1} alt="" />
                </div>
                <div className="col-lg-4 ">
                    <img className="w-50 m-5 round " src={img2} alt="" />
                </div>
                <div className="col-lg-4 ">
                    <img className="w-50 m-5 round " src={img1} alt="" />
                </div>
                <div className="col-lg-4 ">
                    <img className="w-50 m-5 round " src={img2} alt="" />
                </div>
                <div className="col-lg-4 ">
                    <img className="w-50 m-5 round " src={img1} alt="" />
                </div>
                <div className="col-lg-4 ">
                    <img className="w-50 m-5 round " src={img2} alt="" />
                </div>


            </div>
        </div>
    );
};

export default Gellery;