import { useState } from "react";
import axios from "axios";
import {  Link } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    const { email, password } = formData;

    if (!email || !password) {
      toast.error("fields are empty");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        import.meta.env.VITE_LOGIN_URL,
        { email, password },
        { withCredentials: true },
      );
      

     console.log(res.data.user);

      toast.success("Login successful");
      window.location.href = "/home";
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200  flex  flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">
        Login for <span className="text-blue-800">Lost & Found</span> Portal
      </h1>

      <p className="text-gray-500 mb-6">
        Login to your account to report, claim, and track lost or found items
        securely
      </p>

      <div className="bg-white shadow-xl rounded-3xl flex p-6 w-[800px]">
        <div className="w-full flex items-center justify-center">
          <img
            src="/loginRegisterImage/login-img.jpeg"
            alt="login"
            className="rounded-lg"
          />
        </div>

        <div className="w-full px-4">
          <h2 className="text-xl font-bold text-blue-800 mb-4">
            Welcome Back !
          </h2>

          <p className="font-semibold text-gray-500">Email Address</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border w-full p-2 mb-3 mt-2 rounded-xl border-orange-200 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:shadow-md"
          />

          <p className="font-semibold text-gray-500">Password</p>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border w-full p-2 mt-2 mb-4 rounded-xl border-orange-200 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:shadow-md"
          />

          <button
            onClick={() => {
              toast.promise(handleLogin(), {
                loading: "Loading",
                // success: "Logged in",
                error: (error) => `${error?.response?.data?.message}`,
              });
            }}
            disabled={loading}
            className="bg-orange-500 text-white w-full py-2 hover:bg-orange-600 active:bg-orange-700 active:scale-95 transition duration-150 rounded"
          >
            Login
          </button>

          <p className="text-sm mt-3">
            Don't have an account?
            <Link to="/register" className="text-blue-600 ml-1">
              register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
