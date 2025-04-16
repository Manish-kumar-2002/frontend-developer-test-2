import React from "react";

const Input = ({ type = "text", placeholder, value, onChange,label }) => {
  return (
    <div className="relative font-inter">
      <label className="text-[#737373] text-[12px] leading-[18px] absolute top-[6px] left-[14px]" htmlFor={label}>{label}</label>
      {type == "number" ? <span className="text-[#737373] text-[14px] leading-[18px] absolute top-[30px] left-[14px]">$</span> : ""}
      <input
      type={type}
      placeholder={placeholder}
      id={label}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 border bg-white border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 pt-[26px] pb-[6px] pr-[10px] ${type == "number" ? "pl-[32px]" : "pl-[12px]"}`}
    />
    </div>
  );
};

export { Input };
