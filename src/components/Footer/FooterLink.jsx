import React from "react";
import { useSound } from "use-sound";
import { motion } from "framer-motion";

const FooterLink = ({ href, children }) => {
  const [playBeep] = useSound("/sounds/beep.mp3", { volume: 0.5 });
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 font-ibm"
      onClick={() => playBeep()}
    >
      {children}
    </motion.a>
  );
};

export default FooterLink;
