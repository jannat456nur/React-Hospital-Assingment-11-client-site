import React from 'react';
import { Link } from 'react-router-dom';
import img from '../Login//depositphotos_30415293-stock-photo-delivery-man-with-parcel-box.jpg'
import { useHistory, useLocation } from 'react-router';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import useFirebase from '../hooks/useFirebase';





// initializeAuth()

// const provider = new GoogleAuthProvider();


const Login = () => {
    const history = useHistory()
    const location = useLocation()
    const { user, signInUsingGoogle,
    } = useFirebase()


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(location.state?.from || '/home')
            })
    }
    return (
        <div>
            <div className="row">
                <div className="col-lg-6">
                    <img className="image" src={img} alt="" />
                </div>
                <div className="col-lg-6 pt-5">
                    <h3>LOG IN Fast</h3>
                    <Link><button onClick={handleGoogleLogin} type="button" className="btn btn-dark">Google signin</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Login;