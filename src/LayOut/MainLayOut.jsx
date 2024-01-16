import { Outlet } from "react-router-dom";


const MainLayOut = () => {
    return (
        <div>

            <div className=" min-h-screen">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayOut;