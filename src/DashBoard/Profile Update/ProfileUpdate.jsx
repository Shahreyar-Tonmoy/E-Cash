
import { useForm } from "react-hook-form";

import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { AuthContext } from "../../Components/Login/Firebase/AuthProvider";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import Swal from "sweetalert2";

const ProfileUpdate = () => {
  const { updateUserInfo , user } = useContext(AuthContext);
  const image_hosting_key = import.meta.env.VITE_IMAGE_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const axiosPublic = UseAxiosPublic();
  const { register, handleSubmit } = useForm();


  const { isPending, isError, error, data:datas, refetch } = useQuery({
    queryKey: ["data","user"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/${user.email}`);
      return res.json();
    },
  });



  if (isPending) {
    return <>loading....................</>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }



  const onSubmit = async (data) => {

    if(data?.image[0]){
      const imageFile = { image: data?.image[0] };
      // console.log(imageFile);
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
  
      if (res.data.success) {
        
        const  name= data?.name
  
        const  phoneNumber= data?.phoneNo
        const  dateOfBirth= data?.dateOfBirth
        const  image= res?.data?.data?.display_url
        
  
        
  
        updateUserInfo({
          displayName: name,
          photoURL: image
        }).then(() => {
  
          const updateData= {
            name, phoneNumber, dateOfBirth, image
          }
  
          axiosPublic.put(`/users/update/${user.email}`,updateData)
          .then((res)=>{
            
            if(res.data){
              if(res.data){
                Swal.fire({
                  icon: "success",
                  title: res.data.message,
                  
                })
              }
              
            }
          })
        });
  
        
      }
    }

    

    else{
      const  name= data?.name

      const  phoneNumber= data?.phoneNo
      const  dateOfBirth= data?.dateOfBirth
     
      

      

      updateUserInfo({
        displayName: name,
        phoneNumber: phoneNumber
        
      }).then(() => {

        const updateData= {
          name, phoneNumber, dateOfBirth
        }

        axiosPublic.put(`/users/update/${user.email}`,updateData)
        .then((res)=>{

          if(res.data){
            Swal.fire({
              icon: "success",
              title: res.data.message,
              
            })
          }
          
          if(res.data){
            refetch()
            
          }
          

        })
      });
    }


  };
 
  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-6 mx-10 lg:mx-0 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="max-w-lg mx-auto">
                <div>
                  <h1 className="text-2xl lg:w-96 text-center mb-5 font-semibold">
                    Update Your Profile
                  </h1>
                </div>

                <div className="mx-auto w-32 h-32  border rounded-full relative bg-gray-100 mb-4 shadow-inset">
                  <img
                    id="image"
                    className="object-cover w-full h-32 rounded-full"
                    src={user.photoURL}
                  />
                </div>

                <div className="flex justify-center flex-col items-center">
                  <input
                    {...register("image")}
                    type="file"
                    className="file-input file-input-bordered w-full max-w-xs"
                  />
                  <div className="mx-auto w-48 text-gray-500 text-xs text-center mt-1">
                    Click to add profile picture
                  </div>
                </div>

                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        {...register("name")}
                        name="name"
                        type="text"
                        
                        defaultValue={user.displayName}
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Enter Your Name"
                      />
                      <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                        Your Name
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        {...register("phoneNo")}
                        type="number"
                        
                        defaultValue={datas?.phoneNumber}
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Enter Your Phone Number"
                      />
                      <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                        Phone Number
                      </label>
                    </div>

                    <div className="relative max-w-sm">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                      <input
                        {...register("dateOfBirth")}
                        type="date"
                        defaultValue={datas?.dateOfBirth}
                        className=" border  text-black text-sm   focus:border-blue-500 block w-full ps-10 p-2.5     border-b-2 focus:border-transparent focus:border-b border-gray-300 focus:outline-none border-t-transparent border-l-transparent border-r-transparent rounded-none "
                        placeholder="Select date"
                      />
                    </div>

                    <div className="relative">
                      <button className="bg-blue-500 text-white rounded-md px-2 py-1">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
