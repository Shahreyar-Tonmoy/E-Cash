const CBanner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(https://i.ibb.co/zFTNScn/cbanner.jpg)` }}
      >
        <div className="hero-overlay bg-black bg-opacity-30"></div>
        <div className="hero-content text-left text-neutral-content">
          <div className="lg:w-full lg:mr-[800px]">
            <div>
              <h2 className=" text-2xl font-bold text-white  ">Feel free to</h2>
              <h2 className=" text-5xl mt-5 font-bold text-white  ">
                Contact Us
              </h2>
              <div className="border w-1/2 my-8"></div>
              <p className="text-lg">
                Please contact{" "}
                <span className="font-semibold">support@e-cash.com</span> for
                all inquiries.
              </p>
              <p className="text-lg">or Call our numbers –</p>

              <p className="text-lg">Bangladesh: +880 1 XXXXXXXXX </p>
              <p className="text-lg">WhatsApp: +880 1 XXXXXXXX </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CBanner;
