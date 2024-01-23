
import { FaArrowRightLong } from "react-icons/fa6";


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
        <div className="flex ml-32">
          <div className=" ">
            <h1 className="text-5xl font-Kanit text-start font-bold">
              The New E-Cash App Is 
              <span className="mt-5"> Available Soon</span>
            </h1>
            <div className="flex items-center mt-5 gap-2 text-violet-900 hover:underline">
            <h1 className="text-xl font-Ubuntu  text-start cursor-pointer  font-semibold">
              Learn more about the new features
            </h1>
            <span className="hover:translate-x-2 transition-transform "><FaArrowRightLong /></span>
            </div>

            <h1 className="text-2xl border-b w-fit text-start mt-5   font-semibold">
              Scan the code for more details.
            </h1>
            <div>
              <div className="flex items-center mt-16">
                <div className="flex items-center ">
                  <img
                    className="w-32 "
                    src="https://i.ibb.co/qybf9jY/Untitled-1-1.png"
                    alt=""
                  />
                  <div className="divider  lg:divider-horizontal"></div>
                </div>

                <div className="flex flex-col justify-start">
                    <button className="btn bg-transparent text-violet-950 hover:bg-transparent hover:border-violet-950 rounded-2xl border-violet-950  border">Register</button>
                    <h1>Register to experience</h1>
                </div>


              </div>
            </div>
          </div>

          <div className="w-[1200px]">
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
    <div className="flex gap-2 my-10 items-center justify-center">
    <h1 className="text-center  text-xl font-semibold">Need to connect E-Cash with your online store? <span className="text-violet-800">Sign up for a Agent account</span></h1>
    <FaArrowRightLong className="text-violet-900" />
    </div>
    

    </div>


    </div>
  );
};

export default Hero;
