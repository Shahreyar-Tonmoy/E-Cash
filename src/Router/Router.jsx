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

import UserSendMoney from "../DashBoard/User Home/UserSendMoney";
import TabRoute from "../DashBoard/Tabs/TabRoute";
import UserCashOut from "../DashBoard/User Home/UserCashOut";
import AgentDeposit from "../DashBoard/Agent Home/AgentDeposit";
import UserSavings from "../DashBoard/User Home/UserSavings";
import AllUsers from "../DashBoard/Admin/AllUsers";
import AllAgents from "../DashBoard/Admin/AllAgents";
import Transaction from './../DashBoard/Admin/Transaction';
import AcceptAgent from "../DashBoard/Admin/AcceptAgent";
import AcceptAgentDeposit from "../DashBoard/Admin/AcceptAgentDeposit";


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
// Admin
{
  path : "/dashboard/admin/allusers",
  element: <PrivateRoute><AllUsers></AllUsers></PrivateRoute>,
},
{
  path : "/dashboard/admin/allagents",
  element: <PrivateRoute><AllAgents></AllAgents></PrivateRoute>,
},
{
  path : "/dashboard/admin/transaction",
  element: <PrivateRoute><Transaction></Transaction></PrivateRoute>,
},
{
  path : "/dashboard/admin/acceptagent",
  element: <PrivateRoute><AcceptAgent></AcceptAgent></PrivateRoute>,
},
{
  path : "/dashboard/admin/acceptdeposite",
  element: <PrivateRoute><AcceptAgentDeposit></AcceptAgentDeposit></PrivateRoute>,
},
      
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
        {
            path : "/dashboard/agent/transaction",
            element: <PrivateRoute><TabRoute></TabRoute></PrivateRoute>,
        },
        {
            path : "/dashboard/agent/deposit",
            element: <PrivateRoute><AgentDeposit></AgentDeposit></PrivateRoute>,
        },

        // user

        {
          path : "/dashboard/user/sendMoney",
          element: <PrivateRoute><UserSendMoney></UserSendMoney></PrivateRoute>,
      },
        {
          path : "/dashboard/user/cashOut",
          element: <PrivateRoute><UserCashOut></UserCashOut></PrivateRoute>,
      },
      {
        path : "/dashboard/user/transaction",
        element: <PrivateRoute><TabRoute></TabRoute></PrivateRoute>,
    },
      {
        path : "/dashboard/user/savings",
        element: <PrivateRoute><UserSavings></UserSavings></PrivateRoute>,
    },
    
        

    ]
}
]);

export default Router;
