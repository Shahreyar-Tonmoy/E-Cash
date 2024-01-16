import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./Firebase/AuthProvider";
// import picture from "../../assets/LoginBanner.png"
import picture from "../../assets/images/login-bg.jpg";

const SignIn = () => {
  const { signInUser, SignInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  //   const [errorMassage, setErrorMassage] = useState();

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    const password = e.target.password.value;
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          Swal("Good job!", "You are sign in!", "success");
        }

        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        if (error) {
          Swal("Error!", "Invalid email or password", "error");
        }
      });

    console.log(email, password);
  };
  const handleGoogle = () => {
    SignInWithGoogle()
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          Swal("Good job!", "You are sign in with google!", "success");
        }
        if (result.user) {
          navigate(location?.state ? location?.state : "/");
        }
      })
      .catch((error) => {
        console.log(error.massage);
        if (error.massage) {
          Swal("Error!", `{${error.massage}}`, "error");
        }
      });
  };

  return (
    <div
      className="bg-cover bg-no-repeat w-full"
      style={{ backgroundImage: `url(${picture})` }}
    >
      <div className="max-w-screen-xl mx-auto  py-40 -mt-28 justify-center ">
        <div className="card glass flex-shrink-0 w-full max-w-sm mx-auto lg:mx-0  ">
          {/* <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-[#6C63FF] to-[#6661d4] bg-clip-border text-white shadow-lg shadow-[#7c77db]">
                    <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                        Sign In
                    </h3>
                </div> */}
          <form onSubmit={handleSignIn} className="card-body">
            <h3 className="text-3xl font-bold text-white">Sign In</h3>
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
              <label className="label ">
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
                Sign In
              </button>
            </div>
          </form>
          <h1 className="text-center text-white">
            Do not have an account?{" "}
            <span className="font-bold text-[#08093F] ">
              <Link to={"/signUp"}>Register</Link>{" "}
            </span>
          </h1>
          <h1 className="text-center text-2xl font-semibold">or</h1>
          <span className="flex justify-center items-center mt-4 mb-10  gap-1">
            <h1 onClick={handleGoogle} className="text-2xl cursor-pointer">
              <span className="text-[#4285F4] font-semibold">G</span>
              <span className="text-[#EA4335] font-semibold">o</span>
              <span className="text-[#FBBC05] font-semibold">o</span>
              <span className="text-[#4285F4] font-semibold">g</span>
              <span className="text-[#34A853] font-semibold">l</span>
              <span className="text-[#EA4335] font-semibold">e</span>
            </h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
