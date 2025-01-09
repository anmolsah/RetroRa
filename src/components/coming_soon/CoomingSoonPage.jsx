import React from "react";
import { useSound } from "use-sound";
import GridBackground from "./GridBackground";
import { motion } from "framer-motion";
import { Key, Terminal } from "lucide-react";
import RetroText from "./RetroText";

const CoomingSoonPage = () => {
  const [playBeep] = useSound("/sounds/beep.mp3", { volume: 0.5 });
  return (
    <div className="min-h-screen bg-retro-dark flex items-center justify-center relative overflow-hidden">
      <GridBackground />

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Terminal className="w-20 h-20 mx-auto text-neon-cyan" />
        </motion.div>
        <RetroText />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12"
        >
          <p className="font-ibm text-neon-pink text-lg mb-4">
            INITIALIZING FREELANCE MODE...
          </p>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-3 h-3 bg-neon-cyan rounded-full"
              ></motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CoomingSoonPage;
