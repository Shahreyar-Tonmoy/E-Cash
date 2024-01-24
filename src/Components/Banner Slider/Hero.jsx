
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div>
        <div
      className="hero min-h-screen "
      style={{
        backgroundImage:
          "url(https://i.ibb.co/cJGr4rj/Purple-Creative-We-re-Digital-Marketing-Expert-Banner.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="text-neutral-content max-w-screen-xl mx-auto">
        <div className="lg:flex lg:ml-32">
          <div className=" ">
            <h1 className="lg:text-5xl mt-10 lg:mt-0 text-4xl text-center font-Kanit lg:text-start font-bold">
              The New E-Cash App Is 
              <span className="mt-5"> Available Soon</span>
            </h1>
            <div className="flex items-center justify-center lg:justify-start mt-5 gap-2 text-violet-900 hover:underline">
            <h1 className="text-lg font-Ubuntu  lg:text-start text-center cursor-pointer  font-semibold">
              Learn more about the new features
            </h1>
            <span className="hover:translate-x-2 transition-transform "><FaArrowRightLong /></span>
            </div>
            

            <h1 className="text-2xl lg:border-b lg:w-fit text-center lg:text-start mt-5   font-semibold">
              Scan the code for more details.
            </h1>
            <div>
              <div className="flex items-center justify-center lg:justify-start mt-16">
                <div className="flex items-center">
                  <img
                    className="w-32 "
                    src="https://i.ibb.co/y6fHyZS/Untitled-1-2.png"
                    alt=""
                  />
                  <div className="divider lg:mx-5  divider-horizontal"></div>
                </div>

                <div className="flex flex-col justify-start">
                    <Link to={"/signUp"}><button className="btn bg-transparent text-violet-950 hover:bg-transparent hover:border-violet-950 rounded-2xl border-violet-950 mb-3 border">Register</button></Link>
                    <h1>Register to experience</h1>
                </div>


              </div>
            </div>
          </div>

          <div className="lg:w-[1200px] my-10 lg:my-0">
            <img
              className="object-cover"
              src="https://i.ibb.co/dPc3Mwc/6594622.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <div className="border-b ">
    <div className="lg:flex gap-2 my-10 items-center justify-center">
    <h1 className="text-center  text-xl font-semibold">Need to connect E-Cash with your online store?
    </h1>
    <div className="flex items-center justify-center gap-2">
    <span className="text-violet-800 text-xl font-semibold">Sign up for a Agent account</span>
    <FaArrowRightLong className="text-violet-900" />
    </div>
    
    </div>
    

    </div>


    </div>
  );
};

export default Hero;
