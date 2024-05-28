import React from "react";

const TextImageCard = ({ image, stepNumber, title, description, reverse }) => {
  return (
    <div
      className={`flex flex-col-reverse ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center p-4 mt-5 mb-[4%]`}
    >
      <div className="md:w-1/2">
        <img src={image} alt={title} className="md:w-[80%] lg:w-2/4 lg:mx-auto" />
      </div>
      <div className="w-full md:w-1/2 mt-4 mb-5 md:mt-0 md:pl-8">
        <div className="flex md:justify-start mb-2">
          <div className="flex items-center justify-center bg-[#E8F0FE] mr-5 p-number_padding font-Poppins text-[24px] font-[800] text-primary rounded-full h-8 w-8">
            {stepNumber}
          </div>
          <div className="w-full md:w-[80%]">
            <h2 className="text-[20px] mb-4 md:text-[24px] font-Montserrat font-[700] text-[#000000] text-left leading-tight">
            {title}
            </h2>
            <p className="text-[14px] md:text-[18px] font-PublicSans text-[#505673] text-left">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextImageCard;
