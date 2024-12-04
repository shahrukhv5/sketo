import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import close icon for the menu
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu toggle

  return (
    <nav className="bg-transparent  text-white ">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">SKETO</div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-md px-4 py-2 shadow-md w-full md:w-1/2">
          <FiSearch className="text-gray-500 text-lg mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 outline-none w-full text-gray-800 placeholder-gray-500"
          />
        </div>

        {/* Hamburger Menu */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#" className="hover:text-gray-300">
              Data
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Business
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Microsoft
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Design
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Coding
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col mt-4 space-y-4 md:hidden">
          <li>
            <a href="#" className="hover:text-gray-300 block">
              Data
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 block">
              Business
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 block">
              Microsoft
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 block">
              Design
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 block">
              Coding
            </a>
          </li>
          <li className="bg-gray-100 rounded-md px-4 py-2 shadow-md">
            {/* Search Field in Mobile */}
            <div className="flex items-center">
              <FiSearch className="text-gray-500 text-lg mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-100 outline-none w-full text-gray-800 placeholder-gray-500"
              />
            </div>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
