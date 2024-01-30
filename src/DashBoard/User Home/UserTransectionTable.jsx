/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";




const UserTransectionTable = ({ data, From }) => {
    const amount = parseInt(data.amounts);

 
    const [charge, setCharge] = useState("")
  
  useEffect(()=>{
      if (data.type === "Cash Out") {
          const sum =((amount * 4) / 1000);
          setCharge(sum);
          
        }
  },[amount,data.type])

  return (
    <tr>
      <td>{data.from[0].phoneNumber}</td>
      <td>{From}</td>
      <td>{data?.createdAt.split("T", 1)[0]}</td>

      <td>{amount}{ data.type === "Cash Out" &&
                    <span>+{charge}</span>
                }</td>
      <td>{data?.type}</td>
      <td>{data?.transactionId}</td>
    </tr>
  );
};

export default UserTransectionTable;
