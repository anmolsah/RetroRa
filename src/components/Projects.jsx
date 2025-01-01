import React from "react";

const Projects = () => {
  return (
    <section className="py-20 bg-light-primary dark:bg-dark-primary">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-press-start text-center mb-12 text-neon-gold"
        >
          PROJECTS.EXE
        </motion.h2>
      </div>
    </section>
  );
};

export default Projects;
