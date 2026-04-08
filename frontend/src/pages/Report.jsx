import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const Report = () => {
  const [lostItems, setLostItems] = useState([]);
  const [foundItems, setFoundItems] = useState([]);
  const [activeTab, setActiveTab] = useState("lost");
  

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_GET_ITEMS_URL, {
          withCredentials: true,
        });

        if (res?.data) {
          setLostItems(res.data.lost || []);
          setFoundItems(res.data.found || []);
        }

        
      } catch (err) {
        console.log(err);
      }
    };

    fetchItems();
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      <Navbar />
    <div className=""></div>
      <div className="max-w-5xl mx-auto mt-10 px-4 space-y-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h1 className="text-2xl font-bold">Welcome, {name}!</h1>
          <p className="text-gray-500">
            Here's a summary of your reported items
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h1 className="text-3xl font-bold">{lostItems.length}</h1>
            <p className="text-gray-500">Lost Items Reported</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h1 className="text-3xl font-bold">{foundItems.length}</h1>
            <p className="text-gray-500">Found Items Reported</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h1 className="text-3xl font-bold">
              {lostItems.length + foundItems.length}
            </h1>
            <p className="text-gray-500">Total Reports</p>
          </div>
        </div>

      
        <div className="bg-white p-4 rounded-xl shadow flex gap-2">
          <button
            onClick={() => setActiveTab("lost")}
            className={`flex-1 py-2 rounded-lg ${
              activeTab === "lost" ? "bg-blue-500 text-white" : "text-gray-600"
            }`}
          >
            Lost Items ({lostItems.length})
          </button>

          <button
            onClick={() => setActiveTab("found")}
            className={`flex-1 py-2 rounded-lg ${
              activeTab === "found" ? "bg-blue-500 text-white" : "text-gray-600"
            }`}
          >
            Found Items ({foundItems.length})
          </button>
        </div>

      
        {activeTab === "lost" && lostItems.length === 0 && (
          <div className="bg-white p-6 rounded-xl shadow text-center">
            No lost items found
          </div>
        )}

        {activeTab === "found" && foundItems.length === 0 && (
          <div className="bg-white p-6 rounded-xl shadow text-center">
            No found items
          </div>
        )}

        <div className="grid grid-cols-3 gap-6">
         
          {activeTab === "lost" &&
            lostItems.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow overflow-hidden"
              >
                <img
                  src={item.imageUrl}
                  alt="lost item"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <h2 className="font-bold text-lg">{item.location}</h2>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                  <p className="text-xs text-gray-400 mt-2">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}

          
          {activeTab === "found" &&
            foundItems.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow overflow-hidden"
              >
                <img
                  src={item.imageUrl}
                  alt="found item"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="font-bold text-lg">{item.location}</h2>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>

      
    
  );
};

export default Report;
