import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { AuthContext } from "../../Components/Login/Firebase/AuthProvider";

const UserSavings = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = UseAxiosPublic();
  const saving = "100"
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["data", "user"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/${user?.email}`);
      return res.json();
    },
  });


  const hendleSavings = () => {
    axiosPublic
      .post(`/api/savings/${data.phoneNumber}`, {saving})
      .then((res) => {
        console.log(res.data)
      });
  };
  const hendleWithDraw = () => {
    axiosPublic
      .post(`/api/withdraw/${data.phoneNumber}`, {saving})
      .then((res) => {
        console.log(res.data)
      });
  };



  if (isPending) {
    return <>loading....................</>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <button onClick={hendleSavings} className="btn btn-primary">
        Savings
      </button>
      <button onClick={hendleWithDraw} className="btn btn-primary">
        withdraw
      </button>
    </div>
  );
};

export default UserSavings;
