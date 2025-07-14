import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/services");
  };

  return (
  <section className="relative bg-white text-gray-800 min-h-screen flex items-center justify-center px-6 overflow-hidden">

<div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
<div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>


<svg className="absolute top-0 left-0 w-full h-full z-0" viewBox="0 0 1440 320">
  <path fill="#EEF2FF" fillOpacity="1" d="M0,64L40,90.7C80,117,160,171,240,192C320,213,400,203,480,176C560,149,640,107,720,122.7C800,139,880,213,960,240C1040,267,1120,245,1200,208C1280,171,1360,117,1400,90.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
</svg>
  {/* Decorative SVG in background */}
  {/* <div className="relative -top-20 -left-20 w-96 h-96 bg-purple-200 opacity-30 rounded-full filter blur-3xl"></div> */}

  <div className="absolute inset-0 z-0">
    
    <svg viewBox="0 0 1440 320" className="w-full h-full">
      <path
        fill="#e0e7ff"
        fillOpacity="1"
        d="M0,128L60,154.7C120,181,240,235,360,229.3C480,224,600,160,720,122.7C840,85,960,75,1080,80C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  </div>

  {/* Main Content */}
  <div className="relative z-10 max-w-4xl text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-indigo-700">
      Save Time, Skip the Queue!
    </h1>
    <p className="text-lg md:text-xl mb-8 text-gray-600">
      Whether it's Xerox, temple darshan, food tables, parking, CNG/petrol refills, or document uploads —
      book your slot online, pay securely, and receive instant updates.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300"
        onClick={() => navigate("/services")}
      >
        Get Started
      </button>
      <button
        className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-50 transition duration-300"
      >
        Learn More
      </button>
    </div>
  </div>
</section>

  );
};

export default HeroSection;
