import React from "react";
import TextCard from "../../components/TextCard";
import Images from "../../utils/Images";

const EmrSolution = () => {
  return (
    <div className="bg-white flex flex-col mt-5 md:flex-row lg:p-5">
      <div className="px-2 md:w-[60%] lg:w-[45%]">
        <TextCard
          smallTitle="Customized Healthcare Solutions"
          title="Tailored Telehealth and EMR Solutions"
          content="We have bespoke affordable solutions tailored to each customer segment. We offer B2B, B2C, B2G, SaaS and Whitelabel solutions at affordable and flexible pricing.
        Who are Our Telehealth and EMR Solutions Suitable for;"
        />
        <div className="ml-5 md:ml-10">
            <ul className="list-disc list-inside leading-relaxed font-PublicSans text-[#505673] text-[14px] md:text-[18px] font-[400]">
                <li>Patients <span className="md:hidden">&#x2713;</span></li>
                <li>Doctors <span className="md:hidden">&#x2713;</span></li>
                <li>Hospitals and Clinics <span className="md:hidden">&#x2713;</span></li>
                <li>Other Healthcare Providers<span className="md:hidden">&#x2713;</span></li>
                <li>HMOs <span className="md:hidden">&#x2713;</span></li>
                <li>NGos <span className="md:hidden">&#x2713;</span></li>
                <li>Corporate <span className="md:hidden">&#x2713;</span></li>
            </ul>
        </div>
      </div>
      <div className="flex flex-col md:w-[40%] lg:w-[55%]">
        <img src={Images.FoldedArms} alt="Folded arms" className="md:hidden"/>
        <img src={Images.FemaleDoctor} alt="Female doctor" className="hidden md:block w-full h-full"/>
      </div>
    </div>
  );
};

export default EmrSolution;
