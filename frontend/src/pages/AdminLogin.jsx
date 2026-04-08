import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const AdminLogin = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    const { email, password } = formData;

    if (!email || !password) {
      toast.error("Fields are empty");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        import.meta.env.VITE_ADMIN_LOGIN_URL,
        { email, password },
        { withCredentials: true },
      );


      console.log(res.data);

      toast.success("Login successful");
      navigate("/admin-dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="border p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          className="w-full mb-3 p-2 border rounded"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className="w-full mb-3 p-2 border rounded"
          value={formData.password}
          onChange={handleChange}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white p-2 rounded"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
