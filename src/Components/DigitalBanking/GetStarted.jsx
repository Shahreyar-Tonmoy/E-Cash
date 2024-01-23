/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";

const GetStarted = () => {
    return (
        <div>
            <div className=" hero h-[70vh]" style={{ backgroundImage: 'url(https://i.ibb.co/dkp5DfD/stair.jpg)' }}>
                <div className="hero-overlay bg-opacity-40"></div>

                <div>
                    <div className="hero-content  text-neutral-content lg:flex justify-between items-center lg:gap-96">
                    {/* left side content */}
                    <div className="max-w-md text-left">
                        <img className="w-10px" src="https://i.ibb.co/qjwhbp6/bank8.png" alt="" />
                        <p className="mb-5 text-3xl text-white">Experience Digital Banking</p>
                        <h1 className="mb-5 text-5xl font-bold text-white">Let's Get Started</h1>
                        <h2 className="text-white">Your data is safe. It won’t affect your credit score!</h2>
                    </div>
                    {/* right side content  */}
                    <Link to={"/signUp"}><button className="btn bg-gradient-to-r from-[#19123E]  to-[#040C3A] text-white border-none text-right">Sign Up</button></Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;