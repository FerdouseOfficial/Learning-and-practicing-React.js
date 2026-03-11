import React from "react";

const About = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">About Us</h1>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to our application. We're dedicated to providing the best
            experience for our users.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Built with React and styled with Tailwind CSS for a modern,
            responsive design.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
