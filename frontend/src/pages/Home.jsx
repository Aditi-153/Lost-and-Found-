import React from "react";
import { Link } from "react-router-dom";
import { Bell, Camera, Check, Search } from "lucide-react";
import Card from "../components/Card";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="h-screen bg-gray-200 relative">
      <nav className="flex items-center justify-between px-10 py-4  bg-white ">
        <h1 className="text-xl font-bold text-blue-800">LoFo</h1>

        <div className="flex gap-10 text-black-300 font-medium">
          <Link to="/home">Home</Link>
          <Link to="/found">found</Link>
          <Link to="/lost">lost</Link>
          <Link to="/checkReport">Check Reports</Link>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">
          Logout
        </button>
      </nav>

      <div className="flex flex-col items-center justify-center relative">
        <Hero
          h1="Lost, Report, and Find"
          h2="AI finds it for you"
          desc="Join LoFo to report lost items, post found one, and let AI help you reconnect with what matters."
        />

        <Card
          icon={Camera }
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
    </div>
  );
};

export default Home;
