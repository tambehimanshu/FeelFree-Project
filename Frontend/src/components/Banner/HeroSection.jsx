import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#7c3aed33,_transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#ec489933,_transparent_40%)]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        <span className="inline-block bg-pink-600/20 text-pink-400 px-4 py-1 rounded-full text-sm font-medium mb-6">
          🚀 Smart Slot Booking
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Build smarter queues, <br /> save <span className="text-pink-500">time</span> & fuel
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          From Xerox shops to fuel stations — book your slot online, pay securely,
          and skip long waiting lines with real-time updates.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
            onClick={() => navigate("/services")}
          >
            Start Booking
          </button>
          <button className="border border-pink-500 text-pink-400 px-6 py-3 rounded-full font-semibold hover:bg-pink-500/10 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
