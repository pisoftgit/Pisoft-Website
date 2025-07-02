"use client";;
import { useEffect, useState } from "react";
import { motion } from "motion/react";

let interval;
export const CardStack = ({ items, offset, scaleFactor, onCardChange }) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    if (onCardChange) {
      onCardChange(cards[0]);
    }
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const updated = [...prevCards];
        updated.unshift(updated.pop());
        if (onCardChange) {
          onCardChange(updated[0]);
        }
        return updated;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute bg-white dark:bg-blue-950 h-60 w-60 md:h-60 md:w-96 rounded-3xl overflow-hidden shadow-xl border border-neutral-200 dark:border-white/[0.1]"
          style={{ transformOrigin: "top center" }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
        >
          <img
            src={card.image}
            alt={card.name}
            className="h-full w-full object-cover rounded-3xl"
          />
        </motion.div>
      ))}
    </div>
  );
};
