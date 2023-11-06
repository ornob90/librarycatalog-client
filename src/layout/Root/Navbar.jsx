import { NavLink, useLocation, useNavigate } from "react-router-dom";

import Button from "../../components/Shared/Button";
import { useContext, useState } from "react";
import useAuth from "../../hooks/useAuth";
import AuthContext from "../../Context/AuthContext";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import toast from "react-hot-toast";
// import useTheme from "../../Hooks/useTheme";

const Navbar = () => {
  const { pathname } = useLocation();

  const navLinks = (
    <>
      <li>
        <NavLink
          onClick={() => setHidden(!hidden)}
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-medium bg-black text-white py-2 px-4 rounded-sm"
              : "font-medium"
          }
        >
          <span
            className={`${
              pathname === "/login" || pathname === "/signup"
                ? "text-black"
                : ""
            }`}
          >
            H
          </span>
          ome
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => setHidden(!hidden)}
          to="/add-book"
          className={({ isActive }) =>
            isActive
              ? "font-medium bg-black text-white py-2 px-3 rounded-sm"
              : "font-medium"
          }
        >
          Add Book
        </NavLink>
      </li>

      <li>
        <NavLink
          onClick={() => setHidden(!hidden)}
          to="/all-books"
          className={({ isActive }) =>
            isActive
              ? "font-medium bg-black text-white py-2 px-3 rounded-sm"
              : "font-medium"
          }
        >
          All Books
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => setHidden(!hidden)}
          to="/borrowed"
          className={({ isActive }) =>
            isActive
              ? "font-medium bg-black text-white py-2 px-3 rounded-sm"
              : "font-medium"
          }
        >
          Borrowed
        </NavLink>
      </li>
    </>
  );

  const [hidden, setHidden] = useState(false);

  const navigate = useNavigate();
  const { user, signOutMethod } = useAuth();
  const isDark = false;

  // console.log(user);

  const handleSignOut = () => {
    signOutMethod()
      .then(() => {
        // console.log("Signed Out");

        toast.success("You have been logged out!!");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <nav
      className={`${
        pathname === "/add-book" ? "absolute" : "fixed"
      } top-0 left-0 drop-shadow-[0_0px_5px_rgba(0,0,0,0.12)]  w-full ${
        pathname === "/login" || pathname === "/signup"
          ? "bg-transparent text-white"
          : isDark
          ? "bg-[#121212] text-white"
          : "bg-gray-100  text-black"
      }`}
    >
      <div
        className={`z-10 navbar w-[95%] mx-auto max-w-[1440px] flex justify-between items-center  py-4`}
      >
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setHidden(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content  mt-3 p-2 shadow rounded-box w-52 z-[10] bg-black text-white hove:bg-none ${
                hidden ? "hidden" : "block"
              } z-10`}
            >
              <li className="mb-4 flex  flex-row  items-center justify-center">
                <div className="md:hidden h-[60px] w-[60px] rounded-full border border-black">
                  <img
                    src={user?.photoURL}
                    alt=""
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>

                <div className="flex w-[50%] items-center  h-full flex-row justify-between">
                  <p className="md:hidden  w-max">Towfiq</p>
                  <input
                    type="checkbox"
                    className="toggle toggle-error toggle-sm"
                    checked={isDark}
                  />
                </div>
              </li>
              {navLinks}
            </ul>
          </div>
          <NavLink className=" normal-case text-md sm:text-lg md:text-2xl font-bold w-max flex gap-2 items-center">
            <div className=" w-[25px] h-[25px] md:w-[40px] md:h-[30px]">
              <img
                src="/logo/logo.jpg"
                alt=""
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <p>LibraryCatalog</p>
          </NavLink>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex justify-between gap-4 px-1">{navLinks}</ul>
        </div>
        {user ? (
          <div className="flex justify-end gap-4 items-center">
            <p className="hidden md:block ">{user?.displayName}</p>
            <div className="hidden md:block h-[30px] w-[30px] rounded-full border border-black">
              {user && (
                <img
                  src={user?.photoURL}
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              )}
            </div>

            <Button
              onClick={handleSignOut}
              className="bg-black text-white py-1 px-2 md:py-2 md:px-5 rounded-sm text-sm md:text-base"
            >
              Sign Out
            </Button>
            <input
              type="checkbox"
              className="toggle toggle-error checked:bg-black md:toggle-md toggle-sm hidden md:block"
              checked={isDark}
            />
          </div>
        ) : (
          <div className="flex gap-2">
            <Button
              onClick={() => navigate("/login")}
              className="bg-black text-white py-1 px-2 md:py-2 md:px-5 rounded-sm text-sm md:text-base"
            >
              Login
            </Button>
            <input
              type="checkbox"
              className="toggle toggle-error checked:bg-black md:toggle-md toggle-sm hidden md:block"
              checked={isDark}
            />
          </div>
        )}

        {/* <div className="navbar-end">
          <Button
            // onClick={() => navigate("/login")}
            className="text-sm md:text-base py-[5px] px-3 bg-orange-500 text-white rounded-lg"
          >
            Login
          </Button>{" "}
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
