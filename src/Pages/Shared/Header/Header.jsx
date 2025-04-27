import React from "react";
import { Link } from "react-router";
import logo from "../../../assets/Images/logo.png";

const Header = () => {
  const navItems = (
    <React.Fragment>
      <li className="font-bold text-lg text-white">
        <Link to="/home">Home</Link>
      </li>
      <li className="font-bold text-lg text-white">
        <Link to="/about">About Us</Link>
      </li>
      <li className="font-bold text-lg text-white">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="font-bold text-lg text-white">
        <Link to="/contact">Contact</Link>
      </li>
    </React.Fragment>
  );

  return (
    <div>
      <div className="navbar fixed top-0 right-0 left-0 z-50 bg-primary shadow-sm px-5">
        <div className="navbar-start md:justify-start justify-between w-[65%] md:w-[50%]">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>

          <Link to="/">
            <img className="" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end  w-[35%] md:w-[50%] ">
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:var(--color-sky-500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:var(--color-blue-900)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
