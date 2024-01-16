import { useContext } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AuthContext } from "../Login/Firebase/AuthProvider";
// import { RxCrossCircled } from "react-icons/rx";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-violet-400 w-full sticky top-0 z-50">
      <div className="navbar flex justify-between max-w-screen-lg mx-auto ">
        <div className="flex-1">
          <a className="btn hover:bg-transparent btn-ghost text-xl">E-Cash</a>
        </div>

        {/* navigation section */}

        <div className="flex-none">
          <ul className="menu hidden lg:flex menu-horizontal px-1">
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
                <Link to={"signOut"}>
                  <button>Sign Out</button>
                </Link>
              </li>
            ) : (
              <li>
                <button>Sign In</button>
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
                    <button>Sign Out</button>
                  </li>
                ) : (
                  <li>
                    <button>Sign In</button>
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
