import Images from "./Images";

import leader1 from '../assets/about-us/leader1.png'
import leader2 from '../assets/about-us/leader2.png'
import leader3 from '../assets/about-us/leader3.png'
import leader4 from '../assets/about-us/leader4.png'
import leader5 from '../assets/about-us/leader5.png'
import leader6 from '../assets/about-us/leader6.png'
import leader7 from '../assets/about-us/leader7.png'



const {
  Time,
  Money,
  Congestion,
  Bus,
  Message,
  Clock,
  Heart,
  Tick,
  Stethoscope,
  CheckBox,
  Cycle,
  Key,
  Db,
  Bag,
  Case,
  Lives,
  Hospital,
  Plug,
} = Images;
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
  },
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
  },
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
  },
];

const teleconsultationData = [
  {
    icon: Time,
    title: "Faster Diagnosis ",
    description: "Get Immediate diagnosis and treatment for efficient care.",
  },
  {
    icon: Bag,
    title: "No Travel Time or Expenses",
    description: "Saving You Time and Money on Healthcare",
  },
  {
    icon: Case,
    title: "Flexible Scheduling for Your Lifestyle",
    description: "Healthcare on Your Terms, Wherever You Are",
  },
];

const impactData = [
  {
    icon: Lives,
    title: "100k+",
    description: "Impacted Lives",
  },
  {
    icon: Plug,
    title: "20",
    description: "Integrated telehealth clinics",
  },
  {
    icon: Hospital,
    title: "200",
    description: "Hospitals, Labs and Pahramacies",
  },
  {
    icon: Stethoscope,
    title: "5000+",
    description: "Doctors in Nigeria and Globally",
  },
];

const beneficaryData = [
  {
    who: "Patients",
    what: "At Mobihealth, we put you and your family first. Our goal is to make healthcare easy and accessible, so you can focus on living your best life.",
    linkText: "Sign up or log in now.",
    link: "/",
  },
  {
    who: "Doctors",
    what: "Joining Mobihealth means you can reach more patients and provide top-notch care, whether they're in Nigeria or anywhere else in the world. It's all about expanding your reach and making a difference.",
    linkText: "Join our healthcare professionals",
    link: "/",
  },
  {
    who: "Partners",
    what: "Partnering with Mobihealth opens up new opportunities for collaboration and growth. Together, we can create innovative solutions that benefit everyone involved, from patients to providers.",
    linkText: "Get in touch to become a partner",
    link: "/",
  },
  {
    who: "Coorporate Organizations",
    what: "By offering Mobihealth to your employees, you're investing in their health and well-being. Our platform makes it easy for them to access quality care, leading to happier, healthier, and more productive teams.",
    linkText: "Contact us to get started",
    link: "/",
  },
 
  {
    who: "Voluntary/Religious Organizations",
    what: "Joining Mobihealth enables you to extend vital healthcare services to your community members. By joining forces, you contribute to improving health outcomes and fostering a culture of wellness, making a positive impact on the lives of those you serve.",
    linkText: "Join us now!",
    link: "/",
  },
];

const progressData = [
  {
    id: 1,
    percentage: 60,
    title: "Dentistry",
    description: "Experience Comprehensive Dental Care at Our Clinic. Dedicated to Ensuring Your Smile Radiance."
  },
  {
    id: 2,
    percentage: 80,
    title: "Cardiology",
    description: "Elevate your heart health journey with personalized cardiac care, ensuring your heart beats at its very best."
  },
  {
    id: 3,
    percentage: 95,
    title: "Healthcare",
    description: "Embrace a more personalized path to wellness with comprehensive healthcare services tailored to meet your individual needs."
  },
  {
    id: 4,
    percentage: 75,
    title: "Dermatology",
    description: "Reveal your skin's inner beauty with our advanced dermatological treatments tailored to enhance and revitalize your glow."
  },
  {
    id: 5,
    percentage: 50,
    title: "Gynecological",
    description: "Empower your feminine health at every stage with expert gynecological care designed to provide comfort and wellness."
  },
  {
    id: 6,
    percentage: 70,
    title: "Oncology",
    description: "Navigate the path to healing with expert oncological support, ensuring strength and resilience in every step of your cancer journey."
  }
];

const homeFaqData = [
  {
    question: 'How do you access the platform?',
    answer: `
      <p class="leading-relaxed">Visit the web at <a class="text-blue-500 underline hover:text-blue-700 cursor-pointer" href="https://apps.mobihealthinternational.com" target="_blank" rel="noopener noreferrer">apps.mobihealthinternational.com</a> or download the mobile application from Play Store or App Store:</p>
      <p class="leading-relaxed">Android:</p>
      <a class="text-blue-500 underline hover:text-blue-700 cursor-pointer" href="https://play.google.com/store/apps/details?id=com.mobihealthinternational.app" target="_blank" rel="noopener noreferrer">https://play.google.com/store/apps/details?id=com.mobihealthinternational.app</a>
      <p class="leading-relaxed">iOS:</p>
      <a class="text-blue-500 underline hover:text-blue-700 cursor-pointer" href="https://itunes.apple.com/gb/app/mobihealth-consult/id1448483577?mt=8" target="_blank" rel="noopener noreferrer">https://itunes.apple.com/gb/app/mobihealth-consult/id1448483577?mt=8</a>
    `
  },
  {
    question: 'What Happens with Investigations and Medications?',
    answer: `
      <p>Your investigation and prescription will be sent to the diagnostic center and pharmacies. We also do home delivery of genuine medications, home doctor call out, and physiotherapy/nursing care.</p>
    `
  },
  {
    question: 'How do you register?',
    answer: `
      <ul class="list-disc list-inside leading-relaxed">
        <li>Click on register and select the Client option</li>
        <li>Fill the registration form (pay attention to mandatory fields)</li>
        <li>Enter the referral code (if any)</li>
        <li>Click submit</li>
      </ul>`
  },
  {
    question: 'How to Request Consultation?',
    answer: `
      <ul class="list-disc list-inside leading-relaxed">
        <li>From dashboard, click on Request Assessment</li>
        <li>Click Search Doctor</li>
        <li>Choose date and time and book appointment</li>
        <li>Once its consultation time, join room to consult the doctor</li>
      </ul>`
  },
  {
    question: 'What is provided for lab support, Xrays support, physiotherapy, etc?',
    answer: `
      <p>The physician will be able to order investigations from the platform. We have partnered with a 
      network of Labs, Radiology centers, Hospitals and other services.
      </p>
    `
  },
  {
    question: 'What happens after the investigation result is out?',
    answer: `
      <p>You will book a follow up consultation with the doctor to review the result
      </p>
    `
  },
  {
    question: 'Is MobiHealth a charity organization?',
    answer: `
      <p>We are not a charity organization. We are regsitered in UK and Nigeria
      </p>
    `
  },
  {
    question: 'Why is the contract agreement not stating that you wish to have your physicians volunteer in unpaid capacity to render service?',
    answer: `
      <p>The contract clearly states that the physician will be paid for the service. The agreement does not state anywhere that the 
      physicians will not be paid for thier services.
      </p>
    `
  },
  {
    question: 'Can I work from home?',
    answer: `
      <p>Yes, the physician can work from anywhere. The telemedicine platform provides the 
      flexibility to the physicians and the patients to use our platform and work form wherever
      they want.
      </p>
    `
  }
];
const reviews = [
  {
    stars: 5,
    review: "Great platform for quick access to a doctor. I didn't have to drive and wait long to see a doctor. It is very convenient and cheap. Excellent customer services too. I definitely recommend Mobihealth.",
    reviewer: "Damilola Godwin"
  },
  {
    stars: 5,
    review: "The app is easy to use, and it's easy to understand by anybody, be it a computer-literate person or not... Kudos to the tech team department.",
    reviewer: "Mayowa Shoyinka"
  },
  {
    stars: 5,
    review: "Excellent Patient/Doctor Consultation. I totally recommend Mobihealth👌🏽👌🏽👌🏽. My Covid19 test experience with Mobihealth was excellent. Excellent customer service. I rate them 10 stars✨",
    reviewer: "Aderinmola"
  }
];
const teleFaqData = [
  {
    question: 'How do I schedule teleconsultation?',
    answer: `
      <p class="leading-relaxed">Visit the web at <a class="text-blue-500 underline hover:text-blue-700 cursor-pointer" href="https://apps.mobihealthinternational.com" target="_blank" rel="noopener noreferrer">apps.mobihealthinternational.com</a> or download the mobile application from Play Store or App Store:</p>
      <p class="leading-relaxed">Android:</p>
      <a class="text-blue-500 underline hover:text-blue-700 cursor-pointer" href="https://play.google.com/store/apps/details?id=com.mobihealthinternational.app" target="_blank" rel="noopener noreferrer">https://play.google.com/store/apps/details?id=com.mobihealthinternational.app</a>
      <p class="leading-relaxed">iOS:</p>
      <a class="text-blue-500 underline hover:text-blue-700 cursor-pointer" href="https://itunes.apple.com/gb/app/mobihealth-consult/id1448483577?mt=8" target="_blank" rel="noopener noreferrer">https://itunes.apple.com/gb/app/mobihealth-consult/id1448483577?mt=8</a>
    `
  },
  {
    question: 'Is my information secure during the call?',
    answer: `
      <p>Your investigation and prescription will be sent to the diagnostic center and pharmacies. We also do home delivery of genuine medications, home doctor call out, and physiotherapy/nursing care.</p>
    `
  },
  {
    question: 'What kind of medical issues can be addressed during teleconsultation?',
    answer: `
      <ul class="list-disc list-inside leading-relaxed">
        <li>From dashboard, click on Request Assessment</li>
        <li>Click Search Doctor</li>
        <li>Choose date and time and book appointment</li>
        <li>Once its consultation time, join room to consult the doctor</li>
      </ul>`
  },
]
const leadersInHealthSector = [
  {
    name: "High Highness. Alhaji Nasir Ado Bayero, Emir of Bichi Emirate, Kano ",
    position: "Chairman",
    image: leader1,
    category: "directors",
    id: 1
  },
  {
    name: "Dr.  Funmi Adewara, M.D, MPhil (Cambridge)",
    position: "Founder, Executive Director",
    image: leader5,
    category: "directors",
    id: 2
  },
  {
    name: "Prof. Jay H. Sanders ",
    position: "M.D., F.A.C.P., F.A.C.A.A.I., FATA",
    image: leader4,
    category: "advisor",
    id: 3
  },
  {
    name: "Dr Jide Agunbiade",
    position: "Phd, MBA, FNSE",
    image: leader3,
    category: "advisor",
    id: 4
  },
  {
    name: "Dr. Charles Ononiwu, FWACS, FICS, MBA",
    position: "Medical Advisor-Director",
    image: leader2,
    category: "team",
    id: 5
  },
  {
    name: " Mr. Ade Adefeko ",
    position: "",
    image: leader7,
    category: "team",
    id: 6
  },
  {
    name: "Dr. Charles Ononiwu, FWACS, FICS, MBA",
    position: "",
    image: leader6,
    category: "team",
    id: 7
  },
]

export {
  homeCardData,
  pharmacyData,
  diagnosisData,
  emrData,
  teleconsultationData,
  impactData,
  beneficaryData,
  progressData,
  leadersInHealthSector,
  homeFaqData as faqData, reviews, teleFaqData
};
