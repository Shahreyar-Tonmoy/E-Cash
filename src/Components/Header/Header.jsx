/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Login/Firebase/AuthProvider";
import DropDown from "./Dropdown/DropDown";
// import { RxCrossCircled } from "react-icons/rx";
import { RxCrossCircled } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { GoSignIn } from "react-icons/go";


const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className=" py-3 ">
      <div className="navbar flex justify-between max-w-screen-lg mx-auto ">
        <div className="flex-1">
          <a className="btn hover:bg-transparent btn-ghost text-violet-900 font-WorkSans font-semibold text-2xl">
            E-Cash
          </a>
        </div>

        {/* navigation section */}

        <div className="flex-none">
          <ul
            tabIndex={0}
            className="dropdown-content hidden items-center py-1  gap-5 lg:flex cursor-pointer   z-[1]  "
          >
            <li className="block p-1 font-sans text-lg  font-bold leading-normal text-inherit antialiased">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-violet-900  underline"
                    : "text-black hover:text-violet-900"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-violet-900  underline"
                    : "text-black hover:text-violet-900"
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="block  font-sans text-lg font-bold leading-normal text-inherit antialiased">
              <NavLink
                to="/digitalBanking"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-violet-900  underline"
                    : "text-black hover:text-violet-900"
                }
              >
                Digital Banking
              </NavLink>
            </li>
            {user ? (
              <></>
            ) : (
              <>
                <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                  <NavLink
                    to="/SignIn"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-violet-900  underline"
                        : "text-black hover:text-violet-900"
                    }
                  >
                    Sign In
                  </NavLink>
                </li>
              </>
            )}

            {user && <DropDown></DropDown>}
          </ul>
        </div>

        {/* drawer */}
        <div className="lg:hidden z-50">
          <div className="drawer drawer-end overflow-hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost hover:bg-transparent cursor-pointer"
              >
                <RiMenu3Line className="text-xl"></RiMenu3Line>
              </label>
            </div>
            <div className="drawer-side overflow-hidden">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>

              <ul className=" p-4 w-60 min-h-full bg-white text-base-content">
                <div className="flex items-center justify-between">
                  <a className="btn hover:bg-transparent btn-ghost text-xl">
                    E-Cash
                  </a>
                  <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className=" text-black text-2xl btn btn-ghost bg-transparent hover:bg-transparent "
              ><RxCrossCircled/></label>
                </div>
                {/* Sidebar content here */}

                {/* <li className="block p-1 font-sans  font-bold leading-normal text-inherit antialiased">
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-orange-500  underline"
                        : "text-black"
                    }
                  >
                    Home
                  </NavLink>
                </li> */}
                
                <li className="mt-3">

                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-[#B46EA3] to-[#6F74BE]"
                        : "relative px-4 py-3 flex items-center space-x-4 "
                    }
                  >
                    <span className="flex items-center gap-3 justify-center mx-auto"><FaHome/> Home</span>
                  </NavLink>


                      
                    </li>

                <li className="mt-3">
                  <NavLink
                    to="/contact"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-[#B46EA3] to-[#6F74BE]"
                        : "relative px-4 py-3 flex items-center space-x-4 "
                    }
                  >
                    <span className="flex items-center gap-3 justify-center mx-auto"><IoIosContacts className="text-xl"/> Contact</span>
                  </NavLink>
                </li>
                <li className="mt-3">
                  <NavLink
                    to="/digitalBanking"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-[#B46EA3] to-[#6F74BE]"
                        : "relative px-4 py-3 flex items-center space-x-4 "
                    }
                  >
                     <span className="flex items-center gap-3 justify-center mx-auto"><HiOutlineBanknotes className="text-xl"/>Digital Banking</span>
                  </NavLink>
                </li>
                {user ? (
              <>
                
              </>
            ) : (
              <>
                <li className="mt-3">
                  <NavLink
                    to="/SignIn"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-[#B46EA3] to-[#6F74BE]"
                        : "relative px-4 py-3 flex items-center space-x-4 "
                    }
                  >
                    <span className="flex items-center gap-3 justify-center mx-auto"><GoSignIn className="text-xl"/>Sign In</span>
                  </NavLink>
                </li>
              </>
            )}
            

            <div className="mx-auto flex justify-center">
            {
              user && <DropDown></DropDown>
            }
            </div>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
