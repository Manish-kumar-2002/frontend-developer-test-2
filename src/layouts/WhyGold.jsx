import React from "react";
import SectionHeading from "../components/SectionHeading";
import SectionDetails from "../components/SectionDetails";
import imageSrc from "../assets/images/gold.png";
import CustomButton from "../components/CustomButton";

const WhyGold = () => {
  return (
    <>
      <SectionHeading title="Why Gold? Why Now?" />
      <SectionDetails
        imageSrc={imageSrc}
        imageAlt="Gold Card"
        reverse={false}
        content={
          <div className="flex flex-col items-start gap-[200px] lg:gap-[272px] ">
            <p className="lg:text-[21px] lg:leading-[44px] lg:mt-[118px]">
              Gold is the safest and most stable investment. With rising
              inflation and market uncertainty, securing your wealth with gold
              is no longer an option -it's essential. AiionGold makes it easier,
              faster, and more
            </p>
            <CustomButton
              label="Read More"
              bgColor="bg-blue-900"
              textColor="text-white"
              borderColor="border-yellow-400"
            />
          </div>
        }
      />
    </>
  );
};

export default WhyGold;
