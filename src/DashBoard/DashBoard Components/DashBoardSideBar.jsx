/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../Components/Login/Firebase/AuthProvider";
import { Link, NavLink, useNavigate } from "react-router-dom";
import UserMember from "../../Hooks/UseMember";
import UserAdmin from "../../Hooks/UserAdmin";
import { FaHome } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";

const DashBoardSideBar = () => {
  const [isAdmin] = UserAdmin();
  const [isMember] = UserMember();




  const { user, logOut } = useContext(AuthContext);

  const { isPending, isError, error, data } = useQuery({
    queryKey: ["data", "user"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/${user.email}`);
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

  return (
    <div>
      <aside className="ml-[-100%] fixed z-10 top-0 overflow-y-scroll pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        {/* dashboard condication apply here */}

        <div>
          {/* logo section */}
          <div className="-mx-6 px-6 py-4">
            {/* <a href="#" title="home">
              <img
                src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
                className="w-32"
                alt="tailus logo"
              />
            </a> */}
            <h1 className="text-center text-3xl font-semibold">E-Cash</h1>
          </div>

          <div className="mt-8 text-center">
            <img
              src={user?.photoURL}
              alt
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              {user?.displayName}
            </h5>
            {isAdmin && (
              <div>
                <span className="hidden text-gray-400 lg:block">Admin</span>
                <span className="hidden text-gray-400 lg:block">
                  Account Number: <span>{data?.phoneNumber}</span>
                </span>
              </div>
            )}
            {isMember && (
              <div>
                <span className="hidden text-gray-400 lg:block">Agent</span>
                <span className="hidden text-gray-400 lg:block">
                  Account Number: <span>{data?.phoneNumber}</span>
                </span>
              </div>
            )}
            {isAdmin ||
              (isMember === false && (
                <div>
                  <span className="hidden text-gray-400 lg:block">User</span>
                  <span className="hidden text-gray-400 lg:block">
                    Account Number: <span>{data?.phoneNumber}</span>
                  </span>
                </div>
              ))}
          </div>

          {/* navigation button section */}

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
                <li className="mt-3">
                  <NavLink
                    to="/dashboard/agent/deposit"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-[#B46EA3] to-[#6F74BE]"
                        : "relative px-4 py-3 flex items-center space-x-4 "
                    }
                  >
                    <span className="flex items-center gap-3 justify-center mx-auto">
                      Deposit
                    </span>
                  </NavLink>
                </li>
              </>
            )}

            {/* user section */}

            {isAdmin ||
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
                      to="/dashboard/user/savings"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-[#B46EA3] to-[#6F74BE]"
                          : "relative px-4 py-3 flex items-center space-x-4 "
                      }
                    >
                      <span className="flex items-center gap-3 justify-center mx-auto">
                       Savings
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
        </div>

        {/* logOut section */}

        <div className="  pt-4 flex flex-col  border-t">
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
      </aside>
    </div>
  );
};

export default DashBoardSideBar;
