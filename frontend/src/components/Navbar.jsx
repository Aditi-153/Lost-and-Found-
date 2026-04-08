import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    try {
      await axios.get(import.meta.env.VITE_LOGOUT_URL, {
        withCredentials: true,
      });
      setUser(null);
      toast.success("Logged out successfully");
      navigate("/login");
    } catch {
      toast.error("Logout failed");
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_PROFILE_URL, {
          withCredentials: true,
        });

        setUser(res.data.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white">
      <h1 className="text-xl font-bold text-blue-800">LoFo</h1>

      <div className="flex gap-10 font-medium">
        <Link to="/home">Home</Link>
        <Link to="/found">Found</Link>
        <Link to="/lost">Lost</Link>
      </div>

      <div className="relative">
        {loading ? (
          <div className="text-gray-400 text-sm">Loading...</div>
        ) : user ? (
          <>
            <div
              onClick={() => setOpen(!open)}
              className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold cursor-pointer hover:scale-110 transition"
            >
              {user?.name?.[0]?.toUpperCase() || "U"}
            </div>

            {open && (
              <>
                <div
                  onClick={() => setOpen(false)}
                  className="fixed inset-0"
                ></div>

                <div className="absolute right-0 mt-5 w-44 bg-white shadow-xl rounded-lg z-10 border border-gray-200">
                  <div className="px-4 py-2 font-semibold text-gray-700 border-b">
                    {user.name}
                  </div>

                  <Link
                    to="/checkReport"
                    className="block px-4 py-2 hover:bg-blue-100 cursor-pointer"
                  >
                    Check Reports
                  </Link>

                  <div
                    onClick={handleLogout}
                    className="px-4 py-2 hover:bg-red-100 text-red-500 cursor-pointer"
                  >
                    Logout
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <div className="flex gap-4">
            <Link to="/login" className="text-blue-600 font-semibold">
              Login
            </Link>
            <Link to="/register" className="text-green-600 font-semibold">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
