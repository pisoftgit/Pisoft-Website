import React, { useState, useRef } from "react";

export default function Accordion({ title, children, initiallyOpen = false }) {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const contentRef = useRef(null);

  const toggleAccordion = () => setIsOpen((prev) => !prev);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <button
        onClick={toggleAccordion}
        className="w-fit cursor-pointer text-center text-white hover:text-blue-400 font-semibold text-xl md:text-4xl transition py-2 mx-auto"
      >
        {title}
      </button>

      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-2 text-md text-white text-center">
          {children}
        </div>
      </div>
    </div>
  );
}
