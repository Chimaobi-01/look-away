export const serviceLinks = [
  {
    name: "Services",
    submenu: true,
    sublinks: [
      {
        sublink: [
          { name: "Teleconsultation", description: "Instantly connect with healthcare professionals online.",  link: "/teleconsultation" },
          { name: "EMR (Electronic Medical Records)",description: "Securely manage your medical records digitally and share with other medical practitioners at your request",  link: "/emr" },
          { name: "Diagnosis Test",description: "Virtual testing with real-time readings for informed healthcare decisions.",  link: "/diagnosis" },
          { name: "Pharmacy",description: "Convenient medication delivery to your doorstep or pick-up at nearby pharmacies at an affordable price and superb quality.",  link: "/pharmacy" },
        ],
      },
    ],
  },
];

export const logIn = [
  {
    name: "Login",
    submenu: true,
    sublinks: [
      {
        sublink: [
          { name: "As Doctor",  link: "/" },
          { name: "As Patient", link: "/"},
        ],
      },
    ],
  },
];
