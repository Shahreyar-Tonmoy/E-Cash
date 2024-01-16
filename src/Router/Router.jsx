import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Home/Home";
import Error from "../Error/Error";
import DigitalBankingHome from "../Components/DigitalBanking/DigitalBankingHome";
import Contact from "../Components/Contact/Contact";


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
                path: "/digitalBankingHome",
                element: <DigitalBankingHome></DigitalBankingHome>

            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },





        ]
    }

])

export default Router;