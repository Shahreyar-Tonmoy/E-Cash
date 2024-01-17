import CBanner from "./CBanner";
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
import { MdOutlineMailOutline, MdOutlinePhoneInTalk } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";


const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_khj8eai', 'template_o4zwkcq', e.target, 'FOkhzyqNBrWXCKfZ7')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
    
        e.target.reset();
      };
    return (
        <div>
            <CBanner></CBanner>
        <div className="flex m-10 bg-stone-100">
          <div className="m-14 gap-5">
            <h2 className='text-center font-bold text-4xl mt-4'> Contact Form</h2>
            <form  onSubmit={sendEmail} className="max-w-md mx-auto mt-10 p-6 bg-sky-300 rounded-md shadow-md">
            <label className="block  text-sm font-bold mb-2" htmlFor="name">
            Full Name
            </label>
            <input
                className="w-full p-2 border rounded-md"
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                required
            />
            <label className="block   text-sm font-bold mt-4 mb-2" htmlFor="email">
            Email
            </label>
            <input
                className="w-full  p-2 border rounded-md"
                type="email"
                id="email"
                name="user_email"
                placeholder="Your e-mail"
                required
            />

            <label className="block text-sm font-bold mt-4 mb-2" htmlFor="message">
                Message
            </label>
            <textarea
                className="w-full p-2 border rounded-md"
                id="message"
                name="message"
                rows="4"
                placeholder="Your message"
                required
            />

            <button
                className="mt-4 bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                type="submit"
            >
                Send Message
            </button>
            </form>
         </div>

         <div className="m-14">
             <h2 className="text-center font-bold text-4xl m-4">Have Any Queries? </h2>
             <p className="text-xl">We are constantly growing, and expanding our operation globally.If
                <br />
                 you have any queries, please give us a call or submit the form here.
             </p>
             <div >
             <p><MdOutlinePhoneInTalk  className="bg-blue-400 text-4xl m-6 rounded-xl"/>+880 1315000207</p>
             <p><MdOutlineMailOutline className="bg-blue-400 text-4xl m-6 rounded-xl"/>E-Cash@gmail.com</p>
             <p><FaMapMarkedAlt className="bg-blue-400 text-4xl m-6 rounded-xl"/>Dhaka,Bangladesh</p>
             </div>
         </div>
        </div>
    </div>
    );
};

export default Contact;