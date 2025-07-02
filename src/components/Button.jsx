
import React, { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

function Button() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="relative w-full max-w-[160px] sm:max-w-[220px] md:max-w-[220px]">
      <div
        className="cursor-pointer flex w-full min-w-[140px] sm:w-[220px] md:w-[260px] bg-white border-amber-400 border rounded-3xl overflow-hidden justify-center items-center relative py-2 px-4"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <motion.div
          animate={{
            scale: isHover ? 45 : 1,
            backgroundColor: isHover ? '#FF5722' : '#FFA726',
          }}
          transition={{
            ease: 'easeIn',
            duration: 0.3,
          }}
          className="absolute left-3 sm:left-4 circle h-2.5 w-2.5 rounded-full"
        />
        <motion.div className="z-10 font-jSB tracking-wide text-center">
          <motion.p
            animate={{
              x: isHover ? -8 : 8,
              color: isHover ? '#ffffff' : '#FFA726',
            }}
            className="text-sm sm:text-base md:text-lg"
          >
            More About Us
          </motion.p>
        </motion.div>
        <ArrowRightIcon
          color="white"
          className="absolute right-3 sm:right-4 w-4 h-4 sm:w-5 sm:h-5 stroke-[3]"
        />
      </div>
    </div>
  );
}

export default Button;
