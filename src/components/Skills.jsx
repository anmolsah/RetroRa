import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-press-start text-center mb-12 text-neon-gold"
        >
          SKILL_MATRIX
        </motion.h2>
      </div>
    </section>
  );
};

export default Skills;
