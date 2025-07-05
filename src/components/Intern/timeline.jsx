"use client";
import { useScroll, useTransform, motion } from "framer-motion"; 
import React, { useEffect, useRef, useState } from "react";
import BlurText from "../BlurText";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans py-5" 
      ref={containerRef}
    >
      <div className="max-w-screen pt-4 text-center mx-auto px-4 md:px-8 lg:px-10">
        <BlurText
            text="Benefits of internship with us"
            className="text-5xl mt-0 font-jSB text-center leading-tight text-blue-950 px-5"
            delay={110}
            duration={0.7}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pt-5 pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#fef9f5] flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-[#eca762] border border-[#f08419] p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-jSB text-orange-500">
                {item.title}
              </h3>
            </div>

            {/* Content block */}
            <div className="relative pl-20 pt-10 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-jSB text-orange-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Vertical progress line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-[#ffcc99] to-transparent mask-image-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#0a4681] via-[#e77e14] to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
