import React from "react";
import images from "../utils/Images";
import { Link } from "react-router-dom";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="bg-[#dde4ff]">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="sm:text-center md:text-left">
              <div className="mx-auto max-w-xs">
                <img src={images.Logo} className="mx-auto" />
                <p className="text-center md:text-left font-400 mt-4 text-[#505673] font-Public Sans">
                  Mobihealth International revolutionizes patient care through
                  telemedicine and digital health.
                </p>
              </div>
            </div>

            <div className="p-5 flex flex-row lg:flex-row">
              <div className="w-full">
                <p className="font-bold text-[#000000] font-Public Sans">
                  Company
                </p>
                <ul className="font-semibold mt-6 space-y-4 text-md text-[#505673] font-Montserrat ">
                  <li>
                    <Link
                      to="/about-us"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faqs"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/security"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Security
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full">
                <p className="font-bold text-[#000000] font-Public Sans">
                  Services
                </p>
                <ul className="font-semibold mt-6 space-y-4 text-md text-[#505673] font-Montserrat">
                  <li>
                    <Link
                      to="/teleconsultation"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Tele consultation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/emr"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      EMR
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/diagnosis"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Diagnosis Test
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pharmacy"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Pharmacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/access-to-doctors"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Access to world class doctors
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center lg:text-left p-5">
              <p className="font-bold text-[#000000] font-Public Sans">
                Our Socials
              </p>
              <ul className="mt-8 flex justify-center lg:justify-start gap-4">
                <li className="w-12 h-12">
                  <a href="" target="_blank">
                    <SocialIcon source={images.LinkedIn} alt="linkedin" />
                  </a>
                </li>
                <li className="w-12 h-12">
                  <a href="" target="_blank">
                    <SocialIcon source={images.Twitter} alt="twitter" />
                  </a>
                </li>
                <li className="w-12 h-12">
                  <a href="" target="_blank">
                    <SocialIcon source={images.Facebook} alt="facebook" />
                  </a>
                </li>
                <li className="w-12 h-12">
                  <a href="" target="_blank">
                    <SocialIcon source={images.YouTube} alt="youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:hidden font-Lato text-[#2E2E2E] p-5">
          <div className="flex flex-col justify-center items-center mb-3 font-[700] text-[13px]">
            <img
              src={images.MobileLocation}
              alt="location-icon"
              className="mb-3"
            />
            <p>71-75 Shelton Street, London, WC2H 9JQ, U.K.</p>
            <p>3 Adeboye Solanke Avenue, Allen, Ikeja Lagos.</p>
          </div>
          <div className="flex flex-col justify-center items-center mb-5">
            <img
              src={images.MobileHeadset}
              alt="mobile-headset"
              className="mb-3"
            />
            <p className="font-[700]">Call Us : +2347065718171</p>
            <p>E: info@mobihealthinternational.com</p>
          </div>
        </div>

        <div className="hidden xs:hidden sm:flex justify-center align-center sm:flex-row py-4 px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-0 space-x-5">
          <div className="flex items-center justify-center">
            <div className="w-[20px] h-[20px]">
              <SocialIcon source={images.Call} alt="phone-icon" />
            </div>
            <p className="text-center sm:text-left sm:text-[14px]">+2347065718171</p>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-[20px] h-[20px]">
              <SocialIcon source={images.Sms} alt="mail icon" />
            </div>
            <p className="text-center sm:text-left sm:text-[14px]">
              E: info@mobihealthinternational.com
            </p>
          </div>
          <div className="flex flex-col justify-center items-center sm:flex-row sm:items-start">
            <div className="w-[20px] h-[20px] mt-3 mr-1">
              <SocialIcon source={images.Location} alt="location icon" />
            </div>
            <div className="text-center sm:text-left sm:text-[13px]">
              <p>3 Adeboye Solanke Avenue, Allen, Ikeja Lagos.</p>
              <p>71-75 Shelton Street, London, WC2H 9JQ, U.K.</p>
            </div>
          </div>
        </div>
        <div className="bg-[#2E2E2E] p-5 text-center font-Lato font-[400] text-white">
        <p>
          © {currentYear}{" "}
          <span className="text-primary">Mobi Health International</span>{" "}
          Developed By Mobi Health IT
        </p>
      </div>
      </footer>
     
    </div>
  );
};

export default Footer;
