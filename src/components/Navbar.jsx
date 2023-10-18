import { NavLink } from "react-router-dom";


const Navbar = () => {
  const navList = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? " text-[#0092ff]"
              : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <a>Service</a>
      </li>
      <li>
        <a>Details</a>
      </li>
    </>
  );
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
          <img className="w-[126px] h-[32px] m-2" src="./logo.svg" alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex lg:-mx-28">
        <ul className="menu menu-horizontal px-1 font-medium ">{navList}</ul>
      </div>
      <div className="navbar-end lg:mr-10">
        <a className="py-1 text-white font-medium px-6 bg-[#0092ff] rounded-[30px]">login</a>
      </div>
    </div>
  );
};

export default Navbar;