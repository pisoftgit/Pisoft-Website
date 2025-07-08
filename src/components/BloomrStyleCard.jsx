import React from "react";
import Buttontwo from "./Button2";

const BloomrStyleCard = ({ subtitle, title, description, videoSrc, bgClass }) => {
  return (
    <div
      className={`bg-gradient-to-br ${bgClass} rounded-3xl sm:rounded-[40px] p-4 sm:p-6 md:p-4 flex flex-col items-center w-full h-full shadow-lg m-5`}
    >
      {/* Video on top */}
      <div className="w-full mt-6 sm:mt-8 md:mt-12 text-center flex justify-center items-center">
        <video
          style={{ transform: "scale(1.03)" }}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="rounded-2xl sm:rounded-[32px] w-[90%] h-[150px] sm:h-[200px] md:h-[280px] object-cover shadow-2xl transition-all duration-500"
        />
      </div>

      {/* Text below */}
      <div className="w-full mt-4 sm:mt-6 md:mt-8 text-white text-center">
        <span className="font-jB tracking-widest text-xl sm:text-2xl md:text-3xl lg:text-4xl py-1 rounded-full uppercase inline-block mb-2 sm:mb-3 md:mb-4">
          {subtitle}
        </span>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-jr font-semibold mb-2 sm:mb-3 md:mb-4 leading-snug">
          {title}
        </h2>
        <div className="font-jr text-sm sm:text-base md:text-md lg:text-lg leading-relaxed">
          {description}
        </div>
        <div className="mt-4 sm:mt-6">
          <Buttontwo />
        </div>
      </div>
    </div>
  );
};

export default BloomrStyleCard;
