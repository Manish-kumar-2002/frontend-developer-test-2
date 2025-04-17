// SectionHeading.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import LineDecoration from "../assets/images/LineDecoration.svg";
import LineDecorationRight from "../assets/images/LineDecoration-right.svg";
import LineDecorationAnimate from "../assets/images/LineDecorationAnimate.svg";

const SectionHeading = ({ title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div
      className="bg-white pt-10 lg:pt-[18px] flex justify-between items-center overflow-hidden"
      ref={ref}
    >
      {/* Left Decoration with animated overlay */}
      <div className="relative w-[100px] md:w-auto">
        <motion.img
          src={LineDecorationAnimate}
          alt="Left Decoration"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="w-full"
        />

        {/* Overlay effect */}
        <motion.div
          initial={{ width: "100%" }}
          animate={isInView ? { width: "0%" } : {}}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="absolute top-0 right-0 h-full bg-white"
        />
      </div>

      {/* Title Animation */}
      <motion.h2
        className="text-xl whitespace-nowrap sm:text-2xl font-semibold text-blue-900 text-center mx-4 sm:mx-10"
        initial={{ y: 40, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
      >
        {title}
      </motion.h2>

      {/* Right Decoration (same overlay, flipped) */}
      <div className="rotate-y-180 relative w-[100px] md:w-auto">
        <motion.img
          src={LineDecorationAnimate}
          alt="Right Decoration"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="w-full"
          style={{ transform: "rotateY(180deg)" }}
        />

        {/* Overlay */}
        <motion.div
          initial={{ width: "100%" }}
          animate={isInView ? { width: "0%" } : {}}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="absolute top-0 right-0 h-full bg-white"
        />
      </div>
    </div>
  );
};

export default SectionHeading;
