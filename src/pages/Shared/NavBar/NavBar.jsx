import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white font-bold px-4 py-2 rounded"
              : "text-white px-4 py-2"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white font-bold px-4 py-2 rounded"
              : "text-white px-4 py-2"
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white font-bold px-4 py-2 rounded"
              : "text-white px-4 py-2"
          }
        >
          Order Food
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          {/* Mobile Menu Toggle */}
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Toggle Menu"
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
          </label>
          {/* Dropdown Menu for Mobile */}
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-100 text-black rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="normal-case text-xl" href="#home">
          Bistro Boss
        </a>
      </div>

      {/* Navbar Center (Visible in Desktop Only) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <a className="btn" href="#get-started">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default NavBar;
