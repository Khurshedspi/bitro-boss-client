import React from "react";

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <a href="#item1">Item 555</a>
      </li>
      <li tabIndex={0} className="relative group">
        <a className="justify-between">
          Parent
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </a>
        {/* Submenu */}
        <ul className="absolute left-0 hidden group-hover:block bg-gray-100 text-black p-2 rounded shadow-md">
          <li>
            <a href="#submenu1">Submenu 1</a>
          </li>
          <li>
            <a href="#submenu2">Submenu 2</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#item3">Item 3</a>
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
        <a className="btn btn-ghost normal-case text-xl" href="#home">
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
