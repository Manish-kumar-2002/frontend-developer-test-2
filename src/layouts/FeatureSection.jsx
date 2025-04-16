import React from "react";
import { motion } from "framer-motion";
import FeatureSectionBg from "../assets/images/FeatureSection.png";
import FeatureCard from "../components/FeatureCard";
import UserFriendlyIcon from "../assets/images/userfriendly.svg";
import VersatilePlanPackage from "../assets/images/VersatilePlanPackage.svg";
import HighProfitReturns from "../assets/images/HighProfitReturns.svg";
import UltimateSecurity from "../assets/images/UltimateSecurity.svg";

const FeatureSection = () => {
  return (
    <div className="featuresection relative py-10 px-6 lg:px-20">
      <div className="relative z-10">
        <div className="md:flex items-center justify-between lg:mb-[65px]">
          {/* Top Two Cards with Motion */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <FeatureCard
              card_icon={UserFriendlyIcon}
              card_heading={"User Friendly Exprince"}
              card_pra={
                "We aim to provide a seamless investing experience to one and all, and therefore portfolio in the long and short term. have designed the platform accordingly."
              }
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FeatureCard
              card_icon={VersatilePlanPackage}
              card_heading={"Versatile Plan Package"}
              card_pra={
                "We have a plethora of exclusive investment plans to upgrade your financial growth like never before!"
              }
            />
          </motion.div>
        </div>

        {/* Center Image */}
        <div className="hidden lg:block absolute bottom-[-40px] lg:w-[799px] left-[59%] transform -translate-x-1/2">
          <img src={FeatureSectionBg} alt="Happy User" />
        </div>

        {/* Bottom Two Cards with Motion */}
        <div className="md:flex items-center justify-between text-white">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FeatureCard
              card_icon={HighProfitReturns}
              card_heading={"High Profit Returns"}
              card_pra={
                "Our investment plans are curated in a way that provides you with the highest returns, vis-a-vis the traditional monetary return methods."
              }
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <FeatureCard
              card_icon={UltimateSecurity}
              card_heading={"Ultimate Security"}
              card_pra={
                "Two-step authentication process, backed by a dedicated server providing sturdy encryption (2048-bit SSL). Your transactions are safe with us."
              }
            />
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay at Bottom */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent to-[#3f7dbf]" />
    </div>
  );
};

export default FeatureSection;
