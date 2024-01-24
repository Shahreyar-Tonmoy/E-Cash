import EBusinessCard from "../EBusiness/EBusinessCard";




const DebitCard = () => {
  const image = "https://i.ibb.co/C1y2tTv/bank5-removebg-preview.png";

  const title2 = "E-Cash Mastercard";
  const title1 = "Debit Card";
  const details = "A debit card is a payment card that deducts funds directly from a linked bank account, enabling cardholders to make purchases, withdraw cash, and conduct electronic transactions."

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

export default DebitCard;
