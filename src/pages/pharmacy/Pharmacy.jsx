import React from "react";
import Images from "../../utils/Images";
import Hero from "../../components/Hero";
import FeatureHeader from "../../components/FeatureHeader";
import PharmacyFeaturesSection from "./PharmacyFeaturesSection";
import PharmacyOthers from "./PharmacyOthers";
import ReviewSection from "../home/ReviewSection";
import PharmacyBottomHero from "./PharmacyBottomHero";

const Pharmacy = () => {
  return (
    <>
      <Hero
        headerText="Your Pharmacy, Your Prescription, Your Convenience"
        smallText="Experience the ease of obtaining your prescribed medications from a nearby pharmacy partner after your telehealth consultation."
        btnText="Get Started"
        bgImage={Images.Pharmacy}
        smallScreenHeaderText="Your Pharmacy, Your Prescription, Your Convenience"
        smallScreenSmallText="Experience the ease of obtaining your prescribed medications from a nearby pharmacy partner after your telehealth consultation."
      />
      <PharmacyFeaturesSection />
      <PharmacyOthers />
      <ReviewSection />
      <PharmacyBottomHero />
    </>
  );
};

export default Pharmacy;
