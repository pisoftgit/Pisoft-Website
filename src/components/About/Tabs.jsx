"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/util";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}>
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => moveSelectedTabToTop(idx)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative px-4 py-6 mx-4 rounded-full text-sm font-jSB transition-colors duration-300",
              "text-black hover:bg-orange-200 hover:text-white",
              tabClassName
            )}
            style={{ transformStyle: "preserve-3d" }}>
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 rounded-full border-2  z-[-1] bg-sky-200",
                  activeTabClassName
                )}
              />
            )}
            <span className="relative block z-10 text-black hover:text-yellow-600">
              {tab.title}
            </span>
          </button>
        ))}
      </div>

      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-10", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering
}) => {
  const isActive = (tab) => tab.value === tabs[0].value;

  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0
          }}
          className={cn(
            "w-full h-full absolute top-0 left-0 bg-zinc-700 p-6 rounded-xl shadow-md",
            className
          )}>
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
