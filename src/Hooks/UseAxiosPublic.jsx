import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://e-cash-server-mongoose.vercel.app"
    
})
const UseAxiosPublic = () => {
    return axiosPublic
    
};

export default UseAxiosPublic;