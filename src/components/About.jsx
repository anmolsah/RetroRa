import React from "react";
import useSound from "use-sound";
import { motion } from "framer-motion";
import { Terminal, Cpu, Code2 } from "lucide-react";

const About = () => {
  const [playBeep] = useSound("/sounds/beep.mp3", { volume: 0.5 });
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-5">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-neon-cyan h-full" />
        ))}
      </div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="pixel-corners bg-gray-800 p-6 border-l-2 border-neon-pink">
              <h2 className="text-3xl font-press-start mb-6 text-neon-cyan">
                <span className="text-neon-pink">&gt;</span>ABOUT.exe
              </h2>
              <div className="space-y-4 font-ibm text-gray-300">
                <p className="typing-effect">
                  <span className="text-neon-pink">$</span>
                  Initializing profile...
                </p>
                <p>
                  I'm a motivated software developer eager to apply my skills
                  and learn new technologies. I am passionate about building
                  creative and efficient solutions to everyday problems.
                </p>
                <p className="text-neon-cyan">
                  STATUS: Looking for opportunities to grow
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="font-press-start text-xl text-neon-gold mb-8">
              TECH_STACK
            </h3>
            {[
              {
                year: "2023",
                title: "Self-Taught Developer",
                company: "Personal Projects",
                icon: Code2,
              },
              {
                year: "2022",
                title: "TA(teaching Assistant)",
                company: "Coding Ninjas",
                icon: Terminal,
              },
              {
                year: "2021",
                title: "Freelancer",
                company: "Freelance Projects",
                icon: Cpu,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                onHoverStart={() => playBeep()}
                className="flex gap-4 items-start group cursor-pointer"
              >
                <div className="w-24 flex-shrink-0 ">
                  <span className="text-sm font-press-start text-neon-cyan">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1 pb-6 border-l-2 border-gray-800 pl-4 group-hover:border-neon-pink transition-colors duration-400">
                  <div className="flex items-center gap-2">
                    <item.icon className="w-5 h-5 text-neon-pink" />
                    <h4 className="font-press-start text-sm text-white">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-400 mt-2 font-ibm">{item.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
