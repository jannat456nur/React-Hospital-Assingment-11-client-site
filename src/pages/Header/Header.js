import React from 'react';

import { Link } from 'react-router-dom';
import './Header.css'
import useFirebase from '../hooks/useFirebase';




const Header = () => {
    const { user, logOut } = useFirebase()
    return (
        <div className="pb-3">


            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    {/* <img className="img" src={logo} alt="" /> */}
                    <i className="fab icon fa-servicestack"></i>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            <Link to="/home" className="nav-link ">Home</Link>
                            <Link to="/aboutus" className="nav-link ">About Us </Link>
                            <Link to="/contactus" className="nav-link ">Contact Us </Link>
                            {/* <Link to="/ambulance" className="nav-link ">Sign  </Link> */}
                            {/* <Link to="/login" className="nav-link ">Sign in </Link> */}

                            <span className="text-white">{user?.displayName}</span>
                            {
                                user.email ?
                                    <button onClick={logOut}> LogOut</button> :
                                    <Link to="/login" className="nav-link ">LogIn </Link>}
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;