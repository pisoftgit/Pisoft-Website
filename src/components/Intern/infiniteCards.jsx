"use client";

import { cn } from "../../lib/util";
import React, { useEffect, useState } from "react";


export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);


  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const speedMap = {
        fast: "20s",
        normal: "40s",
        slow: "60s"
      };
      containerRef.current.style.setProperty(
        "--animation-duration",
        speedMap[speed] || "40s"
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-gray-900 bg-[linear-gradient(180deg,#d0f0ff,#ffe0cc)] px-8 py-6 md:w-[430px] dark:border-zinc-900 shadow-xl overflow-hidden"
            key={item.name}
          >
            <blockquote className="relative z-10 h-full flex flex-col justify-between">
              <p className="relative z-20 text-sm md:text-lg lg:text-xl leading-relaxed font-jSB text-blue-950 dark:text-blue-950">
                {expandedIndex === idx ? (
                  <>
                    “{item.quote}”{" "}
                    {item.quote.length > 150 && (
                      <button
                        onClick={() => setExpandedIndex(null)}
                        className="text-sm text-blue-900 underline hover:text-blue-900"
                      >
                        Read less
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    “{item.quote.slice(0, 200).trim()}... ”{" "}
                    <button
                      onClick={() => setExpandedIndex(idx)}
                      className="text-sm text-blue-900 underline hover:text-blue-900"
                    >
                      Read more
                    </button>
                  </>
                )}
              </p>


              <div className="relative z-20 flex flex-row items-center justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-sm sm:text-base md:text-mf lg:text-lg leading-[1.6] font-semibold text-orange-500 dark:text-orange-600">
                    {item.name}
                  </span>
                  <span className="text-sm sm:text-base md:text-mf lg:text-lg leading-[1.6] font-bold text-blue-800 dark:text-blue-900">
                    {item.rating ? `⭐ ${item.rating}/5` : ""}
                  </span>

                </div>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-30 h-auto object-cover bg-no-repeat rounded-xl border-2 border-white shadow-md"
                  />
                )}
              </div>
            </blockquote>

            {/* Decorative Background Glow */}
            <div className="absolute inset-0 pointer-events-none -z-10 bg-gradient-to-br from-blue-200/20 via-transparent to-orange-100/30 blur-2xl opacity-40" />
          </li>
        ))}
      </ul>
    </div>
  );
};
