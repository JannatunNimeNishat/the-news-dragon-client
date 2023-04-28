import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation()
    
    if(user){
        return children;
    }

    return <Navigate state={{form: location}} to='/login' replace></Navigate>
};

export default PrivateRoute;


/**
 * ---------------------
 *      STEPS
 * ---------------------
 * 1. check user is logged in or not
 * 2. if user is logged in, then allow them to visit the route
 * 3. Else redirect the user to the login page
 * 
 */

