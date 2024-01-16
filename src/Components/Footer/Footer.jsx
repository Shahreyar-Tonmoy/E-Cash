const Footer = () => {
  return (
    <div className=" bg-[#1E1E1E] text-white ">
      <footer className=" footer p-10 max-w-[1200px] mx-auto ">
        <aside>
          <div>
            <h3 className="text-2xl md:text-3xl my-3">E - Cash </h3>
          </div>
          <p>Online F - Commerce Platform.</p>
        </aside>
        <nav>
          <header className=" text-white font-bold text-lg ">Services</header>
          <a className="link link-hover">Campaign </a>
          <a className="link link-hover">Help</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="text-white font-bold text-lg ">Company</header>
          <a className="link link-hover"></a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Carrier </a>
        </nav>
        <nav>
          <header className=" text-white font-bold text-lg ">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
