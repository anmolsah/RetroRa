import React from "react";
import Hero from "./../components/Hero";
import Projects from "../components/Projects";
import Skills from "./../components/Skills";
import About from "./../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Portfolio = () => {
  return (
    <div className="bg-retro-dark">
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
