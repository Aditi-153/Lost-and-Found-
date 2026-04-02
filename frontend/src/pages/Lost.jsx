import React from "react";
import { Link } from "react-router-dom";
import { Bell, Camera, Check, Search } from "lucide-react";
import Card from "../components/Card";
import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Lost = () => {
  const [location, setLocation] = useState("");

  const [formData, setFormData] = useState({
    description: "",
    img: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLost = async () => {
    setLoading(true);

    try {
      const data = new FormData();

      data.append("description", formData.description);
      data.append("location", formData.location);
      data.append("image", formData.img);

      await axios.post(import.meta.env.VITE_LOST_FOUND_URL, data, {
        withCredentials: true,
      });

      toast.success("report lost item successful");
      navigate("/home");
      if (!formData.img) {
        toast.error("Please upload an image");
        setLoading(false);
        return;
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 relative flex items-center justify-center">
        <div className="bg-white w-full max-w-xl p-8 rounded-2xl shadow-lg">
          <h2 className="text-center text-3xl font-bold mb-3">
            Report a lost Items
          </h2>
          <p className="text-gray-400 mt-5 text-sm ml-5">
            Describe what you lost clearly , our AI will check the database for
            matches
          </p>

          <h3 className="font-bold text-gray-700 mt-2">
            Description <span className="text-red-500">*</span>
          </h3>
          <textarea
            placeholder=" Provide detailed information about the item"
            onChange={handleChange}
            rows="3"
            name="description"
            className="border w-full p-2 mb-3 mt-2 rounded-xl border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:shadow-xl"
            value={formData.description}
          />

          <h3 className="font-bold text-gray-700 mt-2">
            Upload image <span className="text-red-500">*</span>
          </h3>
          <div className="mt-2 mb-3">
            <div className="border-2 border-gray-300 border-dotted bg-gray-100 rounded-xl p-3 flex items-center gap-3">
              <input
                type="file"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    img: e.target.files[0],
                  })
                }
                className="text-sm text-gray-600
                 file:bg-blue-500 file:text-white 
                 file:px-4 file:py-2 file:rounded-lg 
                 file:border-0 file:cursor-pointer
                 hover:file:bg-blue-600"
              />
            </div>
          </div>

          <h3 className="font-bold text-gray-700 mt-2">
            Location last seen<span className="text-red-500">*</span>
          </h3>
          <select
            value={formData.location}
            onChange={(e) => {
              setLocation(e.target.value);
              setFormData({
                ...formData,
                location: e.target.value,
              });
            }}
            name="location"
            className="border w-full p-2 mb-3 mt-2 rounded-xl border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:shadow-xl"
          >
            <option value="">-- Select Location --</option>
            <option value="canteen">Canteen</option>
            <option value="library">Library</option>
            <option value="classroom">Classroom</option>
            <option value="parking">Parking</option>
            <option value="washroom">Washroom</option>
            <option value="campus">Campus</option>
          </select>

          {location === "classroom" && (
            <input
              name="classroom"
              onChange={handleChange}
              type="number"
              placeholder="eg.102"
              min="100"
              max="999"
              className="border w-full p-2 mt-2 rounded-xl border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          )}

          <button
            disabled={loading}
            onClick={handleLost}
            className="mt-4 bg-blue-500 text-white w-full p-2 rounded-xl 
                   shadow-lg cursor-pointer 
                   transform transition-all duration-300 ease-in-out
                   hover:-translate-y-1 hover:bg-blue-600 hover:shadow-xl"
          >
            Search for item
          </button>
        </div>

        <Card
          icon={Camera}
          title="Quick report"
          des="Report items instantly"
          classes="top-30 left-16"
          animation="animate-[float_7s_ease-in-out_infinite]"
        />

        <Card
          icon={Check}
          title="Verified"
          des="Secure matching"
          classes="top-[360px] left-[120px]"
          animation="animate-[float_8s_ease-in-out_infinite_reverse]"
        />

        <Card
          icon={Search}
          title="Smart Search"
          des="Find Lost items fast"
          classes="top-30 right-16"
          animation="animate-[float_7s_ease-in-out_infinite]"
        />

        <Card
          icon={Bell}
          title="AI based match"
          des="show info only if matched"
          classes="top-[360px] right-[120px]"
          animation="animate-[float_9s_ease-in-out_infinite_reverse]"
        />
      </div>
    </>
  );
};

export default Lost;
