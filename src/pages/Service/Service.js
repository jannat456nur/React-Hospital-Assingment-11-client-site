import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { img, price, name, description, _id } = props.service;
    return (
        <div className="div">

            <div>

                <div className="card container ">
                    <div className="card-body d-flex ">
                        <img className="image" src={img} alt="" />
                        <div>
                            <h5>{name}</h5>
                            <h5>{description}</h5>

                            <p>Price:{price}</p>

                            <Link to={`/booking/${_id}`}><button type="button" className="btn btn-light" value="">Book Now</button></Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;