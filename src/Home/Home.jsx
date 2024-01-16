import Answer from "../Components/Answer/Answer";

import HeroSlider from "../Components/Banner Slider/HeroSlider";
// import DigitalBankingHome from "../Components/DigitalBanking/DigitalBankingHome";
import EBusiness from "../Components/EBusiness/EBusiness";

const Home = () => {
    return (
        <div>
           
            <HeroSlider></HeroSlider>
            <EBusiness></EBusiness>
            <Answer></Answer>
            {/* <DigitalBankingHome></DigitalBankingHome> */}
        </div>
    );
};

export default Home;
