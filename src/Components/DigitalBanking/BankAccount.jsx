import EBusinessCard2 from "../EBusiness/EBusinessCard 2";

const BankAccount = () => {
  const image = "https://i.ibb.co/jLcZSMj/bank2-removebg-preview.png";

  const title2 = "Link your Bank and load money";
  const title1 = "Bank Account";
  const details = "A bank account is a financial arrangement with a bank that allows individuals or businesses to deposit, withdraw, and manage their money, often offering various services such as savings, checking, and electronic transactions.";

  return (
    <div>
      <EBusinessCard2
        image={image}
        title={title2}
        header={title1}
        details={details}
        disabled="hidden"
      ></EBusinessCard2>
    </div>
  );
};

export default BankAccount;
