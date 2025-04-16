import React from "react";

const CustomButton = ({
  label = "Click Me",
  bgColor = "bg-yellow-400",
  textColor = "text-white",
  borderColor = "border-yellow-400",
  gradient = false,
}) => {
  return (
    <button
      className={`
        px-6 py-1 rounded-full font-normal border border-4 text-[15px] md:text-[20px] lg:w-[220px]
        ${bgColor} ${textColor} ${borderColor}
        ${
          gradient
            ? "bg-gradient-to-r from-yellow-300 via-white to-yellow-300 text-black"
            : ""
        }
        hover:opacity-90 transition-all duration-300
      `}
    >
      {label}
    </button>
  );
};

export default CustomButton;
