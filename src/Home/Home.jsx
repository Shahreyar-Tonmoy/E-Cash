
import Hero from "../Components/Banner Slider/Hero";
import CurrencyCalculator from "../Components/Currency Calculator/CurrencyCalculator";

import EBusiness from "../Components/EBusiness/EBusiness";
import FAQ from "../Components/FAQ/FAQ";
import UserCounter from "../Components/User Counter/UserCounter";


import Zakat from "../Components/Zakat/Zakat";

const Home = () => {
  return (
    <div>
      {/* <HeroSlider></HeroSlider> */}
      <Hero></Hero>
      <Zakat></Zakat>
      <CurrencyCalculator></CurrencyCalculator>
      <EBusiness></EBusiness>
      <UserCounter></UserCounter>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
