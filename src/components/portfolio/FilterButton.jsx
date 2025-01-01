import React from "react";
import { motion } from "framer-motion";
import { useSound } from "use-sound";

const FilterButton = ({ category, activeFilter, onClick }) => {
  const [playBeep] = useSound("/sounds/beep.mp3", { volume: 0.5 });

  const handleClick = () => {
    playBeep(), onclick();
  };

  const isActive = activeFilter === category;
  return (
    <motion.button
      onclick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-2 font-press-start text-sm filter-corners transition-all duration-400 ${
        isActive
          ? "bg-neon-pink text-white neon-glow"
          : "bg-light-secondary dark:bg-dark-secondary text-light-primary dark:text-dark-primary hover:text-neon-cyan"
      }`}
    >
      {category.toUpperCase()}
    </motion.button>
  );
};

export default FilterButton;
