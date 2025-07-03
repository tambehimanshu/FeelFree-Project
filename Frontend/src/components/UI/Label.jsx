// components/ui/label.jsx
import React from "react";

export function Label({ children, htmlFor, className = "" }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block mb-1 text-sm font-medium text-gray-700 ${className}`}
    >
      {children}
    </label>
  );
}
