import { Outlet } from "react-router-dom";
<<<<<<< HEAD

=======
import Header from "../Components/Header/Header";
>>>>>>> ec2ecc8c6a5e951858996094da752305f48d52ba


const MainLayOut = () => {
    return (
        <div>
<<<<<<< HEAD

            <div className=" min-h-screen">
                <Outlet></Outlet>
            </div>
=======
            <Header></Header>
            <Outlet></Outlet>
>>>>>>> ec2ecc8c6a5e951858996094da752305f48d52ba
        </div>
    );
};

export default MainLayOut;