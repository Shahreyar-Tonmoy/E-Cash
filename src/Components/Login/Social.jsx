import { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import swal from "sweetalert";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { AuthContext } from "./Firebase/AuthProvider";

const Social = () => {
  const { SignInWithGoogle } = useContext(AuthContext);
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogle = async () => {
    try {
      const result = await SignInWithGoogle();
      const users = result.user;

      const userData = {
        Name: users?.displayName,
        Email: users?.email,
        Role: "user",
      };

      // Send userData to the server
      await axiosPublic.post("/users", userData);

      // Show success message
      swal("Success", "You have successfully logged in!", "success");

      // Redirect to the previous page or homepage
      navigate(location?.state ? location?.state : "/"  )
      
    } catch (error) {
      // Show error message
      swal("Error", error.message, "error");
    }
  };

  // Add effect to check if user is already logged in
  useEffect(() => {
    const checkUser = async () => {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        try {
          // Send a request to the server to check if the token is valid
          const { data } = await axiosPublic.post("/jwt", {
            accessToken,
          });
          if (data.isValid) {
            // Redirect to the previous page or homepage
            const { from } = location.state || { from: { pathname: "/" } };
            navigate(from);
          }
        } catch (error) {
          // Clear the token and show error message
          localStorage.removeItem("accessToken");
          swal("Error", error.message, "error");
        }
      }
    };
    checkUser();
  }, [axiosPublic, location, navigate]);

  return (

    <div>
      <div className="w-full flex flex-col gap-2">
  <button onClick={handleGoogle} className="bg-red-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-red-600 duration-100 ease-in-out">
    <svg  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z" fill="currentColor" /></g></svg>
    Sign-in with Google
  </button>
  <button className="bg-blue-600 text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-blue-700 duration-100 ease-in-out">
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6c44.2 0 82.1 3.3 93.2 4.8v107.9z" fill="currentColor" /></svg>
    Sign-in with Facebook
  </button>
  
</div>




    </div>



    
  );
};

export default Social;