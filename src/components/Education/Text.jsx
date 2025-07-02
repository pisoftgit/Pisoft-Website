"use client";
import { TypewriterEffectSmooth } from "../TypewriterEffect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "The",
    },
    {
      text: "Most",
    },
    {
      text: "Flexible",
    },
    {
      text: "&",
    },
    {
      text: "Easy",
    },
    {
      text: "To",
    },
    {
      text: "Use",
    },
    {
      text: "Features.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="font-jB flex flex-col items-center justify-center h-auto">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
