import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/Login/Firebase/AuthProvider";
import UserAdmin from "../../Hooks/UserAdmin";
import UserMember from "../../Hooks/UseMember";
import { RxCrossCircled } from "react-icons/rx";
const DashBoardNavBar = () => {

  const { user, logOut } = useContext(AuthContext);
    const Navigate = useNavigate()
    const hendleSignOut = () => {
        logOut()
          .then(() => {
            Navigate("/")
            console.log("logout done")
        })
          .catch((error) => console.log(error.massage));
          
      };

      const [isAdmin] = UserAdmin()
    const [isMember] = UserMember()


  return (
    <div>
      <div className="sticky z-10 mt-2 top-0 h-16 border-b bg-white lg:py-2.5">
        <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
          <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
            Dashboard
          </h5>

          <div className="lg:hidden z-50">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer"
                  className="btn btn-ghost hover:bg-transparent cursor-pointer"
                >
                  <span className="w-12 flex items-center   lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 my-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </span>
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>

                <ul className=" p-4 w-72 min-h-full bg-gradient-to-r from-[#19123E] to-[#040C3A] text-base-content">

                  {/* logo section */}
          <div className="px-3 flex justify-between items-center ">
            {/* <a href="#" title="home">
              <img
                src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
                className="w-32"
                alt="tailus logo"
              />
            </a> */}
            <h1 className="text-center text-white text-3xl font-semibold">E-Cash</h1>
            <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className=" text-white text-2xl btn btn-ghost bg-transparent hover:bg-transparent "
              ><RxCrossCircled></RxCrossCircled></label>
          </div>

          <div className="mt-8 text-center">
            <img
              src={user?.photoURL}
              alt
              className=" m-auto rounded-full object-cover lg:w-28 lg:h-28"
            />
            <h5 className=" text-white mt-4 text-xl font-semibold lg:block">
              {user?.displayName}
            </h5>
            {
              isAdmin && <span className=" text-white lg:block">Admin</span>
            }
            {
              isMember && <span className=" text-white lg:block">Agent</span>
            }
            {
              isAdmin || isMember === false && <span className=" text-white lg:block">User</span>
            }

          </div>


                  <ul className="space-y-2 tracking-wide mt-8">
                    <li>
                      <a
                        href="#"
                        aria-label="dashboard"
                        className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                      >
                        <svg
                          className="-ml-1 h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                            className="fill-current text-cyan-400 dark:fill-slate-600"
                          />
                          <path
                            d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                            className="fill-current text-cyan-200 group-hover:text-cyan-300"
                          />
                          <path
                            d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                            className="fill-current group-hover:text-sky-300"
                          />
                        </svg>
                        <span className="-mr-1 font-medium">Dashboard</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            className="fill-current text-gray-300 group-hover:text-cyan-300"
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                            clipRule="evenodd"
                          />
                          <path
                            className="fill-current text-gray-600 group-hover:text-cyan-600"
                            d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                          />
                        </svg>
                        <span className="group-hover:text-gray-700">
                          Categories
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            className="fill-current text-gray-600 group-hover:text-cyan-600"
                            fillRule="evenodd"
                            d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                            clipRule="evenodd"
                          />
                          <path
                            className="fill-current text-gray-300 group-hover:text-cyan-300"
                            d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                          />
                        </svg>
                        <span className="group-hover:text-gray-700">
                          Reports
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            className="fill-current text-gray-600 group-hover:text-cyan-600"
                            d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                          />
                          <path
                            className="fill-current text-gray-300 group-hover:text-cyan-300"
                            d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                          />
                        </svg>
                        <span className="group-hover:text-gray-700">
                          Other data
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            className="fill-current text-gray-300 group-hover:text-cyan-300"
                            d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                          />
                          <path
                            className="fill-current text-gray-600 group-hover:text-cyan-600"
                            fillRule="evenodd"
                            d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="group-hover:text-gray-700">
                          Finance
                        </span>
                      </a>
                    </li>
                  </ul>

                  <div className="px-6  mt-5 pt-4 flex justify-between items-center border-t">
          <button onClick={hendleSignOut} className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>


                </ul>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <div hidden className="md:block">
              <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                  <svg
                    xmlns="http://ww50w3.org/2000/svg"
                    className="w-4 fill-current"
                    viewBox="0 0 35.997 36.004"
                  >
                    <path
                      id="Icon_awesome-search"
                      data-name="search"
                      d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                    />
                  </svg>
                </span>
                <input
                  type="search"
                  name="leadingIcon"
                  id="leadingIcon"
                  placeholder="Search here"
                  className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
                />
              </div>
            </div>
            <button
              aria-label="search"
              className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden"
            >
              <svg
                xmlns="http://ww50w3.org/2000/svg"
                className="w-4 mx-auto fill-current text-gray-600"
                viewBox="0 0 35.997 36.004"
              >
                <path
                  id="Icon_awesome-search"
                  data-name="search"
                  d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                />
              </svg>
            </button>
            <button
              aria-label="chat"
              className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 m-auto text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </button>
            <button
              aria-label="notification"
              className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 m-auto text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardNavBar;
