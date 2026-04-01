import { Camera , Check} from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

const Card = ({ title, des, classes, icon: Icon, animation }) => {
  return (
    <div
      className={`absolute ${animation} bg-white p-10 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center text-black ${classes}`}
    >
      {Icon && (
        <Icon className="mx-auto mb-4 p-2 w-10 h-10 rounded-md text-white bg-blue-500" />
      )}
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{des}</p>
    </div>
  );
};
export default Card;