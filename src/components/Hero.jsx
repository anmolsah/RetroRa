import React from "react";
import useSound from "use-sound";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  const [playBeep] = useSound("/sounds/beep.mp3", { volume: 0.5 });
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-retro-dark">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-neon-cyan/20 border-r h-full" />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        {" "}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <img
            className="w-64 h-64 rounded-lg mx-auto pixel-corners"
            src={assets.image1}
            alt="Pixel Art Avatar"
          />
        </motion.div>
        <h1 className="text-4xl md:text-4xl font-press-start mb-6 text-neon-pink neon-glow">
          ANMOL SAH.
        </h1>
        <div className="h-16 mb-8 text-neon-cyan">
          <Typewriter
            options={{
              strings: [
                "WEB DEVELOPER",
                "FRONTEND DEVELOPER",
                "FREELANCER",
                "FULL STACK DEVELOPER",
                "MERN STACK DEVELOPER",
              ],
              autoStart: true,
              loop: true,
              wrapperClassName: "font-press-start text-xl",
              onKeyStroke: () => playBeep(),
            }}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-neon-pink text-white font-press-start text-sm pixel-corners neon-glow"
            onClick={() => playBeep()}
          >
            CONNECT ME
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-neon-cyan text-white font-press-start text-sm pixel-corners neon-glow"
            onClick={() => playBeep()}
          >
            <a
              href="../assets/updatedResume_02.pdf"
              download="Anmol_Sah_Resume.pdf"
            >
              RESUME
            </a>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
