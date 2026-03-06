import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-16 py-6">
      <h4 className="uppercase bg-black text-white px-5 py-3 rounded-full text-xs">Target Audience</h4>
      <button className="bg-gray-300 uppercase px-4 py-2 rounded-full tracking-wider text-xs">Digital Banking Platform</button>
    </div>
  );
};

export default Navbar;
