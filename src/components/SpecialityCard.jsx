import React from "react";
import CircularProgress from "./CircularProgress";

const SpecialityCard = ({ progress, title, description }) => {
  return (
    <div className="flex flex-col items-center w-[170px] rounded-lg">
      <CircularProgress progress={progress} label={`${progress}%`} />
      <h3 className="mt-4 text-[16px] font-Montserrat text-center text-black font-[600]">{title}</h3>
      <p className="mt-2 text-[12px] text-center text-[#505673] font-hero_small_family">{description}</p>
    </div>
  );
};

export default SpecialityCard;
