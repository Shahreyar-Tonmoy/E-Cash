import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://e-cash-server.vercel.app"
    
})
const UseAxiosPublic = () => {
    return axiosPublic
    
};

export default UseAxiosPublic;