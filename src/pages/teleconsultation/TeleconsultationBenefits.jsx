import React from "react";
import FeatureCard from "../../components/FeatureCard";
import { teleconsultationData as cardData } from "../../utils/Data";
import FeatureHeader from "../../components/FeatureHeader";

const TeleconsultationBenefits = () => {
  return (
    <section className="relative py-9 bg-white">
      <div className="relative z-10">
        <FeatureHeader
          smallTitle="Why Choose Tele Consultation?"
          title="Our Benefits"
          content="Discover the advantages of Tele Consultation"
        />
        <div className="w-[85%] mx-auto flex flex-col md:flex md:flex-row md:justify-center md:items-center md:gap-5">
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
    </section>
  );
};

export default TeleconsultationBenefits;
