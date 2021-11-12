import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth()
    const location = useLocation();
    // console.log(user)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.displayName ? children : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}

                ></Redirect>
            }

        >

        </Route>
    );
};

export default PrivateRoute;