import React from "react";
import Bannerimg from "../assets/images/banner.png";
import CustomButton from "../components/CustomButton";

const HeroSection = () => {
  return (
    <section className=" py-[40px] pt-[114px] lg:pt-[184px] h-auto md:h-[500px] lg:h-[889px] relative overflow-hidden">
      <img
        className="absolute top-0 left-0 z-1 w-full h-full object-cover"
        src={Bannerimg}
        alt="Bannerimg"
      />
      <div className="container z-3 relative font-lato">
        <h2 className="text-2xl md:text-[48px] leading-[118%] font-bold leading-snug text-lightYellow font-bold mb-2 lg:mb-[28px]">
          Invest in Gold,
          <br />
          Invest in Your Future
        </h2>
        <p className="text-[0.875rem] leading-[118%] md:text-[28px] text-white font-medium mb-1 lg:mb-[23px]">
          AiionGold offers secure, gold-backed <br /> digital investments with
          high returns and real <br /> asset protection.
        </p>
        <p className="text-sm leading-[118%] md:text-[28px] text-white font-medium mb-1 lg:mb-[19px]">
          Start investing today with confidence.
        </p>
        <p className="text-[16px] leading-[118%] text-lightYellow md:text-[32px] font-medium mb-6 lg:mb-[60px]">
          Sign up now and get a $5 bonus
        </p>
        <CustomButton
          label="Start Investing"
          bgColor="bg-goldenOrange"
          textColor="text-white"
          borderColor="border-white"
        />
      </div>
      <div className="hidden md:block absolute z-2 bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
