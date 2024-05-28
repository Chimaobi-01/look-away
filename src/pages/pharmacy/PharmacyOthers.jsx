import React from "react";
import CardText from "../../components/CardText";
import Images from "../../utils/Images";
const PharmacyOthers = () => {
  return (
    <div className="w-[98%] mx-auto mb-10">
      <CardText
        smallTitle="Effortless Medication Access"
        title="Prescriptions Delivered with Precision"
        content="After your consultation, your prescription is instantly routed to a nearby pharmacy partner for rapid pickup. Say goodbye to ordering delays or waiting for shipments – we've got your health and convenience covered."
        reverse={true}
        image={Images.Store}
      />
      <CardText
        smallTitle="Your Health Information, Our Priority"
        title="Ensuring Confidentiality and Data Protection"
        content="At Mobihealth, we understand the importance of safeguarding your health information. We take your security and privacy seriously, ensuring your peace of mind throughout your healthcare journey."
        reverse={false}
        image={Images.Plus}
      />
    </div>
  );
};

export default PharmacyOthers;
