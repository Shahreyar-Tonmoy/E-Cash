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
            <BankingSection></BankingSection>
            <BankAccount></BankAccount>
            <DebitCard></DebitCard>
            <MoneyTransfer></MoneyTransfer>
            <GetStarted></GetStarted>
        </div>
    );
};

export default DigitalBankingHome;