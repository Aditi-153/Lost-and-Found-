import React from "react";
import { Camera, Bot, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Report Your Item",
    desc: "Tell us what you lost or found. Upload an image, add description, category and location.",
    example: 'Example: "Black wallet lost near college gate."',
  },
  {
    icon: Bot,
    title: "Let AI Connect",
    desc: "Our AI scans lost & found database and finds matching items instantly using smart analysis.",
    example: '"AI found 2 possible matches for your wallet."',
  },
  {
    icon: MessageCircle,
    title: "Reconnect Safely",
    desc: "Contact securely and arrange pickup while keeping your privacy protected.",
    example: '"Your item, found. Mission complete!"',
  },
];

const Working = () => {
  return (
    <div
      id="how-it-works"
      className="w-full py-24 px-6 bg-gray-100 flex flex-col items-center"
    >

      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold text-black">How LoFo Works</h1>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          3 simple steps to reunite you with your lost items using AI
        </p>
      </div>

   
      <div className="flex flex-col gap-20 max-w-6xl w-full">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
           
              <div className="flex-1">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-lg mb-6">
                  {index + 1}
                </div>

                <h2 className="text-3xl font-semibold mb-4">{step.title}</h2>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {step.desc}
                </p>

                <div className="bg-white p-4 rounded-lg shadow text-sm italic text-gray-500">
                  {step.example}
                </div>
              </div>

         
              <div className="flex-1 bg-white rounded-2xl shadow-lg p-12 flex flex-col items-center justify-center relative overflow-hidden">
             
                <div className="absolute w-40 h-40 bg-blue-200 opacity-20 rounded-full top-[-40px] right-[-40px] animate-pulse"></div>

                <Icon size={80} className="text-blue-500 mb-6 animate-bounce" />

                <p className="font-semibold text-blue-500">Smart Feature</p>
                <p className="text-gray-500 text-sm">AI powered system</p>
              </div>
            </div>
          );
        })}
      </div>

    
      <div className="mt-24 bg-white p-12 rounded-2xl shadow-lg text-center max-w-3xl w-full">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>

        <p className="text-gray-500 mb-8">
          Join users who have successfully reunited with their belongings
        </p>

        <div className="flex gap-6 justify-center flex-wrap">
          <a
            href="/lost"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Report Lost Item
          </a>

          <a
            href="/found"
            className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition"
          >
            Report Found Item
          </a>
        </div>
      </div>
    </div>
  );
};

export default Working;
