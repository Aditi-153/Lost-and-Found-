import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
          <nav className="flex items-center justify-between px-10 py-4  bg-white ">
        <h1 className="text-xl font-bold text-blue-800">LoFo</h1>

        <div className="flex gap-10 text-black-300 font-medium">
          <Link to="/home">Home</Link>
          <Link to="/found">found</Link>
          <Link to="/lost">lost</Link>
          <Link to="/checkReport">Check Reports</Link>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">
          Logout
        </button>
      </nav>
  )
}

export default Navbar
