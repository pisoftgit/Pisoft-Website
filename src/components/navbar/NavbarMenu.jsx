"use client";
import React from "react";
import { motion } from "motion/react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 12,
  stiffness: 120,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, children, onClick }) => {
  const isActive = active === item;

  return (
    <div
      onMouseEnter={() => setActive(item)}
      onClick={onClick}
      className="relative cursor-pointer select-none px-3 sm:px-4"
    >
      <motion.p
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-base sm:text-lg text-blue-950 hover:text-orange-500 font-semibold transition-colors duration-300"
      >
        {item}
      </motion.p>

      {isActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 12 }}
          transition={transition}
          className="absolute z-50 top-full left-1/2 -translate-x-1/2 mt-6 w-half"
        >
          <motion.div
            layoutId="active"
            className="bg-white rounded-2xl border border-blue-300 shadow-xl p-5 hover:shadow-2xl transition duration-300"
          >
            <motion.div layout className="w-max h-full">{children}</motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  return (
    <motion.nav
      layout
      className="bg-gradient-to-r from-blue-100 via-orange-100 to-orange-200 border-2 border-neutral-200 text-blue-950 font-jr shadow-xl flex justify-center flex-wrap gap-2 sm:gap-4 px-6 py-3 backdrop-blur-lg"
    >
      {children}
    </motion.nav>
  );
};

export const ProductItem = ({ title, description, src, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 180 }}
      className="flex items-center gap-4 cursor-pointer bg-white/60 hover:bg-white/80 p-4 rounded-xl shadow-md hover:shadow-2xl transition duration-300 max-w-xs backdrop-blur"
    >
      <img
        src={src}
        width={100}
        height={60}
        alt={title}
        className="shrink-0 rounded-md shadow-md object-cover"
      />
      <div>
        <h4 className="text-lg font-jB text-orange-600 mb-1">{title}</h4>
        <p className="text-sm text-blue-950 leading-snug">{description}</p>
      </div>
    </motion.div>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <motion.a
      {...rest}
      whileHover={{ scale: 1.05 }}
      className="text-blue-950 hover:text-orange-500 font-medium transition-colors duration-300 cursor-pointer text-sm sm:text-base"
    >
      {children}
    </motion.a>
  );
};
