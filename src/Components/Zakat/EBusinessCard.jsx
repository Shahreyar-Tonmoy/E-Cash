/* eslint-disable react/prop-types */

import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const EBusinessCard = ({ image, title, details,link,linkName,disabled,header }) => {
  return (
    <div>
      <div className=" lg:flex  mt-40  rounded-none ">
        <figure className="lg:w-[700px] flex-1">
          <img
            src={image}
            alt="Album"
            className="object-cover"
          />
        </figure>
        <div className="card-body flex-1">
          <h2 className="text-xl mb-3 font-WorkSans font-semibold">{header}</h2>
          <h2 className="text-3xl font-WorkSans font-semibold">{title}</h2>
          <p className="text-lg">{details}</p>
          
          <div className={disabled}>
          <p className="-pt-60 text-violet-900 text-2xl font-semibold"><Link to={link}><div className="flex items-center gap-2">
          {linkName}<FaArrowRightLong className="text-violet-900 mt-1" /></div></Link></p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default EBusinessCard;
