import Hero from "../Components/Banner Slider/Hero";

import CurrencyCalculator from "../Components/Currency Calculator/CurrencyCalculator";

import EBusiness from "../Components/EBusiness/EBusiness";
import FAQ from "../Components/FAQ/FAQ";
import UserCounter from "../Components/User Counter/UserCounter";

import Zakat from "../Components/Zakat/Zakat";

import MessengerCustomerChat from "react-messenger-customer-chat";

const Home = () => {
  return (
    <div>
      <MessengerCustomerChat pageId="250334491490670" appId="688993626777625" />

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
