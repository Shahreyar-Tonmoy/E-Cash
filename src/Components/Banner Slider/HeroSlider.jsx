
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation'
// import img from '../../../assets/Image/Hero1.png';
// import img2 from '../../../assets/Image/Hero2.png';
// import img3 from '../../../assets/Image/Hero3.png';
// import img4 from '../../../assets/Image/Hero4.png';



// import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';

export default function HeroSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}

        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper"
      >

            {/* 1 */}

        <SwiperSlide><div>
          <div className="hero w-full  h-[50vh] lg:h-[91vh]"style={{ backgroundSize:"cover", backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/000/252/790/original/modern-gradient-flat-line-concept-web-banner-of-online-banking-with-decorated-small-people-character-landing-page-template-vector.jpg)` }}>
          <div className="hero-overlay bg-black bg-opacity-0"></div>
           
           <div className="hero-content text-center text-neutral-content">
               {/* <div className="">

                    
                    <h1 className='text-center font-semibold text-2xl mt-52 text-[#E3982F] lg:text-5xl lg:mt-[400px]'>Head & Hand</h1>
                   
                    
                   
                   <p className="lg:mt-[25px] hidden lg:block  lg:text-xl text-slate-300 font-medium text-sm">At Head & Hand, we redefine interior design—optimizing spaces, organizing essentials, and creating empowering environments. Our designs seamlessly integrate your business identity, highlighting products for a lasting impact. Founded by Rakibul Ahsan, a top-tier designer on 99designs.com, we excel in interior design, logo/branding, printing, advertising, and special events worldwide. Ethical, minimal, and top-notch, we ensure your assets are never wasted.</p>
                 
               </div> */}
               
           </div>
          </div>
          
        </div></SwiperSlide>

        {/* slider2 */}


        <SwiperSlide><div>
          <div className="hero h-[50vh] lg:h-[91vh] "style={{backgroundSize:"cover", backgroundImage: `url(https://img.freepik.com/premium-vector/online-payment-concept-3d-isometric-design_1302-11590.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696636800&semt=ais)` }}>
          <div className="hero-overlay bg-black bg-opacity-0"></div>
           
           <div className="hero-content text-center text-neutral-content">
               {/* <div className="">
               <h1 className='text-center font-semibold text-2xl mt-52 text-[#E3982F] lg:text-5xl lg:mt-[400px]'>Head & Hand</h1>
                   
                   <p className="lg:mt-[25px] hidden lg:block  lg:text-xl text-slate-300 font-medium text-sm">At Head & Hand, we redefine interior design—optimizing spaces, organizing essentials, and creating empowering environments. Our designs seamlessly integrate your business identity, highlighting products for a lasting impact. Founded by Rakibul Ahsan, a top-tier designer on 99designs.com, we excel in interior design, logo/branding, printing, advertising, and special events worldwide. Ethical, minimal, and top-notch, we ensure your assets are never wasted.</p>
                 
               </div> */}
               
           </div>
          </div>
          

        </div></SwiperSlide>


        {/* slider3 */}


        <SwiperSlide><div>
          <div className="hero h-[50vh] lg:h-[91vh]"style={{backgroundSize:"cover", backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/002/005/799/non_2x/online-banking-concept-with-laptop-and-smartphone-and-icons-vector.jpg)` }}>
          <div className="hero-overlay bg-black bg-opacity-0"></div>
           
           <div className="hero-content text-center text-neutral-content">
               {/* <div className="">
               <h1 className='text-center font-semibold text-2xl mt-52 text-[#E3982F] lg:text-5xl lg:mt-[400px]'>Head & Hand</h1>
                   
                   <p className="lg:mt-[25px]  hidden lg:block  lg:text-xl text-slate-300 font-medium text-sm">At Head & Hand, we redefine interior design—optimizing spaces, organizing essentials, and creating empowering environments. Our designs seamlessly integrate your business identity, highlighting products for a lasting impact. Founded by Rakibul Ahsan, a top-tier designer on 99designs.com, we excel in interior design, logo/branding, printing, advertising, and special events worldwide. Ethical, minimal, and top-notch, we ensure your assets are never wasted.</p>
                 
               </div> */}
               
           </div>
          </div>
          

        </div></SwiperSlide>


        {/* slider4 */}


        <SwiperSlide><div>
          <div className="hero h-[50vh] lg:h-[91vh]"style={{backgroundSize:"cover", backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/002/005/814/non_2x/online-banking-concept-with-computer-desktop-and-icons-vector.jpg)` }}>
          <div className="hero-overlay bg-black bg-opacity-0"></div>
           
           {/* <div className="hero-content text-center text-neutral-content">
               <div className="">
               <h1 className='text-center font-semibold text-2xl mt-52 text-[#E3982F] lg:text-5xl lg:mt-[400px]'>Head & Hand</h1>
                   
                   <p className="lg:mt-[25px] hidden lg:block  lg:text-xl text-slate-300 font-medium text-sm">At Head & Hand, we redefine interior design—optimizing spaces, organizing essentials, and creating empowering environments. Our designs seamlessly integrate your business identity, highlighting products for a lasting impact. Founded by Rakibul Ahsan, a top-tier designer on 99designs.com, we excel in interior design, logo/branding, printing, advertising, and special events worldwide. Ethical, minimal, and top-notch, we ensure your assets are never wasted.</p>
                 
               </div>
               
           </div> */}
          </div>
          

        </div></SwiperSlide>


        
       

      
      </Swiper>
    </>
  );
}
