/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Components/Login/Firebase/AuthProvider";
import { useContext } from "react";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";

const AgentDeposit = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = UseAxiosPublic()

  const userQuery = useQuery({
    queryKey: ["data", "user"],
    queryFn: async () => {
      const res = await fetch(`https://e-cash-server-mongoose.vercel.app/users/${user.email}`);
      return res.json();
    },
  });

  const historyQuery = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await fetch(`https://e-cash-server-mongoose.vercel.app/api/get/agent/deposits/${userQuery.data?._id}`);
      return res.json();
    },
    enabled: Boolean(userQuery.data),
  });

  const handleDeposit = (e) => {
    e.preventDefault();

    const deposit = e.target.deposit.value;

    const depositData = {
      agentId: userQuery.data?._id,
      depositAmount: parseFloat(deposit),
    };

    axiosPublic.post("/agent/deposits", depositData)
      .then((res) => {
        console.log(res.data);
        historyQuery.refetch()
        e.target.reset()
      });
  };

  // Check loading and error states
  if (userQuery.isLoading || historyQuery.isLoading) {
    return <>Loading...</>;
  }

  if (userQuery.isError || historyQuery.isError) {
    return <span>Error: {userQuery.error?.message || historyQuery.error?.message}</span>;
  }

  // Access data from queries
  const userData = userQuery.data;
  const historyData = historyQuery.data;
 

  return (
    <div>
      <div className="my-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3  mx-10 items-center">
        

        <div className="flex gap-5">
          <div>
            <form onSubmit={handleDeposit} className="flex gap-3 items-center">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                Deposit
                </label>
                <input
                  name="deposit"
                  type="number"
                  placeholder="Enter Deposit Amount"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <button className="btn mt-3">Deposit</button>
            </form>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto h-96 mx-10">
        <table className="table">
          {/* head */}
          <thead className="sticky -top-1 z-20 bg-slate-200">
            <tr>
              <th className="text-center border ">No.</th>
              <th className="text-center border ">Date</th>
              <th className="text-center border">Status</th>
              <th className="text-center border">Deposit Amount</th>
            </tr>
          </thead>
          <tbody>
            
     {
      historyData?.map((data,index)=>
        <tr key={index}>

       
        <td className="text-center border">{index + 1}</td>
        <td className="text-center border">{data?.createdAt?.split("T", 1)[0]}</td>
        <td className="text-center border">{data?.status}</td>
        <td className="text-center border ">{data?.depositAmount}</td>

      </tr>
      )
     }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgentDeposit;
