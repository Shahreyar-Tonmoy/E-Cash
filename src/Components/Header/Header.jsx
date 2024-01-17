import { useContext } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Login/Firebase/AuthProvider";
import Swal from "sweetalert2";
// import { RxCrossCircled } from "react-icons/rx";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "Sign Out Successful.",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Unexpected error!",
          text: `${error.message}`,
          icon: "error",
        });
      });
  };

  return (
    <div className="bg-gradient-to-r text-white from-[#19123E] py-3 to-[#040C3A] w-full sticky top-0 z-50">
      <div className="navbar flex justify-between max-w-screen-lg mx-auto ">
        <div className="flex-1">
          <a className="btn hover:bg-transparent btn-ghost text-xl text-white ">
            E-Cash
          </a>
        </div>

        {/* navigation section */}

        <div className="flex-none">
          {/* <ul className="menu hidden lg:flex menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            {user ? (
              <li>
                <button onClick={handleLogout}>Sign Out</button>
              </li>
            ) : (
              <li>
                <Link to={"/signIn"}>
                  <button>Sign In</button>
                </Link>
              </li>
            )}
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
            {user ? (
              <li className="block  font-sans  font-bold leading-normal text-inherit antialiased">
                <button onClick={handleLogout}>Sign Out</button>
              </li>
            ) : (
              <li className="block  font-sans  font-bold leading-normal text-inherit antialiased">
                <Link to={"/signIn"}>
                  <button>Sign In</button>
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* drawer */}
        <div className="lg:hidden">
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
                {user ? (
                  <li>
                    <button onClick={handleLogout}>Sign Out</button>
                  </li>
                ) : (
                  <li>
                    <Link to={"/signIn"}>
                      <button>Sign In</button>
                    </Link>
                  </li>
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
