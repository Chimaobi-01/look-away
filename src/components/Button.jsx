import React from "react";

const Button = ({ textColor, content, width }) => {
  const buttonStyle = {
    width: width ? `${width}` : '100%',
  };

  return (
    <button
      style={buttonStyle}
      className={`text-[16px] font-PublicSans sm:mx-0 md:text-[10px] md:py-5 md:px-5 lg:text-[14px] ${content === "Login" ? "bg-white" : "bg-btn_primary"} text-${textColor} 
      ${content === "Login" && "border-primary border-2"}
      px-4 py-4 rounded-md font-semibold md:text-center`}
    >
      {content}
    </button>
  );
};

export default Button;

