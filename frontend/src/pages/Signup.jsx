import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async () => {
    setLoading(true);
    try {
      await axios.post(
        import.meta.env.VITE_REGISTER_URL,
        {
          ...formData,
          
        },
        { withCredentials: true }
      );

      toast.success("Signup successful");
      navigate("/home");

    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">

      <h1 className="text-4xl font-bold mb-2">
        Register for <span className="text-blue-800">Lost & Found</span> Portal
      </h1>

      <p className="text-gray-500 mb-6">
        Create an account to report and track items
      </p>

      <div className="bg-white shadow-xl rounded-3xl flex p-6 w-[800px]">

        <div className="w-1/2 flex items-center justify-center">
          <img
            src="/loginRegisterImage/signup-img.jpeg"
            alt="signup"
            className="rounded-lg"
          />
        </div>

        <div className="w-1/2 px-4">
          <h2 className="text-xl font-bold text-blue-800 mb-4">
            Create Your Account
          </h2>

          <p className="font-semibold text-gray-500">Full name</p>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border w-full p-2 mb-2 mt-2 rounded-xl border-orange-200 focus:outline-none 
             focus:ring-1 focus:ring-orange-200 focus:shadow-md"
          />

          <p className="font-semibold text-gray-500">Age</p>
          <input
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="border w-full p-2 mb-2 mt-2 rounded-xl border-orange-200 focus:outline-none 
             focus:ring-1 focus:ring-orange-200 focus:shadow-md"
          />

          <p className="font-semibold text-gray-500">Email Address</p>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border w-full p-2 mb-2 mt-2 rounded-xl border-orange-200 focus:outline-none 
             focus:ring-1 focus:ring-orange-200 focus:shadow-md"
          />

          <p className="font-semibold text-gray-500">Phone number</p>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border w-full p-2 mb-2 mt-2 rounded-xl border-orange-200 focus:outline-none 
             focus:ring-1 focus:ring-orange-200 focus:shadow-md"
          />

          <p className="font-semibold text-gray-500">Password</p>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border w-full p-2 mb-3 mt-2 rounded-xl border-orange-200 focus:outline-none 
             focus:ring-1 focus:ring-orange-400 focus:shadow-md"
          />

          <button
            onClick={handleSignup}
            disabled={loading}
            className="bg-orange-500 text-white w-full py-2 hover:bg-orange-600 active:bg-orange-700 active:scale-95 transition duration-150 rounded"
          >
            Register
          </button>

          <p className="text-sm mt-3">
            Already have an account?
            <Link to="/login" className="text-blue-600 ml-1">
              login here
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Signup;