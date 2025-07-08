"use client";

import { cn } from "../lib/util";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  const renderWords = () => (
    <motion.div ref={scope} className="inline-block">
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block whitespace-nowrap">
          {word.text.map((char, index) => (
            <motion.span
              key={`char-${index}`}
              className={cn(
                "text-black dark:text-white opacity-0 hidden",
                word.className
              )}
            >
              {char}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
  );

  return (
    <div
      className={cn(
        "text-lg sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-center flex items-center justify-center flex-wrap",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "ml-1 inline-block w-[3px] bg-blue-500 rounded-sm",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const renderWords = () => (
    <div className="inline-block whitespace-nowrap">
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block ml-2">
          {word.text.map((char, index) => (
            <span
              key={`char-${index}`}
              className={cn("text-black dark:text-black", word.className)}
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn("flex items-center justify-center space-x-1", className)}>
      <motion.div
        className="overflow-hidden"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{
          duration: 1.2,
          ease: "linear",
          delay: 0.5,
        }}
      >
        <div
          className="text-xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold"
          style={{ whiteSpace: "wrap" }}
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "text-xl sm:text-4xl lg:text-4xl xl:text-5xl bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
