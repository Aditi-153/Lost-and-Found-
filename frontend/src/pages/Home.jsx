import React from "react";
import { Bell, Camera, Check, Search } from "lucide-react";
import Card from "../components/Card";
import Hero from "./Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-200 relative">
      <Navbar />
      <div className="flex flex-col items-center justify-center relative">
        <Hero
          h1="Lost, Report, and Find"
          h2="AI finds it for you"
          desc="Join LoFo to report lost items, post found one, and let AI help you reconnect with what matters."
        />

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
    </div>
  );
};

export default Home;
