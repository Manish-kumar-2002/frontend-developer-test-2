import React from "react";
import { motion } from "framer-motion";

const SectionDetails = ({ imageSrc, imageAlt, content, reverse }) => {
  return (
    <div className="container">
      <div
        className={`flex flex-col md:flex-row justify-between gap-8 my-10 ${
          reverse ? "md:flex-row-reverse" : ""
        } animate-fadeIn overflow-hidden`}
      >
        <motion.div
          initial={{ x: reverse ? 100 : -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`w-full md:w-1/2 transition-transform duration-500 ease-in-out hover:scale-105  ${
            reverse ? "" : "lg:pt-[35px] lg:pl-[54px] lg:pr-[60px] lg:pb-[0px]"
          }`}
        >
          <img src={imageSrc} alt={imageAlt || "Image"} className="w-full" />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ x: reverse ? -100 : 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="w-full md:w-1/2 text-gray-700 text-lg leading-relaxed transition-all duration-500"
        >
          {content}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionDetails;
