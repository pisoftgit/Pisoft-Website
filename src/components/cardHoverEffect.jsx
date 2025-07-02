import { cn } from "../lib/util";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Tilt from "react-parallax-tilt";


export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group block h-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 bg-gradient-to-br from-sky-400 via-orange-50 to-orange-400 dark:bg-slate-800/[0.8] rounded-3xl z-0"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.3 } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              />
            )}
          </AnimatePresence>

          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.15}
            scale={1}
            transitionSpeed={250}
            className="relative z-10 h-full"
          >
            <Card>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </Tilt>
        </a>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-between  h-full min-h-[300px] w-full overflow-hiddenbackdrop-blur-md bg-sky-300/40 rounded-3xl shadow-lg p-6 border border-transparent group-hover:border-white/40 relative z-10 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1]",
        className
      )}
    >
      <div className="relative z-20 p-6 flex flex-col justify-between h-full">
        {children}
      </div>
    </div>
  );
};


export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-sky-600 font-bold tracking-tight text-2xl font-jB", className)}>
      {children}
    </h4>
  );
};


export const CardDescription = ({ className, children }) => {
  return (
    <p className={cn("mt-4 text-black text-md tracking-wide leading-relaxed font-jr", className)}>
      {children}
    </p>
  );
};
