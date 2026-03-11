import React from "react";
import Male from "./Male";
import Women from "./Women";
import Kids from "./Kids";
import { Link, Outlet } from "react-router-dom";
const Product = () => {
  return (
    <div className="h-full mt-3">
      <div className="flex justify-center items-center gap-4 ">
        <Link
          className="bg-gray-500 text-xl px-4 py-2 rounded-2xl tracking-wide font-[Apple] "
          to="/Product/Male"
        >
          Mens
        </Link>
        <Link
          className="bg-gray-500 text-xl px-4 py-2 rounded-2xl tracking-wide font-[Apple] "
          to="/Product/Women"
        >
          Women
        </Link>
        <Link
          className="bg-gray-500 text-xl px-4 py-2 rounded-2xl tracking-wide font-[Apple] "
          to="/Product/Kids"
        >
          Kids
        </Link>
      </div>
      <h2 className="text-center text-3xl mt-5 absolute top-80 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        Product Page
      </h2>
      <Outlet />
    </div>
  );
};

export default Product;
