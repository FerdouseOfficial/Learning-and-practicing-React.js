const Navbar = () => {
  return (
    <nav className="bg-linear-to-r from-gray-900 to-gray-800 text-white shadow-2xl">
      <div className="flex justify-between items-center px-4 py-4">
        <h1 className="text-2xl font-bold text-blue-400">Billionaire Jihad</h1>
        <ul className="flex gap-12">
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
      </div>
    </nav>
  );
};

export default Navbar;
