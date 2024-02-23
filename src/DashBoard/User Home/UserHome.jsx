<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";

import dateTime from "date-time";
import { AuthContext } from "../../Components/Login/Firebase/AuthProvider";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";



const UserHome = () => {
  const { user } = useContext(AuthContext);
const [count,setCount] = useState(0)
const [transactionDate,setTransactionDate] = useState(0)
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["data", "user"],
    queryFn: async () => {
      const res = await fetch(`https://e-cash-server-mongoose.vercel.app/users/${user?.email}`);
      return res.json();
    },
  });
=======
import { useContext } from "react";
import { AuthContext } from "../../Components/Login/Firebase/AuthProvider";


const UserHome = () => {
    const { user} = useContext(AuthContext);
    return (
        <div>
  <div className="bg-white shadow-lg mx-auto my-10 w-[700px]">
    <div>
    <img
                      src={user?.photoURL}
                      alt
                      className=" m-auto rounded-full object-cover lg:w-28 lg:h-28"
                    />
    </div>
    <div className="mb-2 mx-auto items-center gap-3">
    <h5 className=" text-black mt-4 text-xl text-center font-semibold  lg:block">
                      {user?.displayName}
                    </h5>
      
    </div>
    <p className="text-black  text-2xl text-center font-bold">
    Let's confirm your subscription and verify you!
    </p>
    <div className="flex items-center py-6">
        <button className="btn w-60  bg-yellow-400 mx-auto" type="button">Coutinue</button>
    </div>
    
  </div>
  {/* another card */}
  <div className="flex">
  <div className="bg-white shadow-lg mx-auto my-10 w-[400px]">
    <div className="flex mx-auto my-8">
    <img
                      src="https://i.ibb.co/VQY26DF/acc.jpg"
                      alt
                      className=" m-auto rounded-xl object-cover lg:w-28 lg:h-28"
                    />
                    <div className="mb-2 mx-auto items-center gap-3">
    <p className="text-black  text-2xl text-center font-bold">
  1
    </p>
    <h5 className=" text-black mt-4 text-xl text-center font-semibold  lg:block">
                      Accounts
                    </h5>
      
    </div>
    </div>
    
    
    
    
  </div>
  <div className="bg-white shadow-lg mx-auto my-10 w-[400px]">
    <div className="flex mx-auto my-8">
    <img
                      src="https://i.ibb.co/F8tPX1T/bal.jpg"
                      alt
                      className=" m-auto rounded-xl object-cover lg:w-28 lg:h-28"
                    />
                    <div className="mb-2 mx-auto items-center gap-3">
    <p className="text-black  text-2xl text-center font-bold">$ 0.00</p>
    <h5 className=" text-black mt-4 text-xl text-center font-semibold  lg:block">
                     Main Balance
                    </h5>
      
    </div>
    </div>
    
    
    
    
  </div>
  </div>
</div>

    );
};
>>>>>>> 5501a940e8a91ae8f9beccf1c9f09f9e2ab3a9a3

  const TodaysDate = dateTime().split(" ", 1)[0]

const axiosPublic=  UseAxiosPublic()
// axiosPublic.get(`/transaction/${TodaysDate}`)
// .then((res)=>{
  
//   setTransactionDate(res.data.length)
// })



axiosPublic.get("/api/user/count")
.then((res)=>{
  setCount(res.data.count)
})


  if (isPending) {
    return <>loading....................</>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
  <div>
  <div className="my-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3 mx-10">
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
      <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
          <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
          <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd" />
          <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
        </svg>
      </div>
      <div className="p-4 text-right">
        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">My Balance</p>
        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{data?.amount?.toFixed(2)} <span className="text-base">BDT</span></h4>
      </div>
      
    </div>


    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
      <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
          <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
          <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd" />
          <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
        </svg>
      </div>
      <div className="p-4 text-right">
        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">My Savings</p>
        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{data?.savings?.toFixed(2)} <span className="text-base">BDT</span></h4>
      </div>
      
    </div>


    
    
  </div>
</div>

)};

export default UserHome;
