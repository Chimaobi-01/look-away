import React from "react";
import FeatureHeader from "../../components/FeatureHeader";
import TextImageCard from "../../components/TextImageCard";
import Images from "../../utils/Images";

const TeleconsultationFeatures = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="w-[95%] lg:w-[85%] mx-auto">
        <div
          className="hidden md:block absolute lg:mt-[4%] inset-0 z-0 w-full h-full bg-contain bg-center bg-no-repeat rotate-2"
          style={{ backgroundImage: `url(${Images.OppSpiral})` }}
        ></div>
        <div
          className="md:hidden absolute inset-0 z-0 w-full h-full bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Images.MobileOppSpiral})` }}
        ></div>
        <div className="relative z-10">
          <FeatureHeader
            smallTitle="Our Features"
            title="How it Works"
            content="Getting started with Tele Consultation is easy. Follow these simple steps:"
          />
          <TextImageCard
            image={Images.Headache}
            stepNumber={1}
            title={
              <span>
                Schedule Your <br /> Appointment
              </span>
            }
            description="Easily Book Your Teleconsultation at Your Convenience"
            reverse={false}
          />
          <TextImageCard
            image={Images.Docsmile}
            stepNumber={2}
            title="Connect Seamlessly"
            description={
              <span>
                Effortless Setup for High-Quality Video <br /> Calls
              </span>
            }
            reverse={true}
          />
          <TextImageCard
            image={Images.Beautiful}
            stepNumber={3}
            title={
              <span>
                Receive Personalized
                <br />
                Care
              </span>
            }
            description="Tailored Healthcare Guidance from Expert Professionals"
            reverse={false}
          />
        </div>
      </div>
    </div>
  );
};

export default TeleconsultationFeatures;
