import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { img, p, name, phn, id } = props.service;
    return (
        <div className="div">
            {/* <h1> Our Services</h1> */}
            <div>

                <div className="card container ">
                    <div className="card-body d-flex ">
                        <img className="image" src={img} alt="" />
                        <div>
                            <h5>{name}</h5>
                            <p>{p}</p>
                            {/* <p>{phn}</p> */}
                            <Link to={`/detail/${id}`}><button type="button" className="btn btn-light" value="">Detail</button></Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;