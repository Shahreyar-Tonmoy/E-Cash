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
    ],
  },
  {
    path : "/dashboard",
    element : <PrivateRoute><DashBoardLayOut></DashBoardLayOut></PrivateRoute>,
    children : [

        // admin


        // {
        //     path : "/dashboard/adminProfile",
        //     element: <UserProfile></UserProfile>,
        // },
        

    ]
}
]);

export default Router;
