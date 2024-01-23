/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Login/Firebase/AuthProvider";
import DropDown from "./Dropdown/DropDown";
// import { RxCrossCircled } from "react-icons/rx";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className=" py-3 ">
      <div className="navbar flex justify-between max-w-screen-lg mx-auto ">
        <div className="flex-1">
          <a className="btn hover:bg-transparent btn-ghost  text-xl">E-Cash</a>
        </div>

        {/* navigation section */}

        <div className="flex-none">
          <ul
            tabIndex={0}
            className="dropdown-content hidden items-center py-1  gap-5 lg:flex cursor-pointer   z-[1]  "
          >
            <li className="block p-1 font-sans  font-bold leading-normal text-inherit antialiased">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-violet-900  underline"
                    : "text-black"
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
                    : "text-black"
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
                    : "text-black"
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
                        ? "text-orange-500  underline"
                        : "text-black"
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

              <ul className=" p-4 w-80 min-h-full bg-gradient-to-r from-[#19123E] to-[#040C3A] text-base-content">
                <div className="flex items-center justify-between">
                  <a className="btn hover:bg-transparent btn-ghost text-xl">
                    E-Cash
                  </a>
                </div>
                {/* Sidebar content here */}

                <li className="block p-1 font-sans  font-bold leading-normal text-inherit antialiased">
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
                </li>
                <li className="block p-1 font-sans  font-bold leading-normal text-inherit antialiased">
                  <NavLink
                    to="/contact"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-orange-500  underline"
                        : "text-black"
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
                        : "text-black"
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
                            ? "text-orange-500  underline"
                            : "text-black"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
