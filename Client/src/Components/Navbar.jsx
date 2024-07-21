import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function NavBar({ scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="z-30 fixed top-0 left-0 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="font-bold text-2xl text-white">
          <span className="font-bold text-[#7C7458] text-3xl">A</span>kkaoui
        </div>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 "
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block bg-black" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg text-center  md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a
                onClick={() => scrollToSection("home")}
                className="hover:cursor-pointer block py-2 px-3 text-white rounded md:bg-transparent md:text-[#7C7458] hover:text-[#7C7458] md:p-0 font-bold"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("about")}
                className="hover:cursor-pointer block py-2 px-3 text-white rounded  md:hover:bg-transparent font-semibold md:border-0 hover:text-[#7C7458] md:p-0 "
              >
                About
              </a>
            </li>
            <li>
              <a className="hover:cursor-pointer block py-2 px-3 text-white rounded  md:hover:bg-transparent font-semibold md:border-0 hover:text-[#7C7458] md:p-0 ">
                Services
              </a>
            </li>
            <li>
              <a className="hover:cursor-pointer block py-2 px-3 text-white rounded  md:hover:bg-transparent font-semibold md:border-0 hover:text-[#7C7458] md:p-0 ">
                Portfolio
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("contact")}
                className="hover:cursor-pointer block py-2 px-3 text-white rounded font-semibold  md:hover:bg-transparent md:border-0 hover:text-[#7C7458] md:p-0 "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
