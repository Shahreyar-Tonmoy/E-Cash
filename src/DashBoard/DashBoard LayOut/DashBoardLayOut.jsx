import { Outlet } from "react-router-dom";
import DashBoardSideBar from "../DashBoard Components/DashBoardSideBar";
import DashBoardNavBar from "../DashBoard Components/DashBoardNavBar";
import UserHome from "../User Home/UserHome";

const DashBoardLayOut = () => {
  return (
    <div>
      <DashBoardSideBar></DashBoardSideBar>
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        

            <DashBoardNavBar></DashBoardNavBar>

        

        {/* outlet start here */}
        <Outlet></Outlet>

      </div>
    </div>
  );
};

export default DashBoardLayOut;
