import React from "react";
import Hero from "../../components/Hero";
import Images from "../../utils/Images";
import FeatureHeader from "../../components/FeatureHeader";
import DiagnosisFeaturesSection from "./DiagnosisFeaturesSection";

const Diagnosis = () => {
  return (
    <>
      <Hero
        headerText="Diagnosis Tests: Accurate Health Insights"
        smallText="Explore our comprehensive Diagnosis Test services, offering accurate health insights and informed medical decisions."
        bgImage={Images.Diagnosis}
        btnText="Get Started"
        smallScreenHeaderText="Diagnosis Tests: Accurate Health Insights"
        smallScreenSmallText="Explore our comprehensive Diagnosis Test services, offering accurate health insights and informed medical decisions."
      />
      <DiagnosisFeaturesSection />
    </>
  );
};

export default Diagnosis;
