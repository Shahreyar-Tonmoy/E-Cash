/* eslint-disable no-unused-vars */
import UserMember from "../../Hooks/UseMember";
import UserAdmin from "../../Hooks/UserAdmin";
import AdminHome from "../Admin/AdminHome";
import AgentHome from "../Agent Home/AgentHome";
import UserHome from "../User Home/UserHome";

const DashBoardHome = () => {
  const [isAdmin] = UserAdmin();
  const [isMember] = UserMember();

  console.log(isAdmin , isMember);

  return (
    <div>
      {isAdmin && <AdminHome></AdminHome>}
      {isMember && <AgentHome></AgentHome>}
      {isAdmin || (isMember === false && <UserHome></UserHome>)}
    </div>
  );
};

export default DashBoardHome;
