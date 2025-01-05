import React from "react";
import { motion } from "framer-motion";
import { useSound } from "use-sound";

const SkillCard = ({ skill, index }) => {
  const [playBeep] = useSound("/sounds/beep.mp3", { volume: 0.5 });
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => playBeep()}
      className="bg-gray-800 p-6 pixel-corners relative overflow-hidden"
    >
      SkillCard
    </motion.div>
  );
};

export default SkillCard;
