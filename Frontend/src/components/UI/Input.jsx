// components/ui/input.jsx
import React from "react";

export function Input({ type = "text", className = "", ...props }) {
  return (
    <input
      type={type}
      className={`w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
}
