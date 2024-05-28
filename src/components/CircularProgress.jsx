import React from "react";

const CircularProgress = ({ progress, label }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-24 h-24">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
        <circle
          className="text-gray-200"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r="50"
          cx="60"
          cy="60"
        />
        <circle
          className="text-[#346ED6]"
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="50"
          cx="60"
          cy="60"
        />
      </svg>
      <span className="absolute text-xl text-black font-bold">
        {label}
      </span>
    </div>
  );
};

export default CircularProgress;
