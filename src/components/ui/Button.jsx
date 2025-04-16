import React from "react";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#0F4B71] text-white font-semibold px-4 py-2 rounded-xl hover:[#0c3c60] transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export { Button };
