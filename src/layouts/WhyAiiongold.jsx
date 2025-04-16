import React from "react";
import SectionHeading from "../components/SectionHeading";
import SectionDetails from "../components/SectionDetails";
import imageSrc from "../assets/images/aiiongold.png";

const WhyAiiongold = () => {
  return (
    <>
      <SectionHeading title="Why Choose Aiiongold" />
      {/*<SectionHeading title="Investment Return Calculator" /> */}
      <SectionDetails
        imageSrc={imageSrc}
        imageAlt="Gold Card"
        reverse={true}
        content={
          <p className="lg:text-[21px] lg:leading-[44px] lg:mt-[42px] lg:ml-[75px]">
            Our platform has been designed to cater to the requirements of those
            looking to invest in digital gold and diversify their portfolio in
            the long and short term. It is easy to use and provides a seamless
            investing experience for all users. We have experts looking into the
            specifications of it all, and ensuring that the users are in no way
            facing troubles related to the investment procedure.
          </p>
        }
      />
    </>
  );
};

export default WhyAiiongold;
