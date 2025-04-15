// SectionHeading.jsx
import React from 'react';
import LineDecoration from '../assets/images/LineDecoration.svg'

const SectionHeading = ({ title }) => {
  return (
    <div className=" bg-white pt-10 lg:pt-[18px] flex justify-between items-center overflow-hidden">
      <div className="">
        <img
          src={LineDecoration}
          alt="Left Decoration"
          className=""
        />
      </div>

      {/* Title */}
      <h2 className="text-xl whitespace-nowrap sm:text-2xl font-semibold text-blue-900 text-center">
        {title}
      </h2>

      <div className="">
        <img
          src={LineDecoration}
          alt="Right Decoration"
          className="rotate-y-180"
        />
      </div>
    </div>

  );
};

export default SectionHeading;
