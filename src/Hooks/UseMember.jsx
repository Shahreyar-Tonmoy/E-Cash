/* eslint-disable no-unused-vars */
import { useContext } from "react";

import UseAxios from "./UseAxios";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Components/Login/Firebase/AuthProvider";


const UserMember = () => {
    const {user,loading} = useContext(AuthContext)
    const axiosSecure = UseAxios()
    const {data: isMember} = useQuery({
        queryKey: [user?.email, "isMember"],
        enabled: !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async()=>{
            const res = await axiosSecure.get(`/user/agent/${user?.email}`)
            
            return res?.data?.agent
        }

    })

    

    // console.log(isAdmin);
     return [isMember]

};

export default UserMember;