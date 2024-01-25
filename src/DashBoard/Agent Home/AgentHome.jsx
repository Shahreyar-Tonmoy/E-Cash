import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Components/Login/Firebase/AuthProvider";

const AgentHome = () => {

    const {user} = useContext(AuthContext)


  const { isPending, isError, error, data } = useQuery({
    queryKey: ["data","user"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/${user.email}`);
      return res.json();
    },
  });

  
console.log(data);

  if (isPending) {
    return <>loading....................</>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return <div></div>;
};

export default AgentHome;
