import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
}

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">

   
      <h1 className="text-4xl  font-bold mb-4">
        Login for <span className="text-blue-800">Lost & Found</span> Portal
      </h1>

      <p className="text-gray-500 mb-6">
        Login to your account to report, claim, and track lost or found items securely
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
            className="border w-full p-2 mb-3 mt-2 rounded border-orange-200 focus:outline-none 
             focus:ring-1
             focus:ring-yellow-400 
             focus:shadow-md"
          />

          <p className="font-semibold text-gray-500">Password</p>
          <input
            type="password"
            className="border w-full p-2 mt-2 mb-4 rounded border-orange-200 focus:outline-none 
             focus:ring-1
             focus:ring-yellow-400 
             focus:shadow-md"
          />

          <button className="bg-orange-500 text-white w-full py-2 rounded">
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