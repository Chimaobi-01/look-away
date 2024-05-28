import React from "react";
import FeatureHeader from "../../components/FeatureHeader";
import CircularProgress from "../../components/CircularProgress";
import { progressData } from "../../utils/Data";
import SpecialityCard from "../../components/SpecialityCard";

const Specialities = () => {
  return (
    <div className="bg-custom-gradient-two">
      <FeatureHeader
        smallTitle="Our Medical Specialties"
        title="Enhancing Health Excelling in Care."
        content="Delve into a World of Specialized Healthcare Services, Where Expertise Meets Compassion. We also support healthcare organizations of all sizes streamline their operations with our comprehensive, integrated, HIPAA compliant, industry standard EMR."
      />
      <div className="w-full mx-auto p-5 max-w-screen-lg">
        <div className="grid grid-cols-2 gap-4 justify-items-center md:grid-cols-3 lg:hidden">
          {progressData.map((data, index) => (
            <div key={index} className="mt-3">
              <SpecialityCard
                progress={data.percentage}
                title={data.title}
                description={data.description}
              />
            </div>
          ))}
        </div>

        <div className="hidden md:hidden lg:grid lg:grid-cols-4 gap-4">
          {progressData.slice(0, 4).map((data, index) => (
            <div key={index}>
              <SpecialityCard
                progress={data.percentage}
                title={data.title}
                description={data.description}
              />
            </div>
          ))}
        </div>
        <div className="hidden mt-5 md:hidden lg:grid lg:grid-cols-4">
            <div></div>
          {progressData.slice(4).map((data, index) => (
            <div key={index}>
              <SpecialityCard
                progress={data.percentage}
                title={data.title}
                description={data.description}
              />
            </div>
          ))}
            <div></div>
        </div>
      </div>
    </div>
  );
};

export default Specialities;
