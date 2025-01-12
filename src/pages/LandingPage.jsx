import React from "react";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-retro-dark flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-8 lg:grid-cols-12 md:grid-cols-12 gap-4 opacity-10">
        {Array.from({ length: 144 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              delay: i * 0.01,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="bg-neon-cyan w-full h-full"
          ></motion.div>
        ))}
      </div>

      <div className="container px-8 sm:px-16 mx-auto lg:px-4 flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Button
            onClick={() => navigate("/portfolio")}
            variant="pink"
            className="transform py-4 w-full sm:w-auto"
          >
            PORTFOLIO
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Button
            onClick={() => navigate("/freelancing")}
            variant="cyan"
            className="transform py-4 w-full sm:w-auto"
          >
            FREELANCE
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
