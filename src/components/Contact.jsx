import React from "react";
import { motion } from "framer-motion";
import { useSound } from "use-sound";

const Contact = () => {
  const [playBeep] = useSound("/sounds/beep.mp3", { volume: 0.5 });
  return (
    <section className="py-20 bg-retro-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-press-start text-center mb-12 text-neon-gold"
        >
          CONTACT_TERMINAL
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-6 pixel-corners"
          >
            <h3 className="text-xl font-pres-start mb-6 text-neon-cyan">
              SYSTEM_INFO
            </h3>
            <div className="space-y-4 mb-8 font-ibm">
              <div className="flex items-center gap-4">
                <span className="text-neon-pink">EMAIL:</span>
                <span className="text-white">annifind010@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-neon-pink">LOCATION</span>
                <span className="text-white">SILIGURI_CITY_001</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-neon-pink">STATUS</span>
                <span className="text-neon-cyan">ONLINE</span>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { platform: "GITHUB", url: "https://github.com/anmolsah" },
                { platform: "TWITTER", url: "https://x.com/anni_i29" },
                {
                  platform: "LINKEDIN",
                  url: "https://www.linkedin.com/in/anmol-sah-551083238/",
                },
              ].map(({ platform, url }) => (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-2 bg-gray-800 text-neon-cyan font-press-start text-xs pixel-corners hover:text-neon-pink"
                  onClick={() => playBeep()}
                >
                  {platform}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6 bg-gray-900 p-6 pixel-corners">
              <div>
                <label className="block text-sm font-press-start text-neon-pink mb-2">
                  USER_NAME
                </label>
                <input />
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
