import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#5371FF] flex justify-between p-5 ">
      <h2 className="font-[apple] font-bold tracking-wide text-2xl">
        Billionaire
      </h2>
      <div className="flex justify-between gap-4">
        <Link
          className="font-[Apple] tracking-wider font-extrabold text-xl"
          to="/"
        >
          Home
        </Link>
        <Link
          className="font-[Apple] tracking-wider font-extrabold text-xl"
          to="/about"
        >
          About
        </Link>
        <Link
          className="font-[Apple] tracking-wider font-extrabold text-xl"
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
