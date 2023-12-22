import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../hooks/Provider/AuthProvider";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  // console.log(user)

  const handleSignOutUser = () => {
    signOutUser();
  };

  const navItem = (
    <>
      <li id="sidebar">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li id="sidebar">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li id="sidebar">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="relative">
      <div className="bg-slate-600 text-white absolute top-0 left-0 right-0">
        <div className=" navbar w-11/12 mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu bg-slate-800 menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
              >
                {navItem}
              </ul>
            </div>
            <p className="text-sky-300 text-xl font-bold">Task Manager</p>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItem}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="dropdown dropdown-end ">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 h-10 rounded-full">
                    {user?.photoURL ? (
                      <img src={user?.photoURL} />
                    ) : (
                      <img src="https://i.ibb.co/ZJXnP8s/user.png" />
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] px-2 py-4 shadow bg-slate-600 rounded w-52"
                >
                  <li>
                  <a className="justify-between">{user?.displayName}</a>
                  </li>
                  <li>
                    <Link
                      onClick={handleSignOutUser}
                      className="bg-blue-500 hover:bg-blue-700 text-sky-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      log out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <Link
                  to="/logIn"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  log in
                </Link>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
