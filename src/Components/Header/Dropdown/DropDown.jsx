/* eslint-disable no-unused-vars */
import { Fragment, useContext } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../Login/Firebase/AuthProvider'
import UserAdmin from '../../../Hooks/UserAdmin'
import UserMember from '../../../Hooks/UseMember'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDown() {

  const [isAdmin] = UserAdmin()
    const [isMember] = UserMember()

   

  const { user, logOut } = useContext(AuthContext);
  const hendleSignOut = () => {
    logOut()
      .then(() => console.log("logout done"))
      .catch((error) => console.log(error.massage));
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md font-bold  px-3 py-2   text-white shadow-sm   ">
        {user && (
              <>
                <div className="">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img referrerPolicy="no-referrer" src={user?.photoURL} />
                    </div>
                  </label>
                </div>
              </>
            )}
          
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute  right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-[#040C3A]   shadow-xl ring-1 ring-violet-500  ">
          <div className="py-3 px-6">

            <Menu.Item>
              {() => (
                <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-500  underline"
                    : "text-white hover:text-orange-500"
                }
              >
               
              
                <a
                  
                  className=
                    'block px-4  py-2 text-lg font-bold'
                  
                >
                  DashBoard
                </a></NavLink>
              )}
            </Menu.Item>


            <Menu.Item>
            {user ? (
              <>
                <li
                  onClick={hendleSignOut}
                  className="block p-1 px-4 font-sans text-lg font-bold leading-normal text-inherit antialiased"
                >
                  <NavLink
                    to="/SignIn"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-orange-500  underline"
                        : "text-white hover:text-orange-500"
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
            </Menu.Item>


            

            
            
            
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
