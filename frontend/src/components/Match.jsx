import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Match = () => {
  const [matches, setMatches] = useState([]);

  const locationData = useLocation();
  const { location, description } = locationData.state || {};

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const res = await axios.post(
          import.meta.env.VITE_MATCH_URL,
          {
            location,
            description,
          },
          { withCredentials: true },
        );

        console.log("MATCH RESPONSE:", res.data);

        setMatches(res.data.matches || []);
      } catch (err) {
        console.log(err);
      }
    };

    

    if (location && description) {
      fetchMatches();
    }
  }, [location, description]);

  if (!location || !description) {
    return (
      <>
        <Navbar />
        <p className="text-center mt-10">No search data</p>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto mt-10 px-4">
        <h1 className="text-4xl font-bold justify-left text-center mb-6">
          Found Items
        </h1>

        {matches.length === 0 && (
          <p className="text-center text-gray-500">No matching items found</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow overflow-hidden"
            >
              <a href={item.imageUrl} target="_blank">
                <img
                  src={item.imageUrl}
                  alt="item"
                  className="w-full h-40 object-cover"
                />
              </a>

              <div className="p-4">
                <h2 className="font-bold">{item.location}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>

                <p className="text-xs text-gray-400 mt-2">
                  {new Date(item.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Match;
