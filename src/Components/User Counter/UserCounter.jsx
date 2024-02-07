
import { Link } from "react-router-dom";

const UserCounter = () => {
  return (
    <div>
      <div className="hero h-[500px] mt-32 bg-gradient-to-r from-[#B46EA3] to-[#6F74BE] ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl text-white font-semibold">Join Our Family </h1>
            <div className="mt-10">
            <Link to={"/signUp"}><button className="btn px-16 font-Ubuntu   rounded-3xl ">Sign Up For Free</button></Link>
            </div>

            
           
            
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCounter;
