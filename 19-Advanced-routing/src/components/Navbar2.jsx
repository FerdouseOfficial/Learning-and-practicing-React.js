import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Navbar2 = () => {
  let navigate = useNavigate();
  return (
    <div className="bg-[#141D2D] pb-2 border-t border-gray-500 pt-3">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-amber-600 text-white text-xl px-8 py-2 rounded-2xl ml-2 cursor-pointer active:scale-95"
      >
        Return to Home Page
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-amber-600 text-white text-xl px-8 py-2 rounded-2xl ml-2 cursor-pointer active:scale-95"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-amber-600 text-white text-xl px-8 py-2 rounded-2xl ml-2 cursor-pointer active:scale-95"
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
