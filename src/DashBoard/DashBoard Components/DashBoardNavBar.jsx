/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/Login/Firebase/AuthProvider";
import UserAdmin from "../../Hooks/UserAdmin";
import UserMember from "../../Hooks/UseMember";
import { RxCrossCircled } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
<<<<<<< HEAD
import { useQuery } from "@tanstack/react-query";
=======
import { FcMoneyTransfer } from "react-icons/fc";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoHome } from "react-icons/io5";

>>>>>>> 5501a940e8a91ae8f9beccf1c9f09f9e2ab3a9a3
const DashBoardNavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["data", "user"],
    queryFn: async () => {
      const res = await fetch(`https://e-cash-server-mongoose.vercel.app/users/${user.email}`);
      return res.json();
    },
  });
  const Navigate = useNavigate();
  const hendleSignOut = () => {
    logOut()
      .then(() => {
        Navigate("/");
        console.log("logout done");
      })
      .catch((error) => console.log(error.massage));
  };

  const [isAdmin] = UserAdmin();
  const [isMember] = UserMember();

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

                <ul className=" p-4 w-60 min-h-full bg-white text-base-content">
                  {/* logo section */}
                  <div className="px-3 flex justify-between items-center ">
                    {/* <a href="#" title="home">
              <img
                src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
                className="w-32"
                alt="tailus logo"
              />
            </a> */}
                    <h1 className="text-center text-black text-3xl font-semibold">
                      E-Cash
                    </h1>
                    <label
                      htmlFor="my-drawer"
                      aria-label="close sidebar"
                      className=" text-black text-2xl btn btn-ghost bg-transparent hover:bg-transparent "
                    >
                      <RxCrossCircled></RxCrossCircled>
                    </label>
                  </div>

                  <div className="mt-8 text-center">
                    <img
                      src={user?.photoURL}
                      alt
                      className=" m-auto rounded-full object-cover  w-20 h-20"
                    />
                    <h5 className=" text-black mt-4 text-xl font-semibold lg:block">
                      {user?.displayName}
                    </h5>
                    {isAdmin && (
                      <div className="flex flex-col">
                      <span className=" text-gray-400 ">Admin</span>
                      <span className=" text-gray-400">
                        Account Number: <span>{data?.phoneNumber}</span>
                      </span>
                    </div>
                    )}
                    {isMember && (
                     <div className="flex flex-col">
                     <span className=" text-gray-400 ">Agent</span>
                     <span className=" text-gray-400 ">
                       Account Number: <span>{data?.phoneNumber}</span>
                     </span>
                   </div>
                    )}
                    {isAdmin ||
                      (isMember === false && (
                        <div className="flex flex-col">
                  <span className=" text-gray-400 ">User</span>
                  <span className=" text-gray-400 ">
                    Account Number: <span>{data?.phoneNumber}</span>
                  </span>
                </div>
                      ))}
                  </div>

                  <ul className="space-y-2 tracking-wide mt-8">

                    
                    {/* admin section */}

                    {isAdmin && (
                      <>
                        <li className="mt-3">
                  <NavLink
                    to="/dashBoard"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-black  border border-[#B46EA3] "
                        : "relative px-4 py-3 flex items-center space-x-4 "
                    }
                  >
                    <span className="flex items-center gap-3 justify-center mx-auto">
                      DashBoard
                    </span>
                  </NavLink>
                </li>

                        <li className="mt-3">
                          <NavLink
                            to="/dashboard/admin/allusers"
                            className={({ isActive, isPending }) =>
                              isPending
                                ? "pending"
                                : isActive
                                ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-[#B46EA3] to-[#6F74BE]"
                                : "relative px-4 py-3 flex items-center space-x-4 "
                            }
                          >
                            <span className="flex items-center gap-3 justify-center mx-auto">
                             All Users
                            </span>
                          </NavLink>
                        </li>
                        <li className="mt-3">
                          <NavLink
                            to="/dashboard/admin/allagents"
                            className={({ isActive, isPending }) =>
                              isPending
                                ? "pending"
                                : isActive
                                ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-[#B46EA3] to-[#6F74BE]"
                                : "relative px-4 py-3 flex items-center space-x-4 "
                            }
                          >
                            <span className="flex items-center gap-3 justify-center mx-auto">
                             All Agents
                            </span>
                          </NavLink>
                        </li>
                        <li className="mt-3">
                          <NavLink
                            to="/dashboard/admin/transaction"
                            className={({ isActive, isPending }) =>
                              isPending
                                ? "pending"
                                : isActive
                                ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-[#B46EA3] to-[#6F74BE]"
                                : "relative px-4 py-3 flex items-center space-x-4 "
                            }
                          >
                            <span className="flex items-center gap-3 justify-center mx-auto">
                            Transaction
                            </span>
                          </NavLink>
                        </li>
                        <li className="mt-3">
                          <NavLink
                            to="/dashboard/admin/acceptagent"
                            className={({ isActive, isPending }) =>
                              isPending
                                ? "pending"
                                : isActive
                                ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-[#B46EA3] to-[#6F74BE]"
                                : "relative px-4 py-3 flex items-center space-x-4 "
                            }
                          >
                            <span className="flex items-center gap-3 justify-center mx-auto">
                            Accept User to Agent
                            </span>
                          </NavLink>
                        </li>
                        <li className="mt-3">
                          <NavLink
                            to="/dashboard/admin/acceptdeposite"
                            className={({ isActive, isPending }) =>
                              isPending
                                ? "pending"
                                : isActive
                                ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-[#B46EA3] to-[#6F74BE]"
                                : "relative px-4 py-3 flex items-center space-x-4 "
                            }
                          >
                            <span className="flex items-center gap-3 justify-center mx-auto">
                            Accept Agent Deposit
                            </span>
                          </NavLink>
                        </li>
                      </>
                    )}

                    {/* Agent section */}

                    {isMember && (
              <>
                <li className="mt-3">
                  <NavLink
                    to="/dashBoard"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-black  border border-[#B46EA3] "
                        : "relative px-4 py-3 flex items-center space-x-4 "
                    }
                  >
                    <span className="flex items-center gap-3 justify-center mx-auto">
                      DashBoard
                    </span>
                  </NavLink>
                </li>

                <li className="mt-3">
                  <NavLink
                    to="/dashboard/agent/sendMoney"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-[#B46EA3] to-[#6F74BE]"
                        : "relative px-4 py-3 flex items-center space-x-4 "
                    }
                  >
                    <span className="flex items-center gap-3 justify-center mx-auto">
                    Cash In
                    </span>
                  </NavLink>
                </li>


                <li className="mt-3">
                  <NavLink
                    to="/dashboard/profile"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-[#B46EA3] to-[#6F74BE]"
                        : "relative px-4 py-3 flex items-center space-x-4 "
                    }
                  >
                    <span className="flex items-center gap-3 justify-center mx-auto">
                      Profile
                    </span>
                  </NavLink>
                </li>


                <li className="mt-3">
                  <NavLink
                    to="/dashboard/agent/transaction"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-[#B46EA3] to-[#6F74BE]"
                        : "relative px-4 py-3 flex items-center space-x-4 "
                    }
                  >
                    <span className="flex items-center gap-3 justify-center mx-auto">
                    Transactions
                    </span>
                  </NavLink>
                </li>


              </>
            )}

                    {/* user section */}

                    {isAdmin ||
<<<<<<< HEAD
              (isMember === false && (
                <>
                  <li className="mt-3">
                  <NavLink
                    to="/dashBoard"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-black  border border-[#B46EA3] "
                        : "relative px-4 py-3 flex items-center space-x-4 "
                    }
                  >
                    <span className="flex items-center gap-3 justify-center mx-auto">
                      DashBoard
                    </span>
                  </NavLink>
                </li>

                  <li className="mt-3">
                    <NavLink
                      to="/dashboard/user/sendMoney"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-[#B46EA3] to-[#6F74BE]"
                          : "relative px-4 py-3 flex items-center space-x-4 "
=======
                      isMember === false && 
                        <>
                          <li className="mt-3">
                            <NavLink
                              to="/dashBoard"
                              className={({ isActive, isPending }) =>
                                isPending
                                  ? "pending"
                                  : isActive
                                  ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-[#B46EA3] to-[#6F74BE]"
                                  : "relative px-4 py-3 flex items-center space-x-4 "
                              }
                            >
                              <span className="flex items-center gap-3 justify-center mx-auto">
                              <IoHome className="w-8 h-8"/>
                                User Home
                              </span>
                            </NavLink>
                          </li>


                          <li className="mt-3">
                            <NavLink
                              to="/dashboard/user/userprofile"
                              className={({ isActive, isPending }) =>
                                isPending
                                  ? "pending"
                                  : isActive
                                  ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-[#B46EA3] to-[#6F74BE]"
                                  : "relative px-4 py-3 flex items-center space-x-4 "
                              }
                            >
                              <span className="flex items-center gap-3 justify-center mx-auto">
                              <ImProfile className="w-8 h-8"/>
                                User Profile
                              </span>
                            </NavLink>
                          </li>
                          <li className="mt-3">
                            <NavLink
                              to="/dashboard/user/sendmoney"
                              className={({ isActive, isPending }) =>
                                isPending
                                  ? "pending"
                                  : isActive
                                  ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-[#B46EA3] to-[#6F74BE]"
                                  : "relative px-4 py-3 flex items-center space-x-4 "
                              }
                            >
                              <span className="flex font-bold items-center gap-3 justify-center mx-auto">
                              <FcMoneyTransfer className="w-8 h-8"/>
                               Send Money
                              </span>
                            </NavLink>
                          </li>
                          <li className="mt-3">
                            <NavLink
                              to="/dashboard/user/balancecheck"
                              className={({ isActive, isPending }) =>
                                isPending
                                  ? "pending"
                                  : isActive
                                  ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-[#B46EA3] to-[#6F74BE]"
                                  : "relative px-4 py-3 flex items-center space-x-4 "
                              }
                            >
                              <span className="flex font-bold items-center gap-3 justify-center mx-auto">
                              <FaBalanceScaleLeft className="w-8 h-8"/>
                              Balance Check
                              </span>
                            </NavLink>
                          </li>
                        </>
>>>>>>> 5501a940e8a91ae8f9beccf1c9f09f9e2ab3a9a3
                      }
                    >
                      <span className="flex items-center gap-3 justify-center mx-auto">
                        Send Money
                      </span>
                    </NavLink>
                  </li>


                  <li className="mt-3">
                    <NavLink
                      to="/dashboard/user/cashOut"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-[#B46EA3] to-[#6F74BE]"
                          : "relative px-4 py-3 flex items-center space-x-4 "
                      }
                    >
                      <span className="flex items-center gap-3 justify-center mx-auto">
                        Cash Out
                      </span>
                    </NavLink>
                  </li>


                  <li className="mt-3">
                    <NavLink
                      to="/dashboard/user/transaction"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-[#B46EA3] to-[#6F74BE]"
                          : "relative px-4 py-3 flex items-center space-x-4 "
                      }
                    >
                      <span className="flex items-center gap-3 justify-center mx-auto">
                      Transactions
                      </span>
                    </NavLink>
                  </li>

                  <li className="mt-3">
                    <NavLink
                      to="/dashboard/profile"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-[#B46EA3] to-[#6F74BE]"
                          : "relative px-4 py-3 flex items-center space-x-4 "
                      }
                    >
                      <span className="flex items-center gap-3 justify-center mx-auto">
                      Profile
                      </span>
                    </NavLink>
                  </li>
                </>
              ))}


                  </ul>

                  <div className="px-2  mt-5 pt-4 flex flex-col border-t">
                    <Link to={"/"}>
                      <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                        <FaHome />
                        <span className="group-hover:text-gray-700">Home</span>
                      </button>
                    </Link>

                    <button
                      onClick={hendleSignOut}
                      className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                    >
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
