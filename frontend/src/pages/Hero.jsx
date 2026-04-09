import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ h1, h2, desc }) => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center mt-35">
      <h1 className="text-6xl font-bold text-black">{h1}</h1>

      <h2 className="text-5xl text-gray-400 mt-6">{h2}</h2>

      <p className="text-gray-500 mt-9 text-md max-w-xl">{desc}</p>

      <div className="flex flex-row gap-8 text-white mt-15 justify-center items-center">
        <Link
          to="/lost"
          className="p-3 text-sm font-sans shadow-xl bg-blue-500 rounded-md"
        >
          Lost Something ?
        </Link>
        <Link
        to="/found" 
        className="p-3 text-sm font-sans mt-4 shadow-xl text-black bg-white rounded-md">
          Found Something ?
        </Link>
        <Link 
        to="/how-it-works"
        className="p-3 text-sm font-sans shadow-xl  bg-green-800 rounded-md">
          How it works ?
        </Link>
      </div>
    </div>
  );
};

export default Hero;
