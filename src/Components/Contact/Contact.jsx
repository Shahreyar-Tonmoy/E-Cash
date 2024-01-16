import CBanner from "./CBanner";
import emailjs from 'emailjs-com';


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
        <div className="flex m-10">
          <div className="m-6">
            <h2 className='text-center font-bold text-4xl mt-4'> Contact Form</h2>
            <form  onSubmit={sendEmail} className="max-w-md mx-auto mt-10 p-6 bg-green-300 rounded-md shadow-md">
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

         <div className="m-8">
             <h2 className="text-center font-bold text-4xl mt-4">Have Any Queries? </h2>
         </div>
        </div>
    </div>
    );
};

export default Contact;