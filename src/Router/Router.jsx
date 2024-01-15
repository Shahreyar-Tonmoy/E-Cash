import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Home/Home";
import Error from "../Error/Error";


const Router = createBrowserRouter([
    
    {
        path :"/",
       element :<MainLayOut></MainLayOut> ,
       errorElement :<Error></Error>,
       children :[
        {
            path : "/",
            element : <Home></Home>,
           
        },
        
       
    

        
       ]}
    
])

export default Router;