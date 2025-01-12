import React from "react";
import { motion } from "framer-motion";

const RetroText = () => {
  const letters = "COMING SOON".split("");

  const firstHalf = "COMING".split("");
  const secondHalf = "SOON".split("");

  return (
    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
      <div className="flex flex-wrap justify-center">
        {firstHalf.map((letter, index) => (
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
              delay: index * 0.1,
            }}
            className="font-press-start text-5xl md:text-4xl lg:text-6xl xl:text-7xl text-white"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>

      <div className="flex flex-wrap justify-center">
        {secondHalf.map((letter, index) => (
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
              delay: index * 0.1,
            }}
            className="font-press-start text-5xl md:text-4xl lg:text-6xl xl:text-7xl text-white"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default RetroText;
