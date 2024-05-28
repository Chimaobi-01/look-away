import React from "react";
import OurRoutes from "./Routes";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <OurRoutes />
      <Footer />
    </>
  );
};

export default AppRoutes;
