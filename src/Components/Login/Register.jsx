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
  const image_hosting_key = import.meta.env.VITE_IMAGE_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const { createUser, updateUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const axiosPublic = UseAxiosPublic();

  const [error, setError] = useState("");
  const [errorMassage, setErrorMassage] = useState();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data?.Image[0] };
    // console.log(imageFile);
    await axiosPublic
      .post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data.success);
        if (res.data.success) {
          const name = data?.Name;
          const password = data?.Password;
          const email = data?.Email;
          const photo = res?.data?.data?.display_url;
          const phoneNumber = data?.PhoneNumber;

          if (
            !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}/.test(
              password
            )
          ) {
            setError(
              "Minimum six characters, at least one letter, one number and one special character"
            );
            swal(
              "Error!",
              `Minimum six characters, at least one letter, one number and one special character`,
              "error"
            );
          } else {
            setError("");
            if (email) {
              createUser(email, password)
                .then((result) => {
                  console.log(result?.user);
                  updateUserInfo({
                    displayName: name,
                    photoURL: photo,
                  }).then(() => {
                    const userInfo = {
                      Name: name,
                      Email: email,
                      PhoneNumber: phoneNumber,
                      Role: "user",
                    };
                    console.log(userInfo);

                    axiosPublic.post("/users", userInfo).then((res) => {
                      console.log(res.data);
                      if (res.data.insertedId) {
                        swal("Thanks For!", "Register!", "success");

                        reset();
                        navigate(location?.state ? location?.state : "/");
                      }
                    });
                  });
                })
                .catch((error) => {
                  if (error) {
                    swal("Error!", error.message, "error");
                  }
                });
            }
          }
        }
      });
  };

  // const handleSignUp = (e) => {
  //   e.preventDefault();
  //   const form = e.target;

  //   const email = form.email.value;

  //   const password = form.password.value;
  //   const name = form.name.value;
  //   const photo = form.photo.value;

  //   console.log(email, password, name, photo);

  //   if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}/.test(password)) {
  //     setError("Minimum six characters, at least one letter, one number and one special character");
  //     swal("Error!", `Minimum six characters, at least one letter, one number and one special character`, "error");

  // }
  // else {
  //     setError("")
  //     if (email) {
  //         createUser(email, password)
  //             .then(result => {
  //                 console.log(result.user);
  //                 updateUserInfo({
  //                     displayName: name, photoURL: photo

  //                 })
  //                 .then(()=>{
  //                     const userInfo ={
  //                         Name: name,
  //                         Email: email,
  //                         Role: "user"
  //                     }
  //                     console.log(userInfo);

  //                     axiosPublic.post("/users",userInfo)
  //                     .then(res =>{
  //                         console.log(res.data);
  //                         if(res.data.insertedId){
  //                             swal("Thanks For!", "Register!", "success");

  //                     e.target.reset()
  //                     navigate(location?.state ? location?.state : "/")

  //                         }
  //                     })

  //                 })

  //             })
  //             .catch(error => {
  //                 setErrorMassage(error.message);
  //                 setErrorMassage(errorMassage);
  //                 if (error) {
  //                     swal("Error!", errorMassage, "error");
  //                 }

  //             })

  //     }

  // }

  // };

  return (
    <>
      {/* <div
        className="bg-cover bg-no-repeat max-w-screen-xl min-h-screen mx-auto object-cover   "
        style={{
          backgroundImage: `url(${signUpBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-screen-xl mx-auto  py-10  flex justify-end ">
          <div className="card glass flex-shrink-0 w-full max-w-sm mx-auto lg:mx-0  "> */}
      {/* <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border text-black shadow-lg shadow-pink-500/40">
                    <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-black antialiased">
                        Register
                    </h3>
                </div> */}
      {/* <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h3 className="text-3xl font-bold ">Sign Up</h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Name</span>
                </label>
                <input
                  type="text"
                  {...register("Name", { required: true })}
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div> */}
      {/* <div className="form-control">
              <label className="label">
                <span className="label-text  text-black">PhotoURL</span>
              </label>
              <input
                type="text"
                {...register("Image", { required: true })}
                placeholder="PhotoURL"
                className="input input-bordered"
                required
              />
            </div> */}
      {/* <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="email"
                  {...register("Email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Phone Number</span>
                </label>
                <input
                  type="number"
                  {...register("PhoneNumber", { required: true })}
                  placeholder="Phone Number"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input
                  type="password"
                  {...register("Password", { required: true })}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="">
                <label className="label-text text-black">Upload Image</label>
                <input
                  type="file"
                  {...register("Image", { required: true })}
                  className="file-input file-input-bordered mt-2  "
                />
              </div>

              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-black"
                >
                  Forgot password?
                </a>
              </label>

              <div className="form-control mt-6">
                <button className="btn bg-gradient-to-tr from-[#08093F] to-[#08093F] border-none text-black shadow-md shadow-[#0c1312]">
                  Register
                </button>
              </div>
            </form> */}
      {/* <h1 className="text-center  text-black">
              Do not have an account?{" "}
              <span className="text-[#08093F] font-bold">
                <Link to={"/signIn"}>Sign In</Link>{" "}
              </span>
            </h1>
            <Social></Social>
          </div>
        </div>
      </div> */}
      <div className="max-w-screen-xl mx-auto px-5 md:px-10 my-7 lg:my-10 rounded-md border ">
        <div className="w-full text-black flex flex-row-reverse gap-5 justify-between items-center py-10">
          <div className="w-2/3 hidden lg:flex justify-center items-center ">
            <img src={signUpBg} alt="" className="h-[500px] rounded-xl" />
          </div>
          <div className="w-full lg:w-1/3 shadow-lg rounded ">
            <div className="bg-white max-w-md mx-auto py-5 p-8 rounded-xl ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-xl md:text-2xl  font-semibold mb-5 text-center">
                  Sign Up
                </h3>
                <div className="my-2">
                  <label htmlFor="Name" className="block py-1 ml-1 font-medium">
                    Name{" "}
                  </label>
                  <input
                    type="text"
                    name="Name"
                    id="Name"
                    className="w-full p-2 border-2 rounded"
                    {...register("Name", { required: true })}
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
                    name="PhoneNumber"
                    id="PhoneNumber"
                    type="text"
                    {...register("PhoneNumber", { required: true })}
                    className="w-full p-2 border-2 rounded"
                    placeholder="Inter Your Phone number "
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
                    {...register("Password", { required: true })}
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
