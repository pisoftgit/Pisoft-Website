import { useTransform, motion, useMotionValue, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import TiltedCard from './TiltCard';

const Card = ({ i, title, description, src, cap, progress, range, targetScale, url }) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = container.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={container}
      className="h-auto flex items-center justify-center sticky top-0 w-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative flex flex-col h-[80vh] sm:h-[85vh] md:h-[690px] w-full sm:w-[95%] rounded-xl sm:rounded-[25px] overflow-hidden mx-auto"
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20 cursor-pointer"
        ></a>

        {/* Background */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          animate={{
            filter: isHovering ? 'blur(15px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.3 }}
        >
          <TiltedCard
            imageSrc={src}
            altText="Background"
            captionText={cap}
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>


        {/* Content */}
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full p-4 sm:p-6 md:p-8 lg:p-10 text-white pointer-events-none">
          <h2 className="mb-4 sm:mb-6 md:mb-8 font-jB text-white text-4xl sm:text-5xl md:text-6xl lg:text-[6rem] text-center sm:text-left">
            {title}
          </h2>

          {isHovering && (
            <p className="font-jl mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl first-letter:text-xl sm:first-letter:text-2xl md:first-letter:text-[28px] text-center sm:text-left">
              {description}
            </p>
          )}
        </div>


        {/* Floating Tooltip */}
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              style={{
                left: mouseX,
                top: mouseY,
                translateX: '-50%',
                translateY: '-120%',
              }}
              className="fixed z-30 bg-black text-white text-xs sm:text-sm md:text-sm px-2 sm:px-3 py-1 rounded-lg pointer-events-none shadow-lg"
            >
              {url}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Card;