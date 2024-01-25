import { useContext } from "react";
import { AuthContext } from "../../Components/Login/Firebase/AuthProvider";


const UserHome = () => {
    const { user} = useContext(AuthContext);
    return (
        <div>
  <div className="bg-white shadow-lg mx-auto my-10 w-[700px]">
    <div>
    <img
                      src={user?.photoURL}
                      alt
                      className=" m-auto rounded-full object-cover lg:w-28 lg:h-28"
                    />
    </div>
    <div className="mb-2 mx-auto items-center gap-3">
    <h5 className=" text-black mt-4 text-xl text-center font-semibold  lg:block">
                      {user?.displayName}
                    </h5>
      
    </div>
    <p className="text-black  text-2xl text-center font-bold">
    Let's confirm your subscription and verify you!
    </p>
    <div className="flex items-center py-6">
        <button className="btn w-60  bg-yellow-400 mx-auto" type="button">Coutinue</button>
    </div>
    
  </div>
  {/* another card */}
  <div className="flex">
  <div className="bg-white shadow-lg mx-auto my-10 w-[400px]">
    <div className="flex mx-auto my-8">
    <img
                      src="https://i.ibb.co/VQY26DF/acc.jpg"
                      alt
                      className=" m-auto rounded-xl object-cover lg:w-28 lg:h-28"
                    />
                    <div className="mb-2 mx-auto items-center gap-3">
    <p className="text-black  text-2xl text-center font-bold">
  1
    </p>
    <h5 className=" text-black mt-4 text-xl text-center font-semibold  lg:block">
                      Accounts
                    </h5>
      
    </div>
    </div>
    
    
    
    
  </div>
  <div className="bg-white shadow-lg mx-auto my-10 w-[400px]">
    <div className="flex mx-auto my-8">
    <img
                      src="https://i.ibb.co/F8tPX1T/bal.jpg"
                      alt
                      className=" m-auto rounded-xl object-cover lg:w-28 lg:h-28"
                    />
                    <div className="mb-2 mx-auto items-center gap-3">
    <p className="text-black  text-2xl text-center font-bold">$ 0.00</p>
    <h5 className=" text-black mt-4 text-xl text-center font-semibold  lg:block">
                     Main Balance
                    </h5>
      
    </div>
    </div>
    
    
    
    
  </div>
  </div>
</div>

    );
};

export default UserHome;