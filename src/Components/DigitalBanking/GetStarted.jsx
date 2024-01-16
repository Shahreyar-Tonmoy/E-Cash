
const GetStarted = () => {
    return (
        <div>
            <div className=" hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/dkp5DfD/stair.jpg)' }}>
                <div className="hero-overlay bg-opacity-40"></div>

                <div className="hero-content text-neutral-content flex justify-between items-center gap-96">
                    {/* left side content */}
                    <div className="max-w-md text-left">
                        <img className="w-10px" src="https://i.ibb.co/qjwhbp6/bank8.png" alt="" />
                        <p className="mb-5 text-3xl text-white">Experience Digital Banking</p>
                        <h1 className="mb-5 text-5xl font-bold text-white">Let's Get Started</h1>
                        <h2 className="text-white">Your data is safe. It won’t affect your credit score!</h2>
                    </div>
                    {/* right side content  */}
                    <button className="btn btn-primary text-right">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;