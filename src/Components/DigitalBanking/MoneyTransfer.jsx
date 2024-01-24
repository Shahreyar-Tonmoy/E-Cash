import EBusinessCard2 from "../EBusiness/EBusinessCard 2";






const MoneyTransfer = () => {
    const image = "https://i.ibb.co/2tFBNv1/Instant-Money-to-Bangladesh-1-removebg-preview.png";

  const title2 = "Transfer Money worldwide";
  const title1 = "Transferring Money";
  const details = "Transfer money worldwide involves sending funds across international borders, often facilitated by financial institutions or online platforms, to recipients in different countries.";

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

export default MoneyTransfer;