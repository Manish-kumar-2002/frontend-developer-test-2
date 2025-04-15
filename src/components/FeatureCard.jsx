import React from "react";

const FeatureCard = ({ card_icon, card_heading, card_pra }) => {
  return (
    <div className="max-w-[390px] py-5 px-6 lg:pr-0 ">
      <img src={card_icon} alt="icon" className="mb-3" />
      <div className="relative">
        <div className="text-2xl relative font-semibold mb-2 lg:mb-3 lg:text-[28px] font-[600]">
          {card_heading}
        </div>
        <p className="lg:text-[20px] lg:font-[500] leading-[31px]">{card_pra}</p>
        {/* Vertical Line */}
        <div className="absolute left-[-20px] top-3 h-[75%] w-[0.1rem]">
          <div className="h-[60%] bg-[#D9D9D9]" />
          <div className="h-[40%] bg-gradient-to-b from-[#6366f1] to-[#7c3aed]" />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
