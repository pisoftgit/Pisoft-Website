import React, { useRef, useState } from "react";
import {motion }    from "framer-motion";
motion
export const SlideTabsExample = () => {
  return (
    <div className="">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className=" ml-56 relative mx-auto flex w-fit rounded-full   items-center justify-center "
    >
      <Tab  setPosition={setPosition}>About Us</Tab>
      <Tab setPosition={setPosition}>Services</Tab>
      <Tab setPosition={setPosition}>Our Work</Tab>
      <Tab setPosition={setPosition}>Insights</Tab>
      <Tab setPosition={setPosition}>Contact</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className=" font-jmed uppercase hover:text-white  relative z-10 block cursor-pointer px-3 py-1.5 text-xs  text-black mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};