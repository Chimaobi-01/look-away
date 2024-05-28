import React from "react";

const TextCard = ({ smallTitle, title, content }) => {
  return (
    <div className="mb-8 text-left pl-2 md:pl-5 flex flex-col justify-center">
      <h3 className="xs:text-[14px] text-primary font-[500] md:text-[18px] sm:text-[0.875rem] font-hero_small_family">
        {smallTitle}
      </h3>
      <h2 className="text-[24px] md:text-[20px] lg:text-[25px] xlg:text-[35px] font-[700] text-black font-Montserrat sm:text-[24px]">
        {title}
      </h2>
      <p className="mt-5 text-[14px] md:text-[17px] md:text-[#505673] font-hero_small_family font-[400] leading-relaxed md:leading-normal lg:leading-normal xlg:leading-relaxed">
        {content}
      </p>
    </div>
  );
};

export default TextCard;
