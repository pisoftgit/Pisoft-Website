"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "../lib/util";

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  const handleInsideClick = () => {
    setSelected(null);
  };

  return (
    <div className="w-full text-center md:h-full h-full grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 grid-cols-2 max-w-7xl mx-auto gap-2 md:gap-4 relative px-2 sm:px-4 md:px-6 
    scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
      {cards.map((card, i) => (
        <div key={card.id || i} className={cn(card.className, "")}>
          <motion.div
                onClick={() => handleClick(card)}
                className={cn(
                  card.className,
                  "relative overflow-hidden",
                  selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 m-auto z-50 flex justify-center items-center flex-wrap flex-col md:w-1/2 md:h-1/2 h-25"
              : lastSelected?.id === card.id
                    ? "z-40 bg-white rounded-xl h-full w-full"
                    : "bg-white rounded-xl h-full w-full"
                )}
                layoutId={`card-${card.id}`}
              >
            {selected?.id === card.id && (
              <SelectedCard
                selected={selected}
                handleInsideClick={handleInsideClick}
              />
            )}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}

      {/* Overlay to detect outside click */}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "fixed inset-0 bg-blue opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }) => {
  return (
    <div className="relative h-full flex justify-center items-center w-full group cursor-pointer">
     <motion.img
        layoutId={`image-${card.id}-image`}
        src={card.thumbnail}
        className="object-cover absolute inset-0 h-full w-full transition duration-200"
        alt={card.alt || "thumbnail"}
      />
      <div className="absolute inset-0 text-center flex items-center justify-center bg-orange-300 bg-opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none z-20">
        <span className="text-blue-950 font-jB text-2xl text-center">
          {card.title}
        </span>
      </div>
    </div>
  );
};

const SelectedCard = ({ selected, handleInsideClick }) => {
  return (
    <div
      className="bg-blue-400 lg:h-auto h-full w-full flex justify-center items-center text-center rounded-lg shadow-2xl relative z-[60]"
      onClick={handleInsideClick}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="h-full text-center w-full p-4 bg-black opacity-60 z-10
                   overflow-y-auto md:overflow-y-visible
                   scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
