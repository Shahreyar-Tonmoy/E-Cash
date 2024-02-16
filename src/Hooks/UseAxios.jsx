/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../Components/Login/Firebase/AuthProvider";



export const axiosSecure = axios.create({
    baseURL: "https://e-cash-server-mongoose.vercel.app"
    
})

const UseAxios = () => {
    const navigate = useNavigate()
    const { logOut } = useContext(AuthContext)
    axiosSecure.interceptors.request.use(function (config){
        const token = localStorage.getItem("access-token")

        // console.log("stopped",token)
        config.headers.Authorization = `Bearer ${token}`
        return config
    }, 

    function(error){
        return Promise.reject(error)
    })

    axiosSecure.interceptors.response.use(function(response) {
        return response
    }, 

    (error)=>{
        const status = error.response.status
        console.log("status error", status)
        if(status === 401 || status === 403){
            logOut().then(()=>{
                navigate('/signIn')
            })
           
           
        }


        return Promise.reject(error)
    }


     )


  
    return axiosSecure
};

export default UseAxios;