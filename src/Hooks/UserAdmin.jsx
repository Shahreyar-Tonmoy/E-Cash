import { useContext } from "react";

import UseAxios from "./UseAxios";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Components/Login/Firebase/AuthProvider";


const UserAdmin = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = UseAxios()
    const {data: isAdmin,isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, "isAdmin"],
        enabled: !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async()=>{
            const res = await axiosSecure.get(`/user/admin/${user?.email}`)
            
            return res.data?.admin
        }

    })

    

    // console.log(isAdmin);
     return [isAdmin,isAdminLoading]

};

export default UserAdmin;