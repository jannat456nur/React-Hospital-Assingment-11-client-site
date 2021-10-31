import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark footer">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="#"></Link>
                            </li> */}
                            <li className="nav-item ps-5">
                                <Link className="nav-link active" aria-current="page" href="#"><i className="fab fa-instagram"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="#"><i className="fab fa-whatsapp"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="#"><i className="fab fa-facebook"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="#"><i className="fab fa-twitter-square"></i></Link>
                            </li>




                        </ul>
                        <form className="d-flex">
                            <p className="text-white p-3">

                                2019 All Rights Reserved © curier</p>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Footer;