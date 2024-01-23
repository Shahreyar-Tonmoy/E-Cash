
const BankingBanner = () => {
    return (


        <div className="relative h-screen flex items-center ">
            <div className=" text-white z-10 mx-8">
                <h1 className="text-2xl text-black lg:text-3xl xl:text-4xl font-bold">Everything you need for</h1>
                <h1 className="text-4xl text-black lg:text-5xl xl:text-6xl font-bold">Digital Banking Service</h1>
                <hr className=" w-2/5 text-3xl border-6 border-black border-top-width: 2px " />
                <p className="py-6 text-black max-w-2xl text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatibus quidem amet sint dolorum ea fugit, eveniet repudiandae mollitia quod quibusdam officia placeat iure tempora autem, perferendis sapiente dolorem sequi! Hic possimus nam amet libero? Delectus velit, dolore, saepe a non porro vitae impedit dolores ea libero nihil hic ipsa tempora nobis fugit itaque harum iure nam qui accusantium dolor asperiores veritatis! Laborum qui error tenetur iusto. Deserunt, hic itaque.</p>
            </div>
            <img src="https://i.ibb.co/JQXfMc3/banking-service.jpg" className="absolute inset-0 w-full h-full object-cover opacity-80 " alt="Digital Banking Service" />
        </div>

    );
};

export default BankingBanner;