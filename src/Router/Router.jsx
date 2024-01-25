import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Home/Home";
import Error from "../Error/Error";


import DigitalBankingHome from "../Components/DigitalBanking/DigitalBankingHome";
import Contact from "../Components/Contact/Contact";
import SignIn from "../Components/Login/SignIn";
import Register from "../Components/Login/Register";
import DashBoardLayOut from "../DashBoard/DashBoard LayOut/DashBoardLayOut";
import PrivateRoute from "../Components/Login/PrivateRoute";
import CurrencyCalculator from "../Components/Currency Calculator/CurrencyCalculator";
import DashBoardHome from "../DashBoard/DashBoard Home/DashBoardHome";
import AgentSendMoney from "../DashBoard/Agent Home/AgentSendMoney";
import ProfileUpdate from "../DashBoard/Profile Update/profileUpdate";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <Register></Register>,
      },
      {
        path: "/digitalBanking",
        element: <DigitalBankingHome></DigitalBankingHome>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/currencycalculator",
        element: <CurrencyCalculator></CurrencyCalculator>,
      },
    ],
  },
  {
    path : "/dashboard",
    element : <PrivateRoute><DashBoardLayOut></DashBoardLayOut></PrivateRoute>,
    children : [

      
        {
            path : "/dashboard",
            element: <PrivateRoute><DashBoardHome></DashBoardHome></PrivateRoute>,
        },
        {
            path : "/dashboard/agent/sendMoney",
            element: <PrivateRoute><AgentSendMoney></AgentSendMoney></PrivateRoute>,
        },
        {
            path : "/dashboard/profile",
            element: <PrivateRoute><ProfileUpdate></ProfileUpdate></PrivateRoute>,
        },
        
        

    ]
}
]);

export default Router;
