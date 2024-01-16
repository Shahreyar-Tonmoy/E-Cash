

const CBanner = () => {
    return (
        <div>
        <div className="hero h-[75vh]"
          style={{ backgroundImage: "url(https://i.ibb.co/zFTNScn/cbanner.jpg)" }}>
          <div className="hero-overlay bg-opacity-60">
          </div>
           <div className="flex justify-around">
           <div >
              <h4 className="font-bold text-2xl text-white">Feel free to</h4>
              <h2 className=" text-5xl font-bold text-white  ">
              Contact Us
              </h2>
            <hr className="m-4" />
              <p className=" text-xl text-white ">
              Please contact for all inquiries. 
              <br/>
                or Call our numbers –
              </p>
              <p className=" text-xl text-white ">
              Bangladesh:  +880 1315000207
               <br/>
              <span className=" text-xl text-white font-semibold"> WhatsApp: </span> +880 1315000207
              </p>
              <button className=" m-3 btn btn-primary">
              Learn how to use our system!
              </button>
            </div>
            <div>

            </div>
           </div>
          </div>
        </div>
    );
  };

export default CBanner;