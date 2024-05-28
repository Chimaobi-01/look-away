import React from "react";
import TextCard from "../../components/TextCard";
import Button from "../../components/Button";
import Images from "../../utils/Images";
import { Link } from "react-router-dom";

const TrustedPartners = () => {
  return (
    <div className="bg-custom-gradient">
      <div className="flex flex-col md:flex-row md:p-1 lg:p-5 mt-20 md:gap-2 lg:gap-5">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col justify-center lg:mt-20 p-3">
            <TextCard
              smallTitle="Collaborating for Better Healthcare"
              title="Our Trusted Partners"
              content="Our trusted partners are instrumental in shaping the future of accessible and efficient healthcare solutions. Together, we're making a positive impact on the lives of individuals and communities."
            />
            <div className="mb-5 ml-5">
              <Link to="/partners">
                <Button
                  textColor="white"
                  content="See all partners"
                  width="200px"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={Images.BrandGrid}
            alt="beneficiaries"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;
