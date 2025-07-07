
import React from "react";
import Buttontwo from "./Button2";

const BloomrStyleCard = ({ subtitle, title, description, videoSrc, bgClass }) => {
  return (
    <div
  className={`bg-gradient-to-br ${bgClass} rounded-3xl sm:rounded-[40px] p-4 sm:p-6 md:p-4 flex flex-col md:flex-row items-center md:items-start w-full h-full shadow-lg m-5`}
>
      {/* Left: Video */}
      <div className="w-full md:w-1/3 mt-6 sm:mt-8 md:mt-12 mr-4  sm:ml-8 ml-0 sm:mr-15">
        <video
          style={{ transform: "rotateY(-10deg) rotateX(5deg) scale(1.05)" }}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="rounded-2xl sm:rounded-[32px] w-full h-[150px] sm:h-[200px] md:h-[300px] object-cover shadow-2xl transition-all duration-500"
        />
      </div>

      {/* Right: Text content */}
      <div className="w-full md:w-1/2 mt-4 sm:mt-6 md:mt-8 text-white">
        <span
          className="text-white font-jB tracking-widest text-xl sm:text-2xl md:text-3xl lg:text-4xl py-1 rounded-full uppercase inline-block mb-2 sm:mb-3 md:mb-4"
        >
          {subtitle}
        </span>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-jr font-semibold mb-2 sm:mb-3 md:mb-4 leading-snug">
          {title}
        </h2>
        <div className="text-white font-jr text-sm sm:text-base md:text-lg leading-relaxed">
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
