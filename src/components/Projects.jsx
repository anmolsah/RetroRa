import React, { useState } from "react";
import { motion } from "framer-motion";
import FilterButton from "./portfolio/FilterButton";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  //const filteredProjects = 

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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <FilterButton
              key={category}
              category={category}
              activeFilter={filter}
              onClick={() => setFilter(category)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
