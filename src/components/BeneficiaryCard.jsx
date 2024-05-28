import React from "react";
import { Link } from "react-router-dom";
import Images from "../utils/Images";

const BeneficiaryCard = ({ who, what, linkText, linkTo }) => {
  return (
    <div className="bg-white border-[1px] border-[#E5EFFF] rounded-lg p-6 flex flex-col">
      <div className="mb-4 text-[#333333] font-Montserrat text-[18px] font-[600]">
        {who}
      </div>
      <h3 className="font-hero_small_family font-[400] font-mb-2 text-[#4C4C4C]">
        {what}
      </h3>
      <Link
        className="mt-3 text-primary flex items-center gap-2 text-[16px] font-PublicSans font-[400]"
        to={linkTo}
      >
        {linkText}
        <img src={Images.Arrow} alt="arrow-right" className="border-1 w-[12px] font-[400]" />
      </Link>
    </div>
  );
};

export default BeneficiaryCard;
