import React from "react";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4">Welcome Home</h1>
          <p className="text-xl mb-8 opacity-90">
            Build amazing things with React and Tailwind CSS
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
