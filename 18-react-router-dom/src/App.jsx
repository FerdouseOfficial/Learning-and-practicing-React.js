import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="">
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
