import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import swal from "sweetalert";

const AcceptAgentDeposit = () => {
  const axiosPublic = UseAxiosPublic();

  const { isPending, isError, error, data,refetch } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await fetch(`https://e-cash-server-mongoose.vercel.app/api/agent/deposits`);
      return res.json();
    },
  });
  if (isPending) {
    return <>loading....................</>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const handleAccept = (id,Amount) => {
    const amount ={ Amount}

   
    axiosPublic.post(`/deposits/${id}/accept`,amount).then((res)=>{
      console.log(res.data)
      if(res.data){
        swal("Wow!", "Deposit accept successfully!", "success");

      }
      refetch()
    })
  };
  const handleReject = (id) => {

   
    axiosPublic.put(`/deposits/${id}/reject`).then((res)=>{
      console.log(res.data)
      if(res.data){
        swal("Good!", "Deposit reject successfully!", "success");

      }
      refetch()
    })
  };



  return (
    <div>
      <div className="text-gray-900 ">
        <div className="p-4 flex">
          <h1 className="text-3xl">Accept Agent Deposit</h1>
        </div>
        <div className="px-3 py-4 flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
              <tr className="border-b">
                <th className="text-center p-3 px-5">No.</th>
                <th className="text-center p-3 px-5">Name</th>
                <th className="text-center p-3 px-5">Email</th>
                <th className="text-center p-3 px-5">Role</th>
                <th className="text-center p-3 px-5">Deposit Amount</th>
                <th className="text-center p-3 px-5">Action</th>
                <th />
              </tr>
             {
              data.length > 0 && <> {data?.map((data, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-orange-100 bg-gray-100"
                >
                  <td className="p-3 text-center px-5">{index + 1}</td>
                  <td className="p-3 text-center px-5">{data?.agentId?.name}</td>
                  <td className="p-3 text-center px-5">{data?.agentId?.email}</td>
                  <td className="p-3 text-center px-5">{data?.agentId?.role}</td>
                  <td className="p-3 text-center px-5">{data?.depositAmount}</td>
                  <td className="p-3 px-5 flex justify-center">
                    <button
                      onClick={() => handleAccept(data?._id,data.depositAmount)}
                     
                      type="button"
                      className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Accept
                    </button>
                    <button 
                     onClick={() => handleReject(data?._id,data)}
                      type="button"
                      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}</>
             }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AcceptAgentDeposit;
