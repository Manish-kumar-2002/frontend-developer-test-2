import React from "react";

const SectionDetails = ({ imageSrc, imageAlt, content, reverse }) => {
  return (
    <div className="container">
      <div
        className={`flex flex-col md:flex-row justify-between gap-8 my-10 ${
          reverse ? "md:flex-row-reverse" : ""
        } animate-fadeIn`}
      >
        <div className={`w-full md:w-1/2 transition-transform duration-500 ease-in-out hover:scale-105  ${
          reverse ? "" : "lg:pt-[35px] lg:pl-[54px] lg:pr-[60px] lg:pb-[0px]"
        }`} >
          <img
            src={imageSrc}
            alt={imageAlt || "Image"}
            className="w-full"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 text-gray-700 text-lg leading-relaxed transition-all duration-500">
          {content}
        </div>
      </div>
    </div>
  );
};

export default SectionDetails;
