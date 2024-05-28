import React from "react";
import TextCard from "../components/TextCard";

const CardText = ({ smallTitle, title, content, image, reverse }) => {
  return (
    <div
      className={`bg-white flex flex-col mt-5 md:flex-row lg:p-5 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div
        className={`px-2 mt-10 w-full md:w-[50%] lg:w-[45%] md:flex ${
          reverse ? "md:justify-end" : "md:justify-start"
        }`}
      >
        <TextCard smallTitle={smallTitle} title={title} content={content} />
      </div>
      <div className="w-full md:w-[50%] lg:w-[55%]">
        <img src={image} alt="Content Image" className="w-full h-full" />
      </div>
    </div>
  );
};

export default CardText;
