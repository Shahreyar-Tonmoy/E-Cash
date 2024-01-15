import { Outlet } from "react-router-dom";


const MainLayOut = () => {
    return (
        <div>
           <Outlet></Outlet> 
        </div>
    );
};

export default MainLayOut;