import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FilterButton from "./portfolio/FilterButton";
import { AllProjects } from "../data/projects";
import ProjectCard from "./portfolio/ProjectCard";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = AllProjects.filter((project) =>
    filter === "all" ? true : project.category === filter
  );

  const categories = ["all", "frontend", "fullstack", "backend"];
  return (
    <section id="projects" className="py-20 bg-light-primary dark:bg-dark-primary">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center font-press-start text-neon-pink mt-8"
          >
            NO PROJECTS FOUND
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Projects;
