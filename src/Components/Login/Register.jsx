/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import swal from "sweetalert";
import signUpBg from "../../assets/images/image.jpg";

import { AuthContext } from "./Firebase/AuthProvider";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useForm } from "react-hook-form";
import Social from "./Social";

const Register = () => {


  const { createUser, updateUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const axiosPublic = UseAxiosPublic();

  const [error, setError] = useState("");
  const [errorMassage, setErrorMassage] = useState();





  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email")
    
    const phoneNumber= data.get("phoneNumber")
    const name = data.get("name")
    const password = data.get("password")
    


     if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}/.test(password)) {
        setError("Minimum six characters, at least one letter, one number and one special character");
        swal("Error!", `Minimum six characters, at least one letter, one number and one special character`, "error");

    }
    else {
        setError("")
        if (email) {
            createUser(email, password)
                .then(result => {
                    
                    updateUserInfo({
                        displayName: name

                    })
                    .then(()=>{
                        const userInfo ={
                            Name: name,
                            Email: email,
                            PhoneNumber:phoneNumber,
                            Role: "user"
                        }
                        

                        axiosPublic.post("/users",userInfo)
                        .then(res =>{
                           
                            if(res.data.insertedId){
                                swal("Thanks For!", "Register!", "success");
                        

                        e.target.reset()
                        navigate(location?.state ? location?.state : "/")

                            }
                            else{
                              swal("Thanks For!", "Register!", "success");
                              navigate(location?.state ? location?.state : "/")
                            }
                        })
                        


                    })



                   


                })
                .catch(error => {
                    setErrorMassage(error.message);
                    
                    if (error) {
                        swal("Error!", error.message, "error");
                    }


                })

        }

    }








};


  return (
    <>

      <div className="max-w-screen-xl mx-auto px-5 md:px-10 my-7 lg:my-10 rounded-md border ">
        <div className="w-full text-black flex flex-row-reverse gap-5 justify-between items-center py-10">
          <div className="w-2/3 hidden lg:flex justify-center items-center ">
            <img src={signUpBg} alt="" className="h-[500px] rounded-xl" />
          </div>
          <div className="w-full lg:w-1/3 shadow-lg rounded ">
            <div className="bg-white max-w-md mx-auto py-5 p-8 rounded-xl ">
              <form onSubmit={handleSubmit}>
                <h3 className="text-xl md:text-2xl  font-semibold mb-5 text-center">
                  Sign Up
                </h3>
                <div className="my-2">
                  <label htmlFor="Name" className="block py-1 ml-1 font-medium">
                    Name{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="Name"
                    className="w-full p-2 border-2 rounded"
                    
                    placeholder="Enter your Name"
                    required
                  />
                </div>
                <div className="my-2">
                  <label
                    htmlFor="email"
                    className="block py-1 ml-1 font-medium"
                  >
                    Email{" "}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full p-2 border-2 rounded"
                    placeholder="Enter your Email"
                    required
                  />
                </div>
                <div className="my-2">
                  <label
                    htmlFor="PhoneNumber"
                    className="block py-1 ml-1 font-medium"
                  >
                    Phone No.
                  </label>
                  <input
                    name="phoneNumber"
                    id="PhoneNumber"
                    type="text"
                    
                    className="w-full p-2 border-2 rounded"
                    placeholder="Enter Your Phone number "
                    required
                  />
                </div>

                <div className="my-2">
                  <label
                    htmlFor="password"
                    className="block py-1 ml-1 font-medium"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    
                    className="w-full p-2 border-2 rounded"
                    placeholder="Enter your Password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-medium py-2 bg-[#008FD4] hover:bg-[#0870A1] text-white rounded mt-5 mb-6 duration-300"
                >
                  Register
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
                Do you have an account{" "}
                <Link
                  to={"/signIn"}
                  className="font-bold text-[#008FD4] hover:text-[#0870A1]"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
