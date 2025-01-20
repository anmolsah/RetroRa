import { assets } from "./../assets/assets";
export const AllProjects = [
  {
    id: 1,
    title: "Imagnation",
    description:
      "A Text-to-Image Generator SaaS platform built with MERN stack and Razorpay integration. Transform your ideas into visuals!",
    image: assets.project1,
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Razorpay",
      "TailwindCSS",
    ],
    demoUrl: "https://imagination-xgvo.vercel.app/",
    githubUrl: "https://github.com/anmolsah/Imagination",
    category: "fullstack",
  },
  {
    id: 2,
    title: "NetflixGemini",
    description:
      "A Netflix clone powered by GEMINI API for personalized movie recommendations. Built with React, Redux, and Firebase.",
    image: assets.project2,
    techStack: [
      "React",
      "Redux",
      "Firebase",
      "TMDB API",
      "GEMINI API",
      "TailwindCSS",
    ],
    demoUrl: "https://netflix-gemini.vercel.app/browse",
    githubUrl: "https://github.com/anmolsah/NetflixGemini",
    category: "frontend",
  },
  {
    id: 3,
    title: "Rahi",
    description:
      "Personalized AI-powered trip planner! With RAHi, planning your dream vacation has never been easier or more fun.",
    image: assets.project3,
    techStack: [
      "React",
      "Firebase",
      "GoogleAuth",
      "GoogleMapsAPI",
      "TailwindCSS",
    ],
    demoUrl: "https://traveler-chi.vercel.app/",
    githubUrl: "https://github.com/anmolsah/Traveler",
    category: "frontend",
  },
  {
    id: 4,
    title: "Boardy",
    description:
      "A simple and collaborative online whiteboard for drawing, sketching, and brainstorming.",
    image: assets.project4,
    techStack: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://boaardy.netlify.app/",
    githubUrl:
      "https://github.com/anmolsah/Boardy",
    category: "frontend",
  },
];
