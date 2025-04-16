import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import SectionHeading from "../components/SectionHeading";
import InvestmentCalculator from "../components/InvestmentCalculator";

const InvestmentReturn = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div
    ref={ref}
     className="investment_return py-6  lg:py-12 lg:pt-[122px]">
      <SectionHeading title={"Investment Return Calculator"} />
      <InvestmentCalculator />
      <SectionHeading title={"Digital Gold Investment"} />
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        className="text-[#6C747D] text-center lg:text-[20px] lg:mt-[-70px] px-[20px]"
      >
        <p>
          We at AIION GOLD are here to help you ease your digital gold
          investment plans.
        </p>
        <p>
          We bring forth for you the pure 24k carat digital gold, at the best
          rate - at just a click!
        </p>
        <p>
          Offering multiple timelines to streamline the process for you, our
          experts are at every
        </p>
      </motion.div>
    </div>
  );
};

export default InvestmentReturn;
