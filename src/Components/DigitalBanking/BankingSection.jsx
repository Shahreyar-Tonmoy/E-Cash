// const BankingSection = () => {
//     return (
//         <div>

//             <div className="max-w-screen-lg mx-auto pt-4 pb-4">
//                 <div className="flex flex-col items-center lg:flex-row">
//                     <div className="lg:w-1/3 p-4">
//                         <img src="https://i.ibb.co/hXZpLRV/bank1.jpg" className="w-full rounded-lg shadow-2xl" alt="Digital Banking Service" />
//                     </div>
//                     <div className="lg:w-2/3 p-4 space-y-8">
//                         <h1 className="text-xl text-amber-500 lg:text-2xl xl:text-3xl font-bold">Banking</h1>
//                         <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold">Fully Digital Banking</h1>
//                         <h3 className=" font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, cumque sit totam odit similique repellendus! Nemo  adipisicing elit. Consequatur, cumque sit totam odit similique repellendus! Nemo </h3>
//                         <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatibus quidem amet sint dolorum ea fugit, eveniet repudiandae mollitia quod quibusdam officia placeat iure tempora autem, perferendis sapiente dolorem sequi.</p>
//                         <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatibus quidem amet sint dolorum ea fugit, eveniet repudiandae mollitia quod quibusdam officia placeat iure tempora autem, perferendis sapiente dolorem sequi.</p>
//                         <p className="">Lorem ipsum dolor sit amet consectetur adipisicing  perferendis sapiente dolorem sequi.</p>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BankingSection;

import EBusinessCard from "../EBusiness/EBusinessCard";

const BankingSection = () => {
  const image = "https://i.ibb.co/DghxSn9/bank1-removebg-preview.png";

  const title2 = "Fully Digital Banking";
  const title1 = "Banking";
  const details = "Fully digital banking refers to financial institutions that operate entirely online, providing customers with digital services such as account management, transactions, and customer support without the need for physical branches.";

  return (
    <div>
      <EBusinessCard
        image={image}
        title={title2}
        header={title1}
        details={details}
        disabled="hidden"
      ></EBusinessCard>
    </div>
  );
};

export default BankingSection;
