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
      <div className="absolute top-0 right-0 w-16 h-16 bg-neon-pink opacity-5 transform rotate-45 translate-x-8 -translate-y-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-neon-cyan font-press-start text-sm">{`0*${index
            .toString(16)
            .toUpperCase()}`}</span>
          <h3 className="text-xl font-press-start text-white">{skill.name}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
