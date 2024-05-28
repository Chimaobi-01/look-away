import React from "react";
import Images from "../utils/Images";

const ReviewCard = ({ stars, review, reviewer }) => {
  return (
    <div className="flex flex-col justify-center h-[320px] bg-[#F7FAFF] rounded-lg border-[1px] border-[#E5EFFF] p-1 md:p-2 lg:p-1 font-PublicSans mb-10">
      <div className="flex justify-center mb-4">
        {Array(stars)
          .fill()
          .map((_, i) => (
            <img
              key={i}
              src={Images.Star}
              alt="star"
              className="w-6 h-6 m-1 text-primary"
            />
          ))}
      </div>
      <p className="text-[#505673] w-[16.438rem] md:w-[14rem] lg:w-[16.438rem] leading-6 mb-5 text-center font-[400] text-[14px]">
        {review}
      </p>
      <p className="text-[#000000] text-center font-[600] text-[18px]">
        {reviewer}
      </p>
    </div>
  );
};

export default ReviewCard;
