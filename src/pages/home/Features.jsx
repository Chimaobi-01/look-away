import React from "react";
import Card from "../../components/Card";
import { homeCardData as cardData } from "../../utils/FeaturesData";
import FeatureHeader from "../../components/FeatureHeader";
import Images from "../../utils/Images";

const FeaturesSection = () => {
  return (
    <section className="relative py-9">
      <div className="absolute inset-0 z-0 w-full h-full bg-contain bg-center bg-no-repeat" 
      style={{ backgroundImage: `url(${Images.Spiral})`}}></div>
      <div className="relative z-10">
        <FeatureHeader
          smallTitle="Our Features"
          title="What We Offer"
          content='"Discover the Range of Features We Offer for Your Well-Being"'
        />
        <div className="mx-auto max-w-screen-lg">
          <div className="mx-auto flex flex-col md:flex md:flex-row md:justify-center md:items-center md:gap-10">
            {cardData.slice(0, 3).map((card, index) => (
              <div key={index}>
                <Card
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col md:flex md:flex-row md:justify-center md:items-center sm:gap-4 md:gap-10 md:mt-10">
            {cardData.slice(3).map((card, index) => (
              <div key={index}>
                <Card
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
