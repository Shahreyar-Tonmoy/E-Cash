/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import { useContext, useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./Firebase/AuthProvider";
import Swal from "sweetalert2";

// import picture from "../../assets/Register.png";

const Register = () => {
  // const { createUser, updateUserInfo } = useContext(AuthContext)
  const { createUser, updateUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const [errorMassage, setErrorMassage] = useState();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}/.test(
        password
      )
    ) {
      setError(
        "Minimum six characters, at least one letter, one number and one special character"
      );
      Swal(
        "Error!",
        `Minimum six characters, at least one letter, one number and one special character`,
        "error"
      );
    } else {
      setError("");
      if (email) {
        createUser(email, password)
          .then((result) => {
            if (result.user) {
              Swal("Thanks For!", "Register!", "success");
              updateUserInfo({
                displayName: name,
                photoURL: photo,
              });

              e.target.reset();
              navigate(location?.state ? location?.state : "/");
            }
          })
          .catch((error) => {
            setErrorMassage(error.message);
            setErrorMassage(errorMassage);
            if (error) {
              Swal("Error!", errorMassage, "error");
            }
          });
      }
    }

    console.log(email, password);
  };

  return (
    <div
      className="bg-cover bg-no-repeat"
      //   style={{ backgroundImage: `url(${picture})` }}
    >
      <div className="max-w-screen-xl mx-auto  py-40 -mt-28 flex justify-end ">
        <div className="card glass flex-shrink-0 w-full max-w-sm mx-auto lg:mx-0  ">
          {/* <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40">
                    <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                        Register
                    </h3>
                </div> */}
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="PhotoURL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-tr from-[#9CDEDD] to-[#72d0cf] border-none text-white shadow-lg shadow-[#83c7c6]">
                Register
              </button>
            </div>
          </form>
          <h1 className="text-center mb-10 ">
            Don't have an account?{" "}
            <span className="text-[#3f9290] font-bold">
              <Link to={"/SignIn"}>Sign In</Link>{" "}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
