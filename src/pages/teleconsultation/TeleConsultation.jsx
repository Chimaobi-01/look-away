import React from "react";
import Hero from "../../components/Hero";
import Images from "../../utils/Images";
import TeleconsultationFeatures from "./TeleconsultationFeatures";
import TeleconsultationBenefits from "./TeleconsultationBenefits";
import ReviewSection from "../home/ReviewSection";
import Others from "./Others";
import FaqSection from "./FaqSection";
import FHero from "./Fhero";

const TeleConsultation = () => {
  return (
    <>
      <Hero
        headerText="Tele Consultation: Your Convenient Path to Healthcare"
        smallText="Revolutionize your healthcare with Tele Consultation. Connect instantly with medical professionals from home or office, skipping waiting rooms and travel hassles. Access General Practitioners and Specialists seamlessly when needed."
        btnText="Get Started"
        bgImage={Images.TeleBg}
        smallScreenHeaderText="Tele Consultation: Your Convenient Path to Healthcare"
        smallScreenSmallText="Experience healthcare like never before with Tele Consultation. Connect instantly with medical professionals from the comfort of your home or office. No more waiting rooms, no more travel hassles."
      />
      <TeleconsultationFeatures />
      <TeleconsultationBenefits />
      <Others />
      <ReviewSection />
      <FaqSection />
      <FHero />
    </>
  );
};

export default TeleConsultation;
