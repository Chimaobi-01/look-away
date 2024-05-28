import React from "react";
import TextCard from "../../components/TextCard";
import Images from "../../utils/Images";
import BeneficiaryCard from "../../components/BeneficiaryCard";
import { beneficaryData } from "../../utils/Data";

const Beneficiaries = () => {
  return (
    <div className="flex flex-col md:flex-row md:p-1 lg:p-5 mt-20 md:gap-2 lg:gap-5">
      <div className="w-[95%] mx-auto md:w-[60%] lg:w-[45%]">
        <TextCard
          smallTitle="Who We Serve"
          title="Who Benefits from Mobihealth?"
          content="At Mobihealth, we cater to a diverse range of stakeholders, 
          each playing a vital role in our mission to revolutionize healthcare accessibility. 
          From individuals seeking quality care to corporate partners prioritizing employee well-being, 
          discover how Mobihealth serves your needs."
        />
        <div className="hidden md:block px-5">
          <img src={Images.ImageGrid} alt="beneficiaries" />
        </div>
      </div>
      <div className="flex flex-col w-[95%] mx-auto md:w-[40%] lg:w-[55%]">
        {beneficaryData.map((data, index) => (
          <div key={index} className="mb-5">
            <BeneficiaryCard
              who={data.who}
              what={data.what}
              linkText={data.linkText}
              linkTo={data.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beneficiaries;
