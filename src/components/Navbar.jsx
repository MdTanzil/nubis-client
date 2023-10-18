import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navList = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? " text-[#0092ff]" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/addproduct"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? " text-[#0092ff]" : ""
          }
        >
          Add Product
        </NavLink>
      
      </li>
      <li>
        <a>My Cart</a>
      </li>
    </>
  );
  const clickLogOut = () => {
    logout()
      .then(() => {
        // Sign-out successful.
        toast.success("Logged out");
      })
      .catch((error) => {
        // An error happened.
        console.warn(error);
      });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navList}
          </ul>
        </div>
        <a className="normal-case text-xl">
          <img className="w-[126px] h-[32px] m-2" src="/logo.svg" alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex lg:-mx-28">
        <ul className="menu menu-horizontal px-1 font-medium ">{navList}</ul>
      </div>
      <div className="navbar-end lg:mr-10">
        {user && user?.displayName && (
          <>
            <p>
              {" "}
              Hello !
              <span className="text-main font-semibold">
                {user?.displayName}{" "}
              </span>
              {"  "}
            </p>
          </>
        )}
        {user && (
          <>
            {user?.photoURL ? (
              <div className="avatar online">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
            ) : user?.displayName ? (
              <div className="avatar online placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                  <span className="text-xl">{user?.displayName[0]}</span>
                </div>
              </div>
            ) : (
              <div className="avatar online placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                  <span className="text-xl">{user?.email[0]}</span>
                </div>
              </div>
            )}
          </>
        )}
        {!user ? (
          <>
            <Link
              to={"/login"}
              className="py-1  text-white font-medium px-6 bg-[#0092ff] rounded-[30px]"
            >
              Log In
            </Link>
          </>
        ) : (
          <>
            <button
              onClick={() => clickLogOut()}
              className="py-1 ml-3 text-white font-medium px-6 bg-[#0092ff] rounded-[30px]"
            >
              Log out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
