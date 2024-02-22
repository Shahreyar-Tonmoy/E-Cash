/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div>
      <div
        className=" hero h-[70vh] mt-32"
        style={{ backgroundImage: "url(https://i.ibb.co/dkp5DfD/stair.jpg)" }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>

        <div className="mx-10">
          <div className="lg:hero-content text-neutral-content lg:flex lg:justify-between items-center lg:gap-96">
            {/* left side content */}
            <div className="max-w-md text-left">
              <img
                className="w-10"
                src="https://i.ibb.co/qjwhbp6/bank8.png"
                alt=""
              />
              <p className="my-5 font-semibold lg:text-xl text-white">
                Experience Digital Banking
              </p>
              <h1 className="mb-5 lg:text-5xl text-3xl font-Ubuntu font-bold text-white">
                Let's Get Started
              </h1>
              <h2 className="text-white">
                Your data is safe. It won’t affect your credit score!
              </h2>
            </div>
            {/* right side content  */}
            <Link to={"/signUp"}>
              <button className="btn px-20 rounded-3xl mt-10 lg:mt-0 bg-transparent hover:bg-transparent border hover:border-violet-900 border-white text-white  text-right">
                Sign Up For Free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
