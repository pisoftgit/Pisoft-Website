"use client";

import { cn } from "../../lib/util";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
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
        fast: "35s",
        normal: "40s",
        slow: "45s",
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
        "scroller relative z-10 max-w-screen overflow-hidden py-5 [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 px-6",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.id || item.name}
            className="relative w-[320px] max-w-full shrink-0 rounded-[1.5rem] sm:rounded-[1.7rem] bg-blue-950 px-6 py-5 md:w-[470px] shadow-md border border-gray-200 transition-transform duration-300 hover:scale-105 hover:bg-[#e38724]"
          >
            <blockquote className="flex flex-col justify-between h-full">
              <p className="text-white text-base md:text-lg font-jS leading-relaxed mb-4">
                “{item.quote.slice(0, 160).trim()}...”{" "}
              </p>
              <a
                href={`/testimonials/${item.id || item.slug}`}
                className="text-sm text-zinc-50 hover:underline"
              >
                Read full feedback →
              </a>
              <div className="mt-6 border-t border-gray-200 pt-2">
                <span className="block font-semibold text-white text-md">
                  {item.name}
                </span>
                {item.rating && (
                  <span className="block text-zinc-50 text-md">
                    ⭐ {item.rating}/5
                  </span>
                )}
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
