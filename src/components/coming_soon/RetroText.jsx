import React from 'react';
import { motion } from 'framer-motion';

const RetroText = () => {
  const letters = "COMING SOON".split("");

  return (
    <div className="flex space-x-2">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            textShadow: [
              "0 0 5px #FF1B8D, 0 0 10px #FF1B8D",
              "0 0 15px #00E5FF, 0 0 20px #00E5FF",
              "0 0 5px #FF1B8D, 0 0 10px #FF1B8D",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.01,
          }}
          className="font-press-start text-4xl md:text-6xl text-white"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
};

export default RetroText;
