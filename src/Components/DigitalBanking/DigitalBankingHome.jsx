import BankAccount from "./BankAccount";
import BankingBanner from "./BankingBanner";
import BankingSection from "./BankingSection";
import DebitCard from "./DebitCard";
import GetStarted from "./GetStarted";
import MoneyTransfer from "./MoneyTransfer";

const DigitalBankingHome = () => {
  return (
    <div>
      <BankingBanner></BankingBanner>
      <div className="max-w-screen-lg mx-auto px-5">
        <BankingSection></BankingSection>
        <BankAccount></BankAccount>
        <DebitCard></DebitCard>
        <MoneyTransfer></MoneyTransfer>
      </div>
      
      <GetStarted></GetStarted>
    </div>
  );
};

export default DigitalBankingHome;
