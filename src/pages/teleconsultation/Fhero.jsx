import React from "react";
import FooterHero from "../../components/FooterHero";
import Images from "../../utils/Images";

const Fhero = () => {
  return (
    <div className="w-[90%] mt-10 mb-10 mx-auto">
      <FooterHero
        headerText="Experience Consultation"
        smallText="Ready to experience the convenience of Tele Consultation? Schedule your teleconsultation now and get the care you need when you need it."
        btnText="Schedule Your Teleconsultation Now"
        bgImage={Images.TeleFooter}
        bgImageSmall={Images.FooterHeroMobile}
      />
    </div>
  );
};
export default Fhero;
