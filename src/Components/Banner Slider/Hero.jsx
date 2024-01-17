
// import img from '../../../assets/Image/Hero1.png';


const Hero = () => {
    return (
        <div className="hero h-[50vh] lg:h-[87vh]" style={{ backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/000/252/790/original/modern-gradient-flat-line-concept-web-banner-of-online-banking-with-decorated-small-people-character-landing-page-template-vector.jpg)` }}>
        
            <div className="hero-overlay bg-black bg-opacity-50"></div>
           
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    
                    <p data-aos="fade"
                    data-aos-easing="linear"
                    data-aos-duration="2000" className="lg:mt-[450px] hidden lg:block  lg:text-xl text-slate-300 font-medium">At Head & Hand, we redefine interior design—optimizing spaces, organizing essentials, and creating empowering environments. Our designs seamlessly integrate your business identity, highlighting products for a lasting impact. Founded by Rakibul Ahsan, a top-tier designer on 99designs.com, we excel in interior design, logo/branding, printing, advertising, and special events worldwide. Ethical, minimal, and top-notch, we ensure your assets are never wasted.</p>
                  
                </div>
                
            </div>
        </div>
    );
};

export default Hero;