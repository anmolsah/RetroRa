import React from "react";
import useSound from "use-sound";
import { motion } from "framer-motion";
import { AllProjects } from "../../data/projects";

const ProjectCard = () => {
  const [playBeep] = useSound("/sounds/beep.mp3", { volume: 0.5 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{ y: -5 }}
      className="bg-light-secondary dark:bg-dark-secondary pixel-corners overflow-hidden
                 transform transition-all duration-300 hover:shadow-xl
                 hover:shadow-neon-cyan/20"
    >
      <motion.div className="relative group cursor-pointer" whileHover="hover">
        <img
          src={AllProjects.image}
          alt={AllProjects.title}
          className="w-full h-48 object-cover translate-transform duration-300 group-hover:scale-105"
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
