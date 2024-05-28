import React from "react";

const FeatureHeader = ({ smallTitle, title, content }) => {
  return (
    <div className="text-center mb-8 px-3 py-5 w-[90%] mx-auto md:w-[62%]">
      <h3 className="xs:text-[14px] text-[#346ED6] font-[500] md:text-[18px] sm:text-[0.875rem] font-hero_small_family">
        {smallTitle}
      </h3>
      <h2 className="text-[24px] md:text-[40px] font-[700] mt-3 mb-3 text-black font-Montserrat sm:text-[24px]">
        {title}
      </h2>
      <p className="w-full text-center text-[14px] md:text-[#505673] font-hero_small_family font-[400]">
        {content}
      </p>
    </div>
  );
};

export default FeatureHeader;
