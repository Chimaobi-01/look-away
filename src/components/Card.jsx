import React from "react";

const Card = ({ icon, title, description }) => {
  return (
    <div className="bg-white border-[1px] border-[#E5EFFF] rounded-lg p-6 flex flex-col items-center text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
