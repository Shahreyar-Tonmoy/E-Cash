import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-[#1E1E1E] text-white ">
      <div className="p-10 max-w-[1200px] mx-auto ">
        <div className=" footer py-10 ">
          <aside>
            <div>
              <h3 className="text-2xl md:text-3xl my-3">E - Cash </h3>
            </div>
            <p>Online F - Commerce Platform.</p>
          </aside>
          <nav>
            <header className=" text-white font-bold text-lg ">Services</header>
            <a className="link link-hover">Campaigns </a>
            <a className="link link-hover">Help</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="text-white font-bold text-lg ">Company</header>
            <a className="link link-hover"></a>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Carriers </a>
          </nav>
          <nav>
            <header className=" text-white font-bold text-lg ">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
        <hr className="" />
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center pt-10">
          <p className="text-sm">
            {" "}
            &copy; {new Date().getFullYear()} E Cash - Online Financial Commerce
            LTD. All Rights Reserved.
          </p>
          <ul className="flex gap-5 flex-wrap items-center text-2xl lg:text-3xl">
            <li>
              <Link>
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link>
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link>
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link>
                <FaLinkedin />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
