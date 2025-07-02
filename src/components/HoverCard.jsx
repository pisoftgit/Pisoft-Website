
import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import imgsrc from "../assets/staff.jpg";

const ROTATION_RANGE = 30;

const TiltCard = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 20 });

  const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = ((mouseY / rect.height) - 0.5) * -ROTATION_RANGE;
    const rY = ((mouseX / rect.width) - 0.5) * ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      style={{
        transformStyle: "preserve-3d",
        transform,
        willChange: "transform",
        perspective: "1000px",
        backfaceVisibility: "hidden",
        isolation: "isolate",
      }}
      className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[560px] h-[180px] sm:h-[220px] md:h-[340px] rounded-xl bg-gradient-to-br from-orange-200 to-orange-500 shadow-xl"
    >
      <motion.div
        style={{
          transform: "translateZ(60px)",
          transformStyle: "preserve-3d",
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
        className="absolute inset-4 sm:inset-5 bg-white rounded-xl shadow-lg flex items-center justify-center overflow-hidden"
      >
        <motion.img
          src={imgsrc}
          alt="Showcase"
          className="w-full h-full object-cover rounded-xl"
          style={{
            transform: "translateZ(30px)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const Hover = () => {
  return (
    <div className="w-full flex items-center justify-center pointer-events-auto px-4 sm:px-6 md:px-0">
      <TiltCard />
    </div>
  );
};

export default Hover;
