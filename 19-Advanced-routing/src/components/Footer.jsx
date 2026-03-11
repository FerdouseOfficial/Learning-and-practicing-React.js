import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About</h3>
              <p className="text-gray-400">
                Learning React routing and building modern web applications.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <Link
                    to="/"
                    className="cursor-pointer hover:text-white hover:translate-x-1 transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="cursor-pointer hover:text-white hover:translate-x-1 transition"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="cursor-pointer hover:text-white hover:translate-x-1 transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Follow</h3>
              <div className="flex gap-4 text-gray-400">
                <a
                  href="#"
                  className="cursor-pointer hover:text-white hover:scale-110 transition"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="cursor-pointer hover:text-white hover:scale-110 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
