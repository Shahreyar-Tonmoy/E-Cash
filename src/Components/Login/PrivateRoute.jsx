/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Firebase/AuthProvider";
import { useContext } from "react";


const PrivateRoute = ({children}) => {
    const { user,loading } = useContext(AuthContext)
    const location = useLocation()
   
    if(loading){
        return <span></span>
    }
    if(user){
        return children
    }
    


    return <Navigate state={location.pathname} to ="/Signin"></Navigate>
};

export default PrivateRoute;