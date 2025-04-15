import React from "react";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl hover:bg-blue-800 transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export { Button };
