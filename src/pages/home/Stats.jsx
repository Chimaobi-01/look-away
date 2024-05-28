import React from "react";
import Images from "../../utils/Images";
import FeatureHeader from "../../components/FeatureHeader";

const Stats = () => {
  return (
    <>
      <FeatureHeader
        smallTitle="Our Presence"
        title="Our Global Impact"
        content="Explore our innovative Telehealth solutions, connecting patients and doctors across continents for seamless healthcare access anytime, anywhere. Join us in revolutionizing global healthcare delivery today"
      />
      <div className="w-[95%] md:w-[90%] lg:w-[60%] mx-auto grid grid-cols-2 md:grid-cols-3 gap-2 p-4">

        <div className="bg-[#F8DDDD] h-[182px] md:h-[280.5px] rounded-lg flex flex-col items-center md:p-custom-card justify-center text-center sm:col-span-1 md:col-span-1">
          <div>
            <img src={Images.Lives} alt="lives icon" />
          </div>
          <div className="text-[1.5rem] md:text-[3rem] font-[700] font-Montserrat  text-black">100k+</div>
          <div className="text-[10px] md:text-[16px] font-[600] font-Montserrat text-black">Impacted Lives</div>
        </div>


        <div className="bg-[#EFF5FF] h-[182px] md:h-[280.5px] rounded-lg flex flex-col items-center justify-center p-6  text-center sm:col-span-1 md:col-span-2">
          <div>
            <img src={Images.Plug} alt="ives icon" />
          </div>
          <div className="text-[1.5rem] md:text-[3rem] font-[700] font-Montserrat  text-black">20</div>
          <div className="text-[10px] md:text-[16px] font-[600] font-Montserrat text-black">Integrated Telehealth Clinics</div>
        </div>


        <div className="bg-[#E5FBF1] h-[182px] md:h-[280.5px] rounded-lg flex flex-col items-center justify-center p-custom-card  text-center sm:col-span-1 md:col-span-2">
          <div>
            <img src={Images.Hospital} alt="ives icon" />
          </div>
          <div className="text-[1.5rem] md:text-[3rem] font-[700] font-Montserrat  text-black">200</div>
          <div className="text-[10px] md:text-[16px] font-[600] font-Montserrat text-black">Hospitals, Lab and Pharmacies</div>
        </div>


        <div className="bg-[#FFE8D4] h-[182px] md:h-[280.5px]  rounded-lg flex flex-col items-center justify-center p-custom-card text-center sm:col-span-1 md:col-span-1">
          <div>
            <img src={Images.Stethoscope} alt="ives icon" />
          </div>
          <div className="text-[1.5rem] md:text-[3rem] font-[700] font-Montserrat  text-black">5000+</div>
          <div className="text-[10px] md:text-[16px] font-[600] font-Montserrat text-black">Doctors in Nigeria and Globally</div>
        </div>
      </div>
    </>
  );
};

export default Stats;
