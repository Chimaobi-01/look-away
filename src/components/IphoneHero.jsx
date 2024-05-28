import React from 'react';
import Images from '../utils/Images';
import Button from './Button';

const IphoneHero = () => {
  return (
    <div className="flex flex-col w-[95%] mx-auto pt-10 pr-3 pl-3 lg:px-10 bg-[#DDE4FF] rounded-3xl md:flex-row">
      <div className="w-full text-center md:w-[60%] md:text-left md:pr-8">
        <h1 className="text-[18px] font-Lato font-[700] text-[#000000] md:text-[30px] md:mt-10 xlg:text-[40px]">Join the Future of Healthcare</h1>
        <p className="font-PublicSans text-[14px] md:text-[14px] lg:text-[18px] font-[400] text-[#505673] leading-normal mb-3 mt-3">Experience the Power of Telehealth at Your Fingertips. Sign Up Today to Access Quality Healthcare from Anywhere.</p>
        <Button textColor="white" content="Get started now!" width="166px" />
      </div>
      <div className="w-[80%] mx-auto md:w-[40%] mt-8 md:mt-0 md:pl-8 flex justify-center">
        <img src={Images.Iphone} alt="Telehealth App" className="h-auto"/>
      </div>
    </div>
  );
};

export default IphoneHero;
