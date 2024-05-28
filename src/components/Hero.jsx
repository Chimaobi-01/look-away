import React from "react";
import Button from "./Button";

const Hero = ({
  headerText,
  smallText,
  btnText,
  bgImage,
  smallScreenHeaderText,
  smallScreenSmallText,
}) => {
  return (
    <div>
      <section className="w-full relative overflow-hidden">
        <div className="w-full h-full">
          <img
            src={bgImage}
            alt="Background"
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black opacity-90"></div>
        </div>
        <div className="h-full w-full flex items-center justify-center sm:items-start lg:justify-start bg-transparent pb-12 md:pb-16 lg:pb-24 overflow-hidden relative z-10">
          <div className="flex flex-col items-center justify-center lg:items-start pt-32 px-5 sm:px-8 lg:px-10 text-center lg:text-left">
            <h1 className="hidden sm:block text-[30px] md:text-hero_header font-header_font text-header_color font-header_weight z-10 w-[95%] sm:w-[361px] md:w-header_width">
              {headerText}
            </h1>
            <h1 className="block sm:hidden text-[25px] font-header_font text-header_color font-semibold z-10 w-[95%]">
              {smallScreenHeaderText}
            </h1>
            <p className="hidden sm:block text-[16px] md:text-hero_small w-[95%] sm:w-[361px] md:w-header_small_width lg:w-header_small_width text-hero_small_text_color font-hero_small_weight font-hero_small_family mb-7">
              {smallText}
            </p>
            <p className="block sm:hidden text-[14px] w-[95%] text-hero_small_text_color font-hero_small_weight font-hero_small_family mb-7">
              {smallScreenSmallText}
            </p>
            <Button textColor="white" content={btnText} width="246px" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
