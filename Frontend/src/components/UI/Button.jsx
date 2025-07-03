// components/ui/button.jsx
import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
