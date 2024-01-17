import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Home/Home";
import Error from "../Error/Error";
import DigitalBankingHome from "../Components/DigitalBanking/DigitalBankingHome";
import Contact from "../Components/Contact/Contact";
import Register from "../Components/Login/Register";
import SignIn from "../Components/Login/SignIn";


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
                path: "/digitalBanking",
                element: <DigitalBankingHome></DigitalBankingHome>

            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: "/signIn",
                element: <SignIn></SignIn> ,
            },
            {
                path: "/signUp",
                element: <Register></Register>,
            },





        ]
    }

])

export default Router;