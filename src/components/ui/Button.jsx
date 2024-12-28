import React from "react";
import { motion } from "framer-motion";
import useSound from "use-sound";

const Button = ({ onClick, children, variant = "pink", className = "" }) => {
  const [playBeep] = useSound("/sounds/beep.mp3", { volume: 0.5 });

  const handleClick = () => {
    playBeep();
    if (onClick) {
      onClick();
    }
  };

  const baseClasses =
    "px-12 py-2 font-press-start text-lg pixel-corners neon-glow text-white";
  const variantClasses = variant === "pink" ? "bg-neon-pink" : "bg-neon-cyan";
  return (
    <motion.button
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
