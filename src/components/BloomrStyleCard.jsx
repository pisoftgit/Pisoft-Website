import React from "react";
import Buttontwo from "./Button2";

const BloomrStyleCard = ({ subtitle, title, description, videoSrc, bgClass }) => {
  return (
    <div
      className={`bg-gradient-to-br ${bgClass} rounded-3xl sm:rounded-[40px] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col items-center w-full h-full shadow-lg m-5`}
    >
      <div className="w-full max-w-screen-lg mx-auto">
        {/* Top: Video */}
        <div className="w-full mb-6 sm:mb-8">
          <video
            style={{ transform: "rotateY(-10deg) rotateX(5deg) scale(1.05)" }}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="aspect-video w-full rounded-2xl sm:rounded-[32px] object-cover shadow-2xl transition-all duration-500"
          />
        </div>

        {/* Bottom: Text content */}
        <div className="w-full text-white text-center px-4 sm:px-6 md:px-10 mt-5">
          <span className="text-white font-jB tracking-widest text-xl sm:text-2xl md:text-3xl lg:text-4xl py-1 rounded-full uppercase inline-block mb-3">
            {subtitle}
          </span>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-jr font-semibold mb-3 leading-snug">
            {title}
          </h2>
          <div className="text-white font-jr text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            {description}
          </div>
          <div className="mt-4">
            <Buttontwo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloomrStyleCard;
