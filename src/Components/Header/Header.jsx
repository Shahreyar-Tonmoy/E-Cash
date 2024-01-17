import { useContext } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Login/Firebase/AuthProvider";
// import { RxCrossCircled } from "react-icons/rx";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const hendleSignOut = () => {
    logOut()
      .then(() => console.log("logout done"))
      .catch((error) => console.log(error.massage));
  };

  return (
    <div className="bg-gradient-to-r static top-0 z-50 from-[#19123E] py-3 to-[#040C3A]">
      <div className="navbar flex justify-between max-w-screen-lg mx-auto ">
        <div className="flex-1">
          <a className="btn hover:bg-transparent btn-ghost text-white text-xl">
            E-Cash
          </a>
        </div>

        {/* navigation section */}

        <div className="flex-none">
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

            {user ? (
              <>
                <li
                  onClick={hendleSignOut}
                  className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased"
                >
                  <NavLink
                    to="/SignIn"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-orange-500  underline"
                        : "text-white"
                    }
                  >
                    Sign Out
                  </NavLink>
                </li>
              </>
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
                        : "text-white"
                    }
                  >
                    Sign In
                  </NavLink>
                </li>
              </>
            )}


          </ul>
        </div>

        {/* drawer */}
        <div className="lg:hidden z-50">
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

            {user ? (
              <>
                <li
                  onClick={hendleSignOut}
                  className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased"
                >
                  <NavLink
                    to="/SignIn"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-orange-500  underline"
                        : "text-white"
                    }
                  >
                    Sign Out
                  </NavLink>
                </li>
              </>
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
                        : "text-white"
                    }
                  >
                    Sign In
                  </NavLink>
                </li>
              </>
            )}
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
