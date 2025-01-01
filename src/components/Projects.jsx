import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const categories = ["all", "frontend", "fullstack", "backend"];
  return (
    <section className="py-20 bg-light-primary dark:bg-dark-primary">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-press-start text-center mb-12 text-neon-gold"
        >
          PROJECTS.EXE
        </motion.h2>
        <motion.div
        
        ></motion.div>
      </div>
    </section>
  );
};

export default Projects;
