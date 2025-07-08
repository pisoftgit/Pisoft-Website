import React from "react";
import Buttontwo from "./Button2";

const BloomrStyleCard = ({ subtitle, title, description, videoSrc, bgClass }) => {
  const isLight = bgClass.includes("white");

  return (
    <div
      className={`
        ${bgClass} 
        rounded-3xl sm:rounded-[40px]
        p-4 sm:p-6 md:p-8
        shadow-xl
        flex flex-col items-center
        w-full h-full
        transition-all duration-300
        border border-gray-200
        overflow-clip
      `}
    >
      {/* VIDEO */}
      <div className="w-full flex justify-center mt-4 sm:mt-6 md:mt-8">
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[160px] sm:h-[200px] md:h-[220px] lg:h-[240px] xl:h-[260px] rounded-2xl object-cover shadow-2xl"
          style={{ transform: "scale(1.03)" }}
        />
      </div>

      {/* CONTENT */}
      <div
        className={`
          w-full text-center mt-4 sm:mt-6 md:mt-8 px-2 sm:px-4 text-white
        `}
      >
        {/* SUBTITLE */}
        <h4 className="text-sm sm:text-base md:text-lg lg:text-3xl font-jsB uppercase mb-2">
          {subtitle}
        </h4>

        {/* TITLE */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-js mb-3">
          {title}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-xs sm:text-sm md:text-base lg:text-md xl:text-xl ">
          {description}
        </p>

        {/* BUTTON */}
        <div className="mt-4 sm:mt-6">
          <Buttontwo />
        </div>
      </div>
    </div>
  );
};

export default BloomrStyleCard;
