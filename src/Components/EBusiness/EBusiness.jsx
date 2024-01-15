import EBusinessCard from "./EBusinessCard";

const EBusiness = () => {

    const cardData = [
        { imageUrl: 'https://i.ibb.co/ydL0GXN/5.jpg', title: 'Card 1' },
        { imageUrl: 'https://i.ibb.co/ydL0GXN/5.jpg', title: 'Card 2' },
        { imageUrl: 'https://i.ibb.co/ydL0GXN/5.jpg', title: 'Card 3' },
        { imageUrl: 'https://i.ibb.co/ydL0GXN/5.jpg', title: 'Card 4' },

    ];

    return (
        <div>
            <h1 className=" text-4xl font-bold mt-4 mb-4 text-center">E-Cash For Business</h1>
            <p className=" text-center mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem iusto asperiores, eveniet praesentium repudiandae tempora quidem modi, id blanditiis, quaerat qui quam possimus eum. Ea voluptatem autem accusamus beatae quaerat nostrum ratione nemo facilis commodi saepe dolorem iure dolorum repellendus adipisci perferendis sit sapiente vitae, ducimus provident nesciunt modi! Dolorem fugiat vero accusamus, corrupti perferendis neque sint.</p>
            <div className=" flex flex-row items-center">
                <div className="flex flex-wrap justify-center">
                    {cardData.map((card, index) => (
                        <EBusinessCard key={index} imageUrl={card.imageUrl} title={card.title} />
                    ))}
                </div>
                <div>
                    <img src="https://i.ibb.co/4st2Ys3/emp.jpg" alt="" />
                </div>
            </div>
        </div>

    );
};

export default EBusiness;