import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

function Dbutton({ Text }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="flex justify-center">
      <div
        className="container cursor-pointer flex w-32 sm:w-40 mt-5 md:w-48 h-10 sm:h-12 relative bg-white border-amber-400 border rounded-3xl overflow-hidden items-center justify-center"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <motion.div
          animate={{
            scale: isHover ? 45 : 1,
            backgroundColor: isHover ? "#FFA726" : "#FFA726",
          }}
          transition={{
            ease: "easeIn",
            duration: 0.3,
          }}
          className="absolute left-3 sm:left-4 h-2 w-2 sm:h-3 sm:w-3 rounded-full"
        />
        <motion.div className="title z-10 font-jSB tracking-wide px-2 sm:px-3">
          <motion.p
            animate={{
              x: isHover ? -8 : 8,
              color: isHover ? "#ffffff" : "#FFA726",
            }}
            transition={{
              ease: "easeIn",
              duration: 0.3,
            }}
            className="text-xs sm:text-sm md:text-base"
          >
            {Text}
          </motion.p>
        </motion.div>
        <ArrowRightIcon
          color="white"
          className="absolute right-2 sm:right-3 w-4 h-4 sm:w-5 sm:h-5 stroke-2"
        />
      </div>
    </div>
  );
}

export default Dbutton;