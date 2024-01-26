
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/Login/Firebase/AuthProvider";
import AgentTransactionTable from "./AgentTransactionTable";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const AgentTransaction = () => {
  const { user } = useContext(AuthContext);

const axiosPublic = UseAxiosPublic()

const { data: userData } = useQuery({
  queryKey: ['user', user.email],
  queryFn: () => axiosPublic.get(`/users/${user.email}`).then((res) => res.data),
});


const { data: agentTransactionData ,isPending, isError, error } = useQuery({
  queryKey: ['agentTransaction', userData?.PhoneNumber],
  queryFn: () => axiosPublic.get(`/get/agent/transaction/${userData?.PhoneNumber}`).then((res) => res.data),
  enabled: !!userData?.PhoneNumber,
});

const renderData = agentTransactionData && Array.isArray(agentTransactionData) ? agentTransactionData : [];



if (isPending) {
  return <>loading....................</>;
}

if (isError) {
  return <span>Error: {error.message}</span>
}



  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>

            {renderData?.map(({_id, ...data}) => <AgentTransactionTable key={_id} data={data} />)}


          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default AgentTransaction;
