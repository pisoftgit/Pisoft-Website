import React, { useMemo, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
motion
const images = [
  "scroll1.jpg", "scroll2.jpg", "scroll7.jpeg",
  "scroll4.jpg", "scroll6.jpeg", "scroll3.jpg",
  "scroll8.jpeg", "scroll1.jpg", "scroll7.jpeg", "scroll3.jpg"
];

const VIEW_WIDTH = 1000;
const VIEW_HEIGHT = 600;

const InteractiveImageGrid = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 45, damping: 20 });
  const springY = useSpring(y, { stiffness: 45, damping: 20 });
  const containerRef = useRef(null);

  const gridData = useMemo(() => {
    const elements = [];
    const gridLayout = [
      [1, 1, 1, 1], // 4 columns
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ];

    const baseHeight = 300;
    const spacing = 15;
    let currentY = 0;
    let maxRowWidth = 0;

    gridLayout.forEach((row, rowIndex) => {
      let currentX = 0;
      
      row.forEach((cell, cellIndex) => {
        const width = baseHeight + Math.random() * 150; // Variable width
        const height = baseHeight; // Fixed height

        elements.push({
          src: images[(rowIndex * row.length + cellIndex) % images.length],
          top: currentY,
          left: currentX,
          width,
          height
        });

        currentX += width + spacing;
      });

      const rowWidth = currentX - spacing;
      if (rowWidth > maxRowWidth) maxRowWidth = rowWidth;
      currentY += baseHeight + spacing;
    });

    return {
      imageElements: elements,
      GRID_WIDTH: maxRowWidth,
      GRID_HEIGHT: currentY - spacing
    };
  }, []);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const scrollX = -((offsetX / rect.width - 0.5) * 
      (gridData.GRID_WIDTH - VIEW_WIDTH) * 1);
    const scrollY = -((offsetY / rect.height - 0.5) * 
      (gridData.GRID_HEIGHT - VIEW_HEIGHT) * 1.3);

    x.set(scrollX);
    y.set(scrollY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const offsetX = (VIEW_WIDTH - gridData.GRID_WIDTH) / 2;
  const offsetY = (VIEW_HEIGHT - gridData.GRID_HEIGHT) /2;

  return (
    <section className="bg-black h-screen pt-12 items-center justify-center">
        <div
    ref={containerRef}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    className="relative w-[900px] h-[600px] overflow-hidden bg-black mx-auto  rounded-2xl shadow-2xl"
  >
    <motion.div
      style={{ 
        x: springX,
        y: springY,
        width: gridData.GRID_WIDTH,
        height: gridData.GRID_HEIGHT,
        translateX: offsetX,
        translateY: offsetY
      }}
      className="absolute top-0 left-0 pointer-events-none"
    >
      {gridData.imageElements.map(({ src, top, left, width, height }, i) => (
        <motion.div
          key={i}
          style={{ 
            top,
            left,
            width,
            height
          }}
          className="absolute overflow-hidden rounded-xl grayscale hover:grayscale-0 cursor-pointer pointer-events-auto"
          whileHover={{
            scale: 1.03,
            transition: { type: "spring", stiffness: 300, damping: 10 }
          }}
        >
          <img
            src={src}
            alt={`Gallery image ${i + 1}`}
            className="w-full h-full object-cover transform transition-transform duration-200 hover:scale-105"
          />
        </motion.div>
      ))}
    </motion.div>

    {/* Centered Text Overlay */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="text-center">
        <h1 className="text-6xl font-jSB  text-orange-400 mb-4">PISOFT</h1>
        <div className="text-sm text-gray-300">SEE THE CASE STUDY</div>
      </div>
    </div>
  </div></section>
    
  );
};

export default InteractiveImageGrid;