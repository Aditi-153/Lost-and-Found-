import React from "react";
import { Link } from "react-router-dom";
import { Bell, Camera, Check, Search } from "lucide-react";
import Card from "../components/Card";
import { useState } from "react";
import Navbar from "../components/Navbar";

const Found = () => {
  const [location, setLocation] = useState("");

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 relative flex items-center justify-center">
        
      <div className="bg-white w-full max-w-xl p-8 rounded-2xl shadow-lg">
        <h2 className="text-center text-3xl font-bold mb-3">
          Report a Found Items
        </h2>
        <p className="text-gray-400 mt-5">
          Help reunite lost items with their owners by providing details below
        </p>

        <h3 className="font-bold mt-4 text-gray-700 ">
          Item title <span className="text-red-500">*</span>
        </h3>
        <input
          type="text"
          name="title"
          className="border w-full p-2 mb-3 mt-2 rounded-xl  border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:shadow-xl"
          value={""}
        />

        <h3 className="font-bold text-gray-700 mt-2">
          Description <span className="text-red-500">*</span>
        </h3>
        <textarea
          rows="3"
          type="text"
          name="description"
          className="border w-full p-2 mb-3 mt-2 rounded-xl  border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:shadow-xl"
          value={""}
        />

        <h3 className="font-bold text-gray-700 mt-2">
          Upload image <span className="text-red-500">*</span>
        </h3>
        <div className="mt-2 mb-3">
          <div className="border-2 border-gray-300 border-dotted bg-gray-100 rounded-xl p-3 flex items-center gap-3">
            {/* File Input */}
            <input
              type="file"
              className="text-sm text-gray-600
                 file:bg-blue-500 file:text-white 
                 file:px-4 file:py-2 file:rounded-lg 
                 file:border-0 file:cursor-pointer
                 hover:file:bg-blue-600"
            />
          </div>
        </div>
        <h3 className="font-bold text-gray-700 mt-2">
          Location found <span className="text-red-500">*</span>
        </h3>
        <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
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
         type="number"
         placeholder="eg.102"
         min="100"
         max="999"
         className="border w-full p-2 mt-2 rounded-xl border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
        )}

        <button className="mt-4 bg-blue-500 text-white w-full p-2 rounded-xl 
                   shadow-lg cursor-pointer 
                   transform transition-all duration-300 ease-in-out
                   hover:-translate-y-1 hover:bg-blue-600 hover:shadow-xl">Submit Report</button>
      </div>
      

      <Card
        icon={Camera}
        title={"Quick report"}
        des={"Report items instantly"}
        classes={"top-30 left-16"}
      />
      <Card
        icon={Check}
        title={"Verified"}
        des={"Secure matching"}
        classes={"top-[360px] left-[120px]"}
      />
      <Card
        icon={Search}
        title={"Smart Search"}
        des={"Find Lost items fast "}
        classes={"top-30 right-16"}
      />
      <Card
        icon={Bell}
        title={"AI based match"}
        des={"show info only if matched"}
        classes={"top-[360px] right-[120px]"}
      />
    </div>
    </>
  );
};

export default Found;
