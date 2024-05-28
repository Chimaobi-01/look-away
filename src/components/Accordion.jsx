import React, { useState } from 'react';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-[#F7F8FA] mt-2 mb-1">
      <button
        className="flex justify-between items-center bg-[#F7F8FA] p-4 text-[#346ED6] w-full focus:outline-none text-left" 
        onClick={toggleAccordion}
      >
        <span className='font-Lato text-[12px] font-[600] md:text-[18px] text-left'>{question}</span>
        <div>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 ${!isOpen ? 'rotate-90' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-3 bg-gray-50">
          <div
            className="font-PublicSans text-[12px] md:text-[16px] font-[400] text-black pl-4 leading-normal text-left" // Ensure content is left-aligned
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
