
import  { useContext } from 'react';

// import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import UseAxiosPublic from '../../Hooks/UseAxiosPublic';
import { AuthContext } from './Firebase/AuthProvider';

const Social = () => {
    const { SignInWithGoogle } = useContext(AuthContext)
    const axiosPublic =UseAxiosPublic()
    const navigate = useNavigate()
    

    const hendleGoogle = () => {

        SignInWithGoogle()
            .then(result => {
                const users = (result.user)
                

                const userData ={
                    Name: users?.displayName,
                    Email: users?.email,
                    Role: "user"
                }
                

                axiosPublic.post("/users",userData)
                .then(res =>{
                    if(res.data.insertedId){
                        swal("Good job!", "You are sign in with google!", "success");
                

                
                navigate( "/")

                    }
                    else{
                        swal("Good job!", "You are sign in with google & Data Base!", "success");
                

                
                navigate( "/")
                    }
                
                console.log(res.data);
                })



               

            })
            .catch(error => {
                console.log(error.massage);
                if (error.massage) {
                    swal("Error!", `{${error.massage}}`, "error");
                }
            });

    }




    return (
        <div>
            <h1 className="text-center text-2xl text-white font-semibold">or</h1>
          <span className="flex justify-center items-center mt-4 mb-10  gap-1">
          <h1 onClick={hendleGoogle} className="text-2xl cursor-pointer">
              <span className="text-[#4285F4] font-semibold">G</span>
              <span className="text-[#EA4335] font-semibold">o</span>
              <span className="text-[#FBBC05] font-semibold">o</span>
              <span className="text-[#4285F4] font-semibold">g</span>
              <span className="text-[#34A853] font-semibold">l</span>
              <span className="text-[#EA4335] font-semibold">e</span>
            </h1>
          </span>
            
            
        </div>
    );
};

export default Social;