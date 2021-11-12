import { getAuth } from '@firebase/auth';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import './Signup.css'

const Signup = () => {
    const history = useHistory()
    const location = useLocation()
    const { user, signInUsingGoogle,
        handleRegistration,
        toogleLogIn,
        handleEmailChange,
        handlePassChange, login, error } = useFirebase()



    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(location.state?.from || '/home')
            })
    }

    return (


        <div className="App">
            <form onSubmit={handleRegistration}>
                <h4>Please {login ? "Login" : "Register"}</h4>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" class="form-control w-75" id="inputEmail3" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input onBlur={handlePassChange} type="password" class="form-control w-75" id="inputPassword3" />
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-sm-10 offset-sm-2">
                        <div class="form-check">
                            <input onChange={toogleLogIn} class="form-check-input" type="checkbox" id="gridCheck1" />
                            <label class="form-check-label" for="gridCheck1">
                                Already Registered?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" class="btn btn-primary">{login ? "Login" : "Registration"}</button>
            </form>

            <div className="col-auto pt-5">
                <button onClick={handleGoogleLogin} type="button" className="btn btn-light">Google signIn</button>
            </div>
        </div>

    );
};

export default Signup;