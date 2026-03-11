import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-2xl">
      <ul className="flex justify-center gap-12 py-6 px-4">
        <li>
          <a
            href="/"
            className="text-lg font-semibold hover:text-blue-400 transition duration-300 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="text-lg font-semibold hover:text-blue-400 transition duration-300 relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="text-lg font-semibold hover:text-blue-400 transition duration-300 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
