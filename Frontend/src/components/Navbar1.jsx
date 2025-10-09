import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiBook,
  FiStar,
  FiPhone,
  FiShoppingCart,
  FiLogOut,
  FiCamera,
} from "react-icons/fi";
import { useOrder } from "../OrderContext/OrdersContext";
import Login from "./Login/Login";

function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { totalItems } = useOrder();
  const [showLoginModel, setShowLoginModel] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem("loginData"))
  );

  useEffect(() => {
    setShowLoginModel(location.pathname === "/login");
    setIsAuthenticated(Boolean(localStorage.getItem("loginData")));
  }, [location.pathname]);

  const handleLoginSuccess = () => {
    localStorage.setItem("loginData", JSON.stringify({ loggedIn: true }));
    setIsAuthenticated(true);
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setIsAuthenticated(false);
  };

  const renderDesktopAuthButton = () => {
    return isAuthenticated ? (
      <button
        onClick={handleLogout}
        className="px-3 py-2 bg-white/70 backdrop-blur-md text-purple-700 rounded-full font-semibold hover:bg-white/90 transition duration-300 flex items-center space-x-2"
      >
        <FiLogOut />
        <span>Logout</span>
      </button>
    ) : (
      <button
        onClick={() => navigate("/login")}
        className="px-3 py-2 bg-white/70 backdrop-blur-md text-purple-700 font-semibold hover:bg-white/90 transition duration-300 flex items-center space-x-2 rounded-full"
      >
        <span><Login /></span>
      </button>
    );
  };

  const renderMobilAuthBtn = () => {
    return isAuthenticated ? (
      <button
        onClick={handleLogout}
        className="w-full px-4 py-3 bg-white/70 backdrop-blur-md text-purple-700 font-semibold flex items-center justify-center space-x-2 text-sm rounded-lg"
      >
        <FiLogOut />
        <span>Logout</span>
      </button>
    ) : (
      <button
        onClick={() => {
          navigate("/login");
          setIsOpen(false);
        }}
        className=""
      >
        Login
      </button>
    );
  };

  const navLinks = [
    { name: "QR", to: "/qrscanner", icon: <FiCamera /> },
    { name: "Home", to: "/", icon: <FiHome /> },
    { name: "Profile", to: "/profile", icon: <FiBook /> },
    { name: "About", to: "/about", icon: <FiStar /> },
    { name: "Orders", to: "/orders", icon: <FiPhone /> },
  ];

  return (
    <nav className="bg-white backdrop-blur-md border-b border-white/20 text-gray-800 w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex justify-between items-center h-16 md:h-20 px-4">
          <NavLink
            to="/"
            className="text-2xl md:text-2xl font-bold text-indigo-600"
          >
            FeelFree
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-5 text-lg">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition ${
                    isActive
                      ? "bg-white/60 text-indigo-700"
                      : "hover:bg-white/40 hover:text-indigo-600"
                  }`
                }
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </NavLink>
            ))}

            {/* Cart */}
            <NavLink
              to="/orders"
              className="relative text-gray-700 hover:text-indigo-600"
            >
              <FiShoppingCart className="text-xl" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </NavLink>

            {renderDesktopAuthButton()}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/40 backdrop-blur-md border-t border-white/20 px-4 pt-2 pb-4 shadow-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md text-sm ${
                  isActive
                    ? "bg-white/60 text-indigo-700"
                    : "text-gray-700 hover:bg-white/40 hover:text-indigo-600"
                }`
              }
            >
              <span className="mr-2">{link.icon}</span>
              {link.name}
            </NavLink>
          ))}
          <div className="mt-4">{renderMobilAuthBtn()}</div>
          <Login />
        </div>
      )}
    </nav>
  );
}

export default Navbar1;
