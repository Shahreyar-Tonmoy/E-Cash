import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Home/Home";
import Error from "../Error/Error";
import DigitalBankingHome from "../Components/DigitalBanking/DigitalBankingHome";


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
                path: "digitalBankingHome",
                element: <DigitalBankingHome></DigitalBankingHome>

            },





        ]
    }

])

export default Router;