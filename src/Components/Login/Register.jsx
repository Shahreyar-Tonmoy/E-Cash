import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import signUpBg from "../../assets/images/login-bg.jpg";
import { AuthContext } from "./Firebase/AuthProvider";

const Register = () => {
  const { createUser, updateUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;

    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}/.test(
        password
      )
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Minimum six characters, at least one letter, one number and one special character",
      });
    } else {
      if (email) {
        createUser(email, password)
          .then((result) => {
            console.log(result.user);
            if (result.user) {
              Swal.fire({
                title: "Good job!",
                text: "Sign Up Successful.",
                icon: "success",
              });
              updateUserInfo({
                displayName: name,
                photoURL: photo,
              });
              e.target.reset();
              navigate(location?.state ? location?.state : "/");
            }
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
      }
    }

    console.log(email, password, name, photo);
  };

  return (
    <div
      className="bg-cover bg-no-repeat w-full"
      style={{ backgroundImage: `url(${signUpBg})` }}
    >
      <div className="max-w-screen-xl mx-auto  py-40 -mt-28 flex justify-end ">
        <div className="card glass flex-shrink-0 w-full max-w-sm mx-auto lg:mx-0  ">
          {/* <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40">
                    <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                        Register
                    </h3>
                </div> */}
          <form onSubmit={handleSignUp} className="card-body">
            <h3 className="text-3xl font-bold text-white">Sign Up</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
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
                <span className="label-text  text-white">PhotoURL</span>
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
                <span className="label-text text-white">Email</span>
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
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-white"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-tr from-[#08093F] to-[#08093F] border-none text-white shadow-md shadow-[#0c1312]">
                Register
              </button>
            </div>
          </form>
          <h1 className="text-center mb-10  text-white">
            Do not have an account?{" "}
            <span className="text-[#08093F] font-bold">
              <Link to={"/SignIn"}>Sign In</Link>{" "}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
