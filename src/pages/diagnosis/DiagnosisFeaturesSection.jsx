import React from "react";
import FeatureCard from "../../components/FeatureCard";
import { diagnosisData as cardData } from "../../utils/Data";
import FeatureHeader from "../../components/FeatureHeader";

const DiagnosisFeaturesSection = () => {
  return (
    <section className="relative py-9 bg-white">
      <div className="relative z-10">
        <FeatureHeader
          smallTitle="Key Features"
          title="Benefits of Accurate Diagnosis"
          content="Discover how our Diagnosis Test services can empower your health journey with a range of valuable benefits."
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

export default DiagnosisFeaturesSection;
