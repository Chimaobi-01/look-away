import React from "react";
import FeatureCard from "../../components/FeatureCard";
import { pharmacyData as cardData } from "../../utils/Data";
import FeatureHeader from "../../components/FeatureHeader";

const PharmacyFeaturesSection = () => {
  return (
    <section className="relative py-9 bg-white">
      <div className="relative z-10">
        <FeatureHeader
          smallTitle="Prescriptions Made Convenient"
          title="Seamless Medication Access"
          content="Seamless prescription access. Your prescription connects to a nearby pharmacy partner for swift pickup, prioritizing your convenience."
        />
        <div className="mx-auto max-w-screen-lg">
          <div className="w-[85%] mx-auto flex flex-col md:flex md:flex-row md:justify-center md:items-center md:gap-10">
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

export default PharmacyFeaturesSection;
