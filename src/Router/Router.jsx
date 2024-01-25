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
import SentMoney from "../DashBoard/User Home/SentMoney/SentMoney";
import UserProfile from "../DashBoard/User Home/UserProfile/UserProfile";


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
          // Perticepent(User)
        {
            path : "/dashboard/user/sendmoney",
            element: <PrivateRoute><SentMoney></SentMoney></PrivateRoute>,
        },
        {
            path : "/dashboard/user/balancecheck",
            element: <PrivateRoute><SentMoney></SentMoney></PrivateRoute>,
        },
        {
            path : "/dashboard/user/userprofile",
            element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>,
        },
        
        

    ]
}
]);

export default Router;
