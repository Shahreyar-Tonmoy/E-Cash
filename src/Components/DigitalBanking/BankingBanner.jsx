
const BankingBanner = () => {
    return (
        // <div className=" bg-base-200">
        //     <div className="flex flex-col lg:flex-row">
        //         <div className="lg:w-1/2 p-4">
        //             <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">Everything you need for</h1>
        //             <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold">Digital Banking Service</h1>
        //             <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatibus quidem amet sint dolorum ea fugit, eveniet repudiandae mollitia quod quibusdam officia placeat iure tempora autem, perferendis sapiente dolorem sequi! Hic possimus nam amet libero? Delectus velit, dolore, saepe a non porro vitae impedit dolores ea libero nihil hic ipsa tempora nobis fugit itaque harum iure nam qui accusantium dolor asperiores veritatis! Laborum qui error tenetur iusto. Deserunt, hic itaque.</p>
        //             <button className="btn btn-primary">Get Started</button>
        //         </div>
        //         <div className="lg:w-1/2 p-4">
        //             <img src="https://i.ibb.co/k8sxGmj/banner.jpg" className="w-full rounded-lg shadow-2xl" alt="Digital Banking Service" />
        //         </div>
        //     </div>
        // </div>

        // <div className="relative h-screen">
        //     <img src="https://i.ibb.co/k8sxGmj/banner.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Digital Banking Service" />
        //     <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        //         <div>
        //             <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">Everything you need for</h1>
        //             <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold">Digital Banking Service</h1>
        //             <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatibus quidem amet sint dolorum ea fugit, eveniet repudiandae mollitia quod quibusdam officia placeat iure tempora autem, perferendis sapiente dolorem sequi! Hic possimus nam amet libero? Delectus velit, dolore, saepe a non porro vitae impedit dolores ea libero nihil hic ipsa tempora nobis fugit itaque harum iure nam qui accusantium dolor asperiores veritatis! Laborum qui error tenetur iusto. Deserunt, hic itaque.</p>
        //             <button className="btn btn-primary">Get Started</button>
        //         </div>
        //     </div>
        // </div>

        <div className="relative h-screen flex items-center">
            <div className="absolute left-0 p-8 text-white z-10">
                <h1 className="text-2xl text-black lg:text-3xl xl:text-4xl font-bold">Everything you need for</h1>
                <h1 className="text-4xl text-black lg:text-5xl xl:text-6xl font-bold">Digital Banking Service</h1>
                <p className="py-6 text-black max-w-2xl text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatibus quidem amet sint dolorum ea fugit, eveniet repudiandae mollitia quod quibusdam officia placeat iure tempora autem, perferendis sapiente dolorem sequi! Hic possimus nam amet libero? Delectus velit, dolore, saepe a non porro vitae impedit dolores ea libero nihil hic ipsa tempora nobis fugit itaque harum iure nam qui accusantium dolor asperiores veritatis! Laborum qui error tenetur iusto. Deserunt, hic itaque.</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
            <img src="https://i.ibb.co/JQXfMc3/banking-service.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Digital Banking Service" />
        </div>

    );
};

export default BankingBanner;