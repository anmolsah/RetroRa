import React from "react";
import { motion } from "framer-motion";
import { skills } from '../data/skills';
import SkillCard from './SkillCard';

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            skills.map((skill,index)=>(
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Skills;
