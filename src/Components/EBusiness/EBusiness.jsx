import { Link } from "react-router-dom";
import EBusinessCard from "./EBusinessCard";
import EBusinessCard2 from "./EBusinessCard 2";

const EBusiness = () => {

    const image1="https://i.ibb.co/gSmZd0J/6876361.webp"
    const image2="https://i.ibb.co/6JPNmtp/7361893.webp"
    const image3="https://i.ibb.co/6HK1PSH/crypto-img-removebg-preview.png"
    const image4="https://i.ibb.co/q5fTnQq/give-img-removebg-preview.png"

    const title1 ="Instantly Calculate Exchange Rates with Precision"
    const title2 ="Touch-free transaction"
    const title3 ="Check out with E-Cash"
    const title4 ="Give with E-Cash"

    const details1 ="Streamline your currency conversions effortlessly with our intuitive calculator. Access up-to-date exchange rates for diverse currencies, ensuring accuracy in every transaction. Whether for travel, business, or personal finance, our tool simplifies the process, making it easy to stay informed and make informed decisions."

    const details2 ="Enable touch-free transactions for a secure and hygienic experience. Our innovative technology allows seamless payments without physical contact, ensuring safety in every transaction. Embrace the future of convenient and contactless financial interactions."

    const details3 ="Streamline your checkout process with E-Cash, the modern digital currency solution. Enjoy swift and secure transactions, eliminating the need for physical cash. Experience the future of payments for a seamless and efficient checkout."

    const details4 ="Empower your giving with E-Cash, the digital currency for seamless donations. Contribute effortlessly and securely to causes you care about. Embrace the ease of electronic giving for a more efficient and impactful philanthropic experience."

    const link1 = "/currencycalculator"
    const link2 = "/dashBoard"
    const link3 = "/signIn"
    const link4 = "/signUp"

    const linkName1 = "Currency Calculator"
    const linkName2 = "DashBoard"
    const linkName3 = "Sign In"
    const linkName4 = "Sign Up"
    


  return (
    <div className="max-w-screen-lg mx-auto px-5">
      <EBusinessCard image={image1} title={title1} details={details1} link={link1} linkName={linkName1}></EBusinessCard>
      <EBusinessCard2 image={image2} title={title2} details={details2} link={link2} linkName={linkName2}></EBusinessCard2>
      <EBusinessCard image={image3} title={title3} details={details3} link={link3} linkName={linkName3}></EBusinessCard>
      <EBusinessCard2 image={image4} title={title4} details={details4} link={link4} linkName={linkName4}></EBusinessCard2>
    </div>
  );
};

export default EBusiness;
