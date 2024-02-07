/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";


const AgentTransactionTable = ({data,From}) => {
    const amount = parseInt(data.amounts);
    const [charge, setCharge] = useState("")
  
  useEffect(()=>{
      if (data.type === "Cash Out") {
          const sum = ((amount * 14) / 1000);
          setCharge(sum);
          
        }
  },[amount,data.type])
  
    
    return (
        <tr>
                <td>{From}</td>
                <td>{data.to[0].phoneNumber}</td>
                <td>{data?.createdAt.split("T", 1)[0]}</td>
                <td>{data?.amounts} { data.type === "Cash Out" &&
                    <span>+{charge} vat</span>
                }</td>
                <td>{data?.type}</td>
                <td>{data?.transactionId}</td>
                
              </tr>
    );
};

export default AgentTransactionTable;