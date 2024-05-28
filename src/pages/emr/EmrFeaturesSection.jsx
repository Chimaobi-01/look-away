import React from "react";
import FeatureCard from "../../components/FeatureCard";
import { emrData as cardData } from "../../utils/Data";
import FeatureHeader from "../../components/FeatureHeader";

const EmrFeaturesSection = () => {
  return (
    <section className="relative py-9 bg-white">
      <div className="relative z-10">
        <FeatureHeader
          smallTitle="Our Features"
          title="Our Benefits"
          content="Explore the Benefits of our EMR service"
        />
        <div className="mx-auto p-12 max-w-screen-lg">
          <div className="w-full mx-auto flex flex-col md:flex md:flex-row md:justify-center md:items-center md:gap-10">
            {cardData.slice(0, 3).map((card, index) => (
              <div key={index}>
                <FeatureCard
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

export default EmrFeaturesSection;
