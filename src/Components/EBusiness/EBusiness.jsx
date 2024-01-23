import EBusinessCard from "./EBusinessCard";

const EBusiness = () => {

    const cardData = [
        { imageUrl: 'https://i.ibb.co/XtbXnxS/download.jpg', title: 'Send Money' },
        { imageUrl: 'https://i.ibb.co/Lgc6vr3/download.png', title: 'Cash Out' },
        { imageUrl: 'https://i.ibb.co/D4hdc9C/download.jpg', title: 'Cash In' },
        { imageUrl: 'https://i.ibb.co/TchM0tj/download.png', title: 'Savings' },

    ];

    return (
        <div className="max-w-screen-lg mt-16 mx-auto">
            <h1 className=" text-4xl font-bold mt-4 mb-10 text-center">E-Cash For Business</h1>
            <p className=" text-center mb-4"></p>
            <div className=" lg:flex flex-row items-center">
                <div className="flex flex-wrap justify-center">
                    {cardData.map((card, index) => (
                        <EBusinessCard key={index} imageUrl={card.imageUrl} title={card.title} />
                    ))}
                </div>
                <div>
                    <img className="w-[700px]  " src="https://i.ibb.co/4WCbYXb/download.png" alt="" />
                </div>
            </div>
        </div>


    );
};

export default EBusiness;