import React from "react";
import ReviewCard from "../../components/ReviewCard";
import { reviews } from "../../utils/Data";
import FeatureHeader from "../../components/FeatureHeader";

const ReviewSection = () => {
  return (
    <div>
      <FeatureHeader smalltitle="" title="What our clients say!" content="" />
      <div className="flex flex-col justify-center items-center md:flex-row gap-4 lg:gap-10">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            stars={review.stars}
            review={review.review}
            reviewer={review.reviewer}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
