import React from 'react';
import { Link } from 'react-router-dom';
// import './Login.css'

const Signin = () => {
    return (
        <div className="login">
            {/* <img className="w-25" src={logo} alt="" /> */}
            <br /><br />



            <input type="email" placeholder="email" />
            <br /><br />

            <input type="password" placeholder="password" />
            <br /><br />



            <Link to="/home"><button className="btn btn-danger rounded-pill m-2">Sign In</button></Link>
            <Link to="/home"><button className="btn btn-danger rounded-pill">Go Back</button></Link>
        </div>
    );
};

export default Signin;