import{ useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { AuthContext } from "../../Components/Login/Firebase/AuthProvider";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const UserSavings = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = UseAxiosPublic();

  const [openSavingsModal, setOpenSavingsModal] = useState(false);
  const [openWithdrawModal, setOpenWithdrawModal] = useState(false);

  const onOpenSavingsModal = () => setOpenSavingsModal(true);
  const onCloseSavingsModal = () => setOpenSavingsModal(false);

  const onOpenWithdrawModal = () => setOpenWithdrawModal(true);
  const onCloseWithdrawModal = () => setOpenWithdrawModal(false);
  const email = user.email;

  const { isPending, isError, error, data,refetch } = useQuery({
    queryKey: ["data", email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/transaction/savings/${email}`);
      return res.json();
    },
  });
  





  const hendleSavings = (e) => {
    e.preventDefault();

    const saving = e.target.savings.value;

    axiosPublic
      .post(`/api/savings/${data?.user?.phoneNumber}`, { saving })
      .then((res) => {
        console.log(res.data);
        onCloseSavingsModal(false);
        refetch();
        
      });
  };

  const hendleWithdraw = (e) => {
    e.preventDefault();

    const saving = e.target.savings.value;

    axiosPublic
      .post(`/api/withdraw/${data?.user?.phoneNumber}`, { saving })
      .then((res) => {
        console.log(res.data);
        onCloseWithdrawModal(false);
        refetch();
      
      });
  };

  if (isPending ) {
    return <>loading....................</>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
  <div>
      <div className="my-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3  mx-10 items-center">
      <div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-6 h-6 text-white"
            >
              <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
              <path
                fillRule="evenodd"
                d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                clipRule="evenodd"
              />
              <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
            </svg>
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
              My Savings
            </p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
              {data?.user?.savings?.toFixed(2)} <span className="text-base">BDT</span>
            </h4>
          </div>
        </div>
      </div>

      <div className="flex gap-5">
        <div>
          <button onClick={onOpenSavingsModal} className="btn">
            Savings
          </button>

          <Modal open={openSavingsModal} onClose={onCloseSavingsModal} center>
            <form onSubmit={hendleSavings}>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Savings
                </label>
                <input
                  name="savings"
                  type="number"
                  placeholder="Enter Savings Amount"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <button className="btn">Savings</button>
            </form>
          </Modal>
        </div>

        <div>
          <button onClick={onOpenWithdrawModal} className="btn">
            Withdraw
          </button>

          <Modal open={openWithdrawModal} onClose={onCloseWithdrawModal} center>
            <form onSubmit={hendleWithdraw}>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Withdraw
                </label>
                <input
                  name="savings"
                  type="number"
                  placeholder="Enter Withdraw Amount"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <button className="btn">Withdraw</button>
            </form>
          </Modal>
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
        <th className="text-center border">Type</th>
        <th className="text-center border">Amount</th>
        
      </tr>
    </thead>
    <tbody>

     {
      data?.savingsTransactions?.map((data,index)=>
        <tr key={index}>

       
        <td className="text-center border">{index + 1}</td>
        <td className="text-center border">{data?.date?.split("T", 1)[0]}</td>
        <td className="text-center border">{data?.type}</td>
        <td className="text-center border ">{data?.amount}</td>

      </tr>
      )
     }

    </tbody>
 
  </table>
</div>


  </div>



  );
};

export default UserSavings;
