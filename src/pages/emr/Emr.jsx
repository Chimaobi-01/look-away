import React from "react";
import Hero from "../../components/Hero";
import Images from "../../utils/Images";
import EmrFeaturesSection from "./EmrFeaturesSection";

const Emr = () => {
  return (
    <>
      <Hero
        headerText="EMR Service: Streamline Your Health Records"
        smallText="Experience the future of healthcare with our Electronic Medical Record (EMR) service. Discover how EMR can simplify and enhance your healthcare journey."
        bgImage={Images.Emr}
        btnText="Get Started"
        smallScreenHeaderText="EMR Service: Streamline Your Health Records"
        smallScreenSmallText="Experience the future of healthcare with our Electronic Medical Record (EMR) service. Discover how EMR can simplify and enhance your healthcare journey."
      />
     <EmrFeaturesSection />
    </>
  );
};

export default Emr;
