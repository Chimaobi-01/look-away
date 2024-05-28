import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logIn } from "./Mylinks";

const LoginLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  
  return (
    <div className="hidden md:block">
      {logIn.map((link, index) => (
        <div key={index} className="relative z-50">
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="md:text-[12px] lg:text-[16px] py-7 flex justify-between items-center md:pr-0 pr-5 group font-bold"
              onClick={() => {
                setHeading((prev) => (prev === link.name ? "" : link.name));
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {heading === link.name && link.submenu && (
              <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                <div className="py-3">
                  <div className="w-4 h-4 left-3 absolute mt-1 bg-[#F2F6FA] rotate-45"></div>
                </div>
                <div className="bg-[#F2F6FA] p-5 grid grid-cols-3 gap-10 w-[200px] rounded-xl">
                  {link.sublinks.map((mysublinks, subIndex) => (
                    <div key={subIndex} className="w-[150px] p-2">
                      {mysublinks.sublink.map((slink, slinkIndex) => (
                        <Link key={slinkIndex} to={slink.link} className="block text-sm mb-2">
                          <div className="p-2 rounded-lg hover:bg-[#dde4fa]  font-Lato text-[#000000]">
                            <p className="text-[18px] mb-2 font-semibold">{slink.name}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {/* sublinks */}
            {link.sublinks.map((slinks, subIndex) => (
              <div key={subIndex}>
                <div>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "hidden" : "md:hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink, slinkIndex) => (
                      <Link key={slinkIndex} to={slink.link} className="block py-3 pl-10">
                        {slink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoginLinks;
