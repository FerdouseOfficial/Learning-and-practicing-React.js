import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const app = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <Footer />
    </div>
  );
};

export default app;
