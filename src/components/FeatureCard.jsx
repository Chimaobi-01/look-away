import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="px-2 py-5 lg:w-[17rem] bg-white border-[#E5EFFF] border-[1px] flex flex-col items-center text-center rounded-lg text-black mx-auto mb-6 sm:mb-0">
      <div className="w-2.5rem h-2.5rem mb-4 font-[600]">
        <img src={icon} alt="svg-icon" />
      </div>
      <h2 className="text-[16px] w-[210.38px] leading-snug font-bold mb-2 font-Montserrat sm:text-[14px]">
        {title}
      </h2>
      <p className="font-[400] px-7 text-[#505673] font-hero_small_family text-[12px] md:text-[]">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
