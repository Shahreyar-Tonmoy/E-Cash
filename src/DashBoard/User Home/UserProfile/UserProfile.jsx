import { useContext } from "react";
import { AuthContext } from "../../../Components/Login/Firebase/AuthProvider";


const UserProfile = () => {
    const { user} = useContext(AuthContext);
    return (
        <div>
         
<div className="container mx-auto px-4 sm:px-8">
  <div className="py-8">
    <div>
      <h2 className="text-2xl font-semibold leading-tight">User</h2>
    </div>
   
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                User
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Rol
              </th>
              <th className="px-5 flex justify-end py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Email
              </th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                  <img
                      src={user?.photoURL}
                      alt
                      className=" m-auto rounded-full object-cover lg:w-12 lg:h-12"
                    />
                  </div>
                  <div className="ml-3">
                  <h5 className=" text-black mt-4 text-xl text-center font-semibold  lg:block">
                      {user?.displayName}
                    </h5>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">User</p>
              </td>
              <td className="px-5 flex justify-end py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                <h5 className=" text-black mt-4 text-xl text-center   lg:block">
                      {user?.email}
                    </h5>
                </p>
              </td>
              
            </tr>
           
            
            
          </tbody>
        </table>
        
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default UserProfile;