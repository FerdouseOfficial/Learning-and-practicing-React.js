import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const About = () => {
  // let data = useParams()
  let navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate('/')
        }}
        className="bg-black text-white text-xl px-8 py-2 rounded-2xl ml-2 cursor-pointer active:scale-95"
      >
        Return to Home Page
      </button>
      <button
        onClick={() => {
          navigate(-1)
        }}
        className="bg-black text-white text-xl px-8 py-2 rounded-2xl ml-2 cursor-pointer active:scale-95"
      >
        back
      </button>
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our website. We're dedicated to providing excellent content
          and services.
        </p>
        <p className="text-lg text-gray-700">
          Our mission is to help you learn and grow through quality resources
          and support.
        </p>
      </div>
    </div>
  );
};

export default About;
