import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";


const MainLayOut = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;