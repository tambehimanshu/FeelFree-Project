import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-purple-700">FeelFree Services</h2>
          <p className="text-sm text-gray-500 mt-1">© {new Date().getFullYear()} FeelFree. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-purple-700 text-sm">Home</Link>
          <Link to="/about" className="hover:text-purple-700 text-sm">About</Link>
          <Link to="/services" className="hover:text-purple-700 text-sm">Services</Link>
          <Link to="/contact" className="hover:text-purple-700 text-sm">Contact</Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
