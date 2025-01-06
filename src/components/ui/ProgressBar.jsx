import React from "react";
import { motion } from "framer-motion";

const ProgressBar = ({ value, label = "PROFICIENCY_LEVEL" }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-center text-sm font-ibm">
        <span className="text-neon-pink">{label}</span>
        <span className="text-neon-cyan">{value}%</span>
      </div>
      <div className="w-full bg-gray-900 pixel-corners h-4 p-1">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="bg-neon-pink h-2"
        ></motion.div>
      </div>
    </div>
  );
};

export default ProgressBar;
