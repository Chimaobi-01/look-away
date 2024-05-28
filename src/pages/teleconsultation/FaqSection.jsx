import React from "react";
import FeatureHeader from "../../components/FeatureHeader"
import AccordionItem from "../../components/Accordion";
import { teleFaqData as faqData } from "../../utils/Data";

const FaqSection = () => {
  return (
    <div className="w-[85%] md:w-[95%] lg:w-[85%] mx-auto">
      <FeatureHeader title="FAQS" content="How can we help you?" />
      <div>
        {faqData.map((data, index) => (
          <AccordionItem key ={index} question={data.question} answer={data.answer}/>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
