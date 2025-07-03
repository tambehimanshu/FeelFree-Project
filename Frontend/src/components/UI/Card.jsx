// components/ui/card.jsx
import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white shadow-md rounded-2xl p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`text-base ${className}`}>{children}</div>;
}
