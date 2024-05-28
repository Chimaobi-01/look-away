import React from "react";

const FooterHero = ({
  headerText,
  smallText,
  btnText,
  bgImage,
  bgImageSmall,
}) => {
  return (
    <section className="h-full w-full relative pb-[10%]">
      <div className="hidden md:block w-full h-full">
        <img
          src={bgImage}
          alt="Background"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black opacity-90"></div>
      </div>

      <div className="md:hidden w-full h-[462px] flex justify-center items-end">
        <img
          src={bgImageSmall}
          alt="Background"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black opacity-90"></div>
        <div className="relative z-10 flex flex-col items-center text-center w-[80%]">
          <h1 className="text-[18px] md:text-[34px] font-Montserrat text-white font-[800]">
            {headerText}
          </h1>
          <p className="text-[14px] md:text-[20px] text-[#FFFFFF] mt-4 mb-4 font-[500] font-Lato leading-normal">
            {smallText}
          </p>
          <button className="w-[250px] md:w-[300px] font-PublicSans text-[12px] md:text-[16px] rounded-lg bg-primary text-white p-3">
            {btnText}
          </button>
        </div>
      </div>

      <div className="hidden md:flex h-full w-[75%] items-center bg-transparent md:pb-16 relative z-10">
        <div className="flex flex-col md:items-start md:w-[65%] mt-10 px-5 lg:px-10 lg:text-left">
          <h1 className="text-[34px] md:text-[20px] lg:text-[24px] xlg:text-[34px] font-Montserrat text-white font-[800]">
            {headerText}
          </h1>
          <p className="text-[14px] md:text-[14px] lg:text-[18px] leading-loose text-[#FFFFFF] md:mt-5 md:mb-5 font-[500] font-Lato">
            {smallText}
          </p>
          <button className="w-[400px] md:w-[300px] lg:w-[400px] font-PublicSans text-[16px] md:text-[14px] lg:text-[16px] mb-10 rounded-lg bg-primary text-white p-5">
            {btnText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FooterHero;
