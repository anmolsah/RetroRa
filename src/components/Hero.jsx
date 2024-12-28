import React from "react";
import useSound from "use-sound";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
  const [playBeep] = useSound("/beep.mp3", { volume: 0.5 });
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-retro-dark">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-neon-cyan/20 border-r h-full"></div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <img src=""  />
      </motion.div>
    </section>
  );
};

export default Hero;
