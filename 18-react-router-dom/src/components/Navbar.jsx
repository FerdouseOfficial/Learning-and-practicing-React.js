import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#5371FF] flex justify-between p-5 ">
      <h2 className="font-[apple] font-bold tracking-wide text-2xl">
        Billionaire
      </h2>
      <div className="flex justify-between gap-4">
        <a
          className="font-[Apple] tracking-wider font-extrabold text-xl"
          href="/"
        >
          Home
        </a>
        <a
          className="font-[Apple] tracking-wider font-extrabold text-xl"
          href="/about"
        >
          About
        </a>
        <a
          className="font-[Apple] tracking-wider font-extrabold text-xl"
          href="/contact"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
