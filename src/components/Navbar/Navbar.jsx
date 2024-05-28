import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import images from "../../utils/Images";
import ServiceLinks from "./ServiceLinks";
import LoginLinks from "./LoginLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white px-3">
      <div className="flex items-center font-medium justify-around">
        <div className="px-5 md:w-auto w-full flex items-center justify-between">
          <Link to="/">
            <img
              src={images.Logo}
              alt="logo"
              className="md:cursor-pointer h-full w-full"
            />
          </Link>

          <div
            className="font-bold text-3xl md:hidden z-50 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <ion-icon name="close-outline"></ion-icon>
            ) : (
              <img src={images.Hamburger} alt="menu" className="w-10 h-10" />
            )}
          </div>
        </div>
        <div>
          <ul className="md:flex md:text-[12px] lg:text-[16px] hidden items-center md:g-6 lg:gap-8 text-[#505673] font-normal font-hero_small_family ">
            <li>
              <Link to="/" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <ServiceLinks />
            <li>
              <Link to="/partners" className="py-7 px-3 inline-block">
                Partners
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="py-7 px-3 inline-block">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="py-7 px-3 inline-block w-[100px]">
                About us
              </Link>
            </li>
          </ul>
        </div>
        <LoginLinks />
        <div className="flex-row md:block hidden"> 
          <Button color="primary" content="Get Started" textColor="white"/>
         </div>
        {/* Mobile nav */}
        <ul
          className={`z-40 md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
          duration-500 ${open ? "left-0" : "left-[-100%]"}`}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <ServiceLinks />
          <li>
            <Link to="/partners" className="py-7 px-3 inline-block">
              Partners
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="py-7 px-3 inline-block">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="py-7 px-3 inline-block">
              About us
            </Link>
          </li>

          <div className="p-4">
            <Button content="Login" textColor="[#346ED6]" />
          </div>
          <div className="p-4">
            <Button content="Get Started" textColor="white" />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
