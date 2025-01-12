import React from "react";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-retro-dark flex items-center justify-center  relative overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-8 lg:grid-cols-12 md:grid-cols-12  gap-4 opacity-10">
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
      <div className="container sm:inline-block px-16 space-y-12 lg:space-y-0  mx-auto lg:px-4 lg:flex justify-center items-center relative z-10 max-w-4xl lg:gap-6">
        <Button
          onClick={() => navigate("/portfolio")}
          variant="pink"
          className="transfrom -translate-x-4 py-4"
        >
          PORTFOLIO
        </Button>
        <Button
          onClick={() => navigate("/freelancing")}
          variant="cyan"
          className="transfrom translate-x-4 py-4"
        >
          FREELANCE
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
