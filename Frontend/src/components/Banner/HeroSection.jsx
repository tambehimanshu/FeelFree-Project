import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

  const navigate = useNavigate();

  const handleGetStarted=()=>{
    navigate("/services");
  }
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Save Time, Skip the Queue!
        </h1>
        <p className="text-lg md:text-xl mb-8">
           Whether it's Xerox, temple darshan, food tables, parking, CNG/petrol refills, or document uploads —
          book your slot online, pay securely, and receive instant updates. Experience the future of queue-free service in a smart and professional way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-purple-100 transition duration-300" onClick={handleGetStarted}>
            Get Started
          </button>
          <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-purple-700 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
