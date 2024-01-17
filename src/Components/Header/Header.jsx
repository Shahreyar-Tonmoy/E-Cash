import { RiMenu3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
// import { RxCrossCircled } from "react-icons/rx";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#19123E] py-3 to-[#040C3A]">
      <div className="navbar flex justify-between max-w-screen-lg mx-auto ">
        <div className="flex-1">
          <a className="btn hover:bg-transparent btn-ghost text-white text-xl">
            E-Cash
          </a>
        </div>

        {/* navigation section */}

        <div className="flex-none">
          {/* <ul className="menu hidden gap-5 cursor-pointer  btn-ghost hover:bg-transparent lg:flex menu-horizontal px-1">
            <li className="block p-1  font-sans text-lg font-bold leading-normal text-inherit antialiased">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500  underline"
                    : "text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li>About</li>
            <li>
              {" "}
              <Link to="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul> */}

          <ul
            tabIndex={0}
            className="dropdown-content hidden items-center py-1  gap-5 lg:flex cursor-pointer   z-[1] shadow  rounded-box "
          >
            <li className="block p-1 font-sans  font-bold leading-normal text-inherit antialiased">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-500  underline"
                    : "text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="block p-1 font-sans  font-bold leading-normal text-inherit antialiased">
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-500  underline"
                    : "text-white"
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="block  font-sans  font-bold leading-normal text-inherit antialiased">
              <NavLink
                to="/digitalBanking"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-500  underline"
                    : "text-white"
                }
              >
                Digital Banking
              </NavLink>
            </li>


          </ul>
        </div>

        {/* drawer */}
        <div className="lg:hidden z-20">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost hover:bg-transparent cursor-pointer"
              >
                <RiMenu3Line className="text-xl"></RiMenu3Line>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>

              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <div className="flex items-center justify-between">
                  <a className="btn hover:bg-transparent btn-ghost text-xl">
                    E-Cash
                  </a>
                </div>
                {/* Sidebar content here */}
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
