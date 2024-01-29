/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/Login/Firebase/AuthProvider";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import dateTime from "date-time";


const AgentHome = () => {
  const { user } = useContext(AuthContext);
const [count,setCount] = useState(0)
const [transactionDate,setTransactionDate] = useState(0)
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["data", "user"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/${user.email}`);
      return res.json();
    },
  });

  const TodaysDate = dateTime().split(" ", 1)[0]

const axiosPublic=  UseAxiosPublic()
axiosPublic.get(`/transaction/${TodaysDate}`)
.then((res)=>{
  
  setTransactionDate(res.data.length)
})



axiosPublic.get("/api/count")
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
        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{data.amount} <span className="text-base">BDT</span></h4>
      </div>
      {/* <div className="border-t border-blue-gray-50 p-4">
        <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
          <strong className="text-green-500">+55%</strong>&nbsp;than last week
        </p>
      </div> */}
    </div>
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
      <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="p-4 text-right">
        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Users</p>
        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{count}</h4>
      </div>
      {/* <div className="border-t border-blue-gray-50 p-4">
        <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
          <strong className="text-green-500">+3%</strong>&nbsp;than last month
        </p>
      </div> */}
    </div>
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
      <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
          <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
        </svg>
      </div>
      <div className="p-4 text-right">
        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Today's Transaction</p>
        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{transactionDate}</h4>
      </div>
      {/* <div className="border-t border-blue-gray-50 p-4">
        <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
          <strong className="text-red-500">-2%</strong>&nbsp;than yesterday
        </p>
      </div> */}
    </div>
  </div>
</div>

)};

export default AgentHome;
