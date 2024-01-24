/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import swal from "sweetalert";
import signUpBg from "../../assets/images/login-bg.jpg";
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
     await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    .then((res)=>{
      console.log(res.data.success);
      if (res.data.success) {
        const name = data?.Name;
        const password = data?.Password;
        const email = data?.Email;
        const photo = res?.data?.data?.display_url;
        const phoneNumber = data?.PhoneNumber
        
  
        if (
          !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}/.test(
            password
          )
        ) 
        {
          setError(
            "Minimum six characters, at least one letter, one number and one special character"
          )
          swal(
            "Error!",
            `Minimum six characters, at least one letter, one number and one special character`,
            "error"
          )
        } 
  
        else {
          setError("");
          if (email) {
            createUser(email, password)
              .then((result) => {
                console.log(result?.user)
                updateUserInfo({
                    displayName: name, photoURL: photo,
  
                })
                .then(()=>{
                    const userInfo ={
                        Name: name,
                        Email: email,
                        PhoneNumber: phoneNumber,
                        Role: "user"
                    }
                    console.log(userInfo);
  
                    axiosPublic.post("/users",userInfo)
                    .then(res =>{
                        console.log(res.data);
                        if(res.data.insertedId){
                            swal("Thanks For!", "Register!", "success");
  
                    reset()
                    navigate(location?.state ? location?.state : "/")
  
                        }
                    })
  
                })
              })
              .catch((error) => {
                
                if (error) {
                  swal("Error!", error.message, "error");
                }
              });
          }
        }
      }
    })

    
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
    <div
      className="bg-cover bg-no-repeat w-full"
      style={{ backgroundImage: `url(${signUpBg})` }}
    >
      <div className="max-w-screen-xl mx-auto  py-40  flex justify-end ">
        <div className="card glass flex-shrink-0 w-full max-w-sm mx-auto lg:mx-0  ">
          {/* <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40">
                    <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                        Register
                    </h3>
                </div> */}
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h3 className="text-3xl font-bold text-white">Sign Up</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                type="text"
                {...register("Name", { required: true })}
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text  text-white">PhotoURL</span>
              </label>
              <input
                type="text"
                {...register("Image", { required: true })}
                placeholder="PhotoURL"
                className="input input-bordered"
                required
              />
            </div> */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
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
                <span className="label-text text-white">Phone Number</span>
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
                <span className="label-text text-white">Password</span>
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
              <label className="label-text text-white">Upload Image</label>
              <input
                type="file"
                {...register("Image", { required: true })}
                className="file-input file-input-bordered mt-2  "
              />
            </div>

            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-white">
                Forgot password?
              </a>
            </label>

            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-tr from-[#08093F] to-[#08093F] border-none text-white shadow-md shadow-[#0c1312]">
                Register
              </button>
            </div>
          </form>
          <h1 className="text-center  text-white">
            Do not have an account?{" "}
            <span className="text-[#08093F] font-bold">
              <Link to={"/signIn"}>Sign In</Link>{" "}
            </span>
          </h1>
          <Social></Social>
        </div>
      </div>
    </div>
  );
};

export default Register;
