import React from "react";
import Hero from "../../components/Hero";
import Images from "../../utils/Images";
import FeatureOne from "./FeatureOne";
import Stats from "./Stats";
import Beneficiaries from "./Beneficiaries";
import TrustedPartners from "./TrustedPartners";
import Specialities from "./Specialities";
import AccordionItem from "../../components/Accordion";
import Faq from "./Faq";
import AppSection from "./AppSection";
import EmrSolution from "./EmrSolution";
import ReviewSection from "./ReviewSection";
const Home = () => {
  return (
    <>
      <Hero
        headerText="Access Quality Healthcare at your Convenience 24/7!"
        smallText="Instantly connect with top-tier medical professionals, locally and globally at your fingertips."
        btnText="Book an Appointment Now!"
        smallScreenHeaderText="Quality Affordable Healthcare at Your Finger Tip!"
        smallScreenSmallText="Instantly connect with top-tier medical professionals, locally and globally. Quality healthcare at your convenience, 24/7."
        bgImage={Images.HomeBg}
      />
      <FeatureOne />
      <Stats />
      <Beneficiaries />
      <TrustedPartners />
      <Specialities />
      <EmrSolution />
      <ReviewSection />
      <Faq />
      <AppSection />
    </>
  );
};

export default Home;
