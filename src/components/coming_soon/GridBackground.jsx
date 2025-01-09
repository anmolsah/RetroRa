import React from "react";
import { motion } from "framer-motion";
import { init } from "./../../../node_modules/@emailjs/browser/es/methods/init/init";

const GridBackground = () => {
  return (
    <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-4 opacity-10">
      {Array.from({ length: 144 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            backgroundColor: ["#FF1B8D", "00E5FF", "FF1B8D"],
          }}
          transition={{
            duration: 4,
            delay: i * 0.02,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-full h-full"
        ></motion.div>
      ))}
    </div>
  );
};

export default GridBackground;
