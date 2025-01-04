// import React from "react";
// import useSound from "use-sound";
// import { motion } from "framer-motion";
// import { AllProjects } from "../../data/projects";
// import { ExternalLink, Github } from "lucide-react";

// const ProjectCard = () => {
//   const [playBeep] = useSound("/sounds/beep.mp3", { volume: 0.5 });

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{
//         duration: 0.5,
//         delay: 0.2,
//         type: "spring",
//         stiffness: 100,
//       }}
//       whileHover={{ y: -5 }}
//       className="bg-light-secondary dark:bg-dark-secondary pixel-corners overflow-hidden
//                  transform transition-all duration-300 hover:shadow-xl
//                  hover:shadow-neon-cyan/20"
//     >
//       <motion.div className="relative group cursor-pointer" whileHover="hover">
//         <img
//           src={AllProjects.image}
//           alt={AllProjects.title}
//           className="w-full h-48 object-cover translate-transform duration-300 group-hover:scale-105"
//         />
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//           initial={{ opacity: 0 }}
//           whileHover={{ opacity: 1 }}
//         >
//           <motion.a
//             href={AllProjects.demoUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.1 }}
//             onClick={() => playBeep()}
//             className="p-3 bg-neon-pink rounded-full text-white hover:shadow-lg hover:shadow-neon-pink/50 transition-shadow"
//           >
//             <ExternalLink className="w-6 h-6" />
//           </motion.a>
//           <motion.a
//             href={AllProjects.githubUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.1 }}
//             onClick={() => playBeep()}
//             className="p-3 bg-neon-cyan rounded-full text-white hover:shadow-lg hover:shadow-neon-cyan/50 transition-shadow"
//           >
//             <Github className="w-6 h-6" />
//           </motion.a>
//         </motion.div>
//       </motion.div>

//       <div className="p-6">
//         <motion.h3
//           className="text-xl font-press-start mb-2 text-neon-pink dark:text-neon-cyan truncate"
//           whileHover={{ x: 5 }}
//         >
//           {AllProjects.title}
//         </motion.h3>
//         <p className="text-light-secondary dark:text-dark-secondary mb-4 font-ibm line-clamp-2">
//           {AllProjects.description}
//         </p>
//         <div className="flex flex-wrap gap-2">
//           {AllProjects.techStack.map((tech) => (
//             <motion.span
//               key={tech}
//               whileHover={{ scale: 1.05 }}
//               className="px-3 py-1 bg-light-accent dark:bg-dark-accent text-xs font-ibm rounded-full text-neon-cyan"
//             >
//               {tech}
//             </motion.span>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard;





import React from "react";
import useSound from "use-sound";
import { motion } from "framer-motion";
import { AllProjects } from "../../data/projects";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = () => {
  const [playBeep] = useSound("/sounds/beep.mp3", { volume: 0.5 });

  return (
    <>
      {AllProjects.map((project) => (
        <motion.div
          key={project.id}
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
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover translate-transform duration-300 group-hover:scale-105"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                onClick={() => playBeep()}
                className="p-3 bg-neon-pink rounded-full text-white hover:shadow-lg hover:shadow-neon-pink/50 transition-shadow"
              >
                <ExternalLink className="w-6 h-6" />
              </motion.a>
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                onClick={() => playBeep()}
                className="p-3 bg-neon-cyan rounded-full text-white hover:shadow-lg hover:shadow-neon-cyan/50 transition-shadow"
              >
                <Github className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          <div className="p-6">
            <motion.h3
              className="text-xl font-press-start mb-2 text-neon-pink dark:text-neon-cyan truncate"
              whileHover={{ x: 5 }}
            >
              {project.title}
            </motion.h3>
            <p className="text-light-secondary dark:text-dark-secondary mb-4 font-ibm line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-light-accent dark:bg-dark-accent text-xs font-ibm rounded-full text-neon-cyan"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default ProjectCard;
