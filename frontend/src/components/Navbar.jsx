import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const User = await axios.get(import.meta.env.VITE_LOGOUT_URL, {
        withCredentials: true,
      });
      
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error.message, "Logout failed");
      return 
    }
  };

  return (
    <nav className="flex items-center justify-between px-10 py-4  bg-white ">
      <h1 className="text-xl font-bold text-blue-800">LoFo</h1>

      <div className="flex gap-10 text-black-300 font-medium">
        <Link to="/home">Home</Link>
        <Link to="/found">found</Link>
        <Link to="/lost">lost</Link>
        <Link to="/checkReport">Check Reports</Link>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-md"
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
