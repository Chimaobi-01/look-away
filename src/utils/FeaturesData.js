import Images from "./Images";
const { Time, Money, Congestion, Bus, Message, Clock, Heart, Tick, 
  Stethoscope, CheckBox, Cycle, Key, Db, Bag, Case} = Images;
const homeCardData = [
  {
    icon: Time,
    title: "Instant Access to Doctors",
    description:
      "Instantly access General Practitioners and specialists and skip waiting rooms for on-the-spot healthcare.",
  },
  {
    icon: Money,
    title: "75% Cost Savings",
    description:
      "Significantly reduce your healthcare expenses while enjoying top-tier medical services with year-round coverage.",
  },
  {
    icon: Congestion,
    title: "Hospital Congestion Reduction",
    description:
      "By choosing Mobihealth, you play a part in reducing hospital congestion by over 60%.",
  },
  {
    icon: Bus,
    title: "Quick Delivery on Medications",
    description:
      "Experience prompt medication delivery to your nearest pharmacy at the right price and superb quality.",
  },
  {
    icon: Message,
    title: "Telemedicine Consultation",
    description:
      "Connect with 100,000+ global medical experts for video consultations, prescriptions, and more, anytime from home.",
  },
];

const pharmacyData = [
  {
    icon: Tick,
    title: "Local Convenience",
    description:
      "No need to wait for shipping. Pick up your medications from a nearby pharmacy partner.",
  },
  {
    icon: Clock,
    title: "Swift Medication Access",
    description:
      "Access your prescribed medications quickly and conveniently through our seamless pharmacy partnerships.",
  },
  {
    icon: Heart,
    title: "Comprehensive Care",
    description:
      "Ensure you have all the necessary follow-up medications as prescribed during your telehealth consultation",
  }
];

const diagnosisData = [
  {
    icon: Stethoscope,
    title: "Informed Treatment Decisions",
    description:
      "We ensure that you receive the most appropriate care for your health condition.",
  },
  {
    icon: Clock,
    title: "Timely Intervention",
    description:
      "Swift diagnosis enables timely action, increasing the likelihood of successful treatment and better health results.",
  },
  {
    icon: CheckBox,
    title: "Reduced Healthcare Costs",
    description:
      "Early and accurate intervention helps cut medical costs and eases the financial burden of healthcare.",
  }
];

const emrData = [
  {
    icon: Db,
    title: "Centralized Digital Health Records",
    description:
      "Effortlessly access all your medical records in one secure digital repository.",
  },
  {
    icon: Key,
    title: "Secure Access from Anywhere",
    description:
      "Access your health information securely, anytime, and from any device.",
  },
  {
    icon: Cycle,
    title: "Streamlined Data Sharing with Healthcare Providers",
    description:
      "Seamlessly share critical health data with other medical practitioners  for more effective care coordination.",
  }
];


const teleconsultationData = [
  {
    icon: Time,
    title: "Faster Diagnosis ",
    description:
      "Get Immediate diagnosis and treatment for efficient care.",
  },
  {
    icon: Bag,
    title: "No Travel Time or Expenses",
    description:
      "Saving You Time and Money on Healthcare",
  },
  {
    icon: Case,
    title: "Flexible Scheduling for Your Lifestyle",
    description:
      "Healthcare on Your Terms, Wherever You Are",
  }
];

export { homeCardData, pharmacyData, diagnosisData, emrData, teleconsultationData };
