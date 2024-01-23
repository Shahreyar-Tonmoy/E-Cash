import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext } from "react";
import Swal from "sweetalert2";
// import picture from "../../assets/images/login-bg.jpg";
import bg from "../../assets/images/image.jpg";
import { AuthContext } from "./Firebase/AuthProvider";
import Social from "./Social";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    const password = e.target.password.value;
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        console.log(result.user);
        if (result.user) {
          Swal.fire({
            icon: "success",
            title: "Well Done..",
            text: `Sign In successful.`,
          });
        }

        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error.message}`,
          });
        }
      });

    console.log(email, password);
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-5 md:px-10 my-7 lg:my-10 rounded-md border ">
        <div className="w-full text-black flex gap-5 justify-between items-center py-10">
          <div className="w-2/3 hidden lg:flex justify-center items-center ">
            <img src={bg} alt="" className="h-[500px] rounded-xl" />
          </div>
          <div className="w-full lg:w-1/3 shadow-lg rounded ">
            <div className="bg-white max-w-md mx-auto py-5 p-8 rounded-xl ">
              <form onSubmit={handleSignIn}>
                <h3 className="text-xl md:text-2xl  font-semibold mb-5 text-center">
                  Sign in to your account
                </h3>
                <div className="my-2">
                  <label
                    htmlFor="email"
                    className="block py-2 ml-1 font-medium"
                  >
                    Email{" "}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full p-3 border-2 rounded"
                    placeholder="Enter your Email"
                    required
                  />
                </div>
                <div className="my-2">
                  <label
                    htmlFor="password"
                    className="block py-2 ml-1 font-medium"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="w-full p-3 border-2 rounded"
                    placeholder="Enter your Password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#008FD4] hover:bg-[#0870A1] text-white rounded mt-5 mb-6 duration-300"
                >
                  Sign In
                </button>
              </form>
              <div className="divider">Or</div>
              {/* <div>
                <div className="flex justify-center items-center ">
                  <BsGoogle
                    onClick={handleSignInWithGoogle}
                    className="text-3xl text-[#008FD4] cursor-pointer hover:text-[#0870A1] "
                  />
                </div>
              </div> */}
              <Social></Social>

              <p className="text-gray-600 font-medium text-center my-4">
                Do not have an account{" "}
                <Link
                  to={"/signUp"}
                  className="font-bold text-[#008FD4] hover:text-[#0870A1]"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
