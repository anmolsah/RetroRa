import { assets } from "./../assets/assets";
export const AllProjects = [
  {
    id: 1,
    title: "Imagnation",
    description:
      "A Text-to-Image Generator SaaS platform built with MERN stack and Razorpay integration. Transform your ideas into visuals!",
    image: assets.project1,
    techStack: [
      "ReactJS",
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
    title: "Movieco",
    description:
      "Movieco is powered by GEMINI API and TMDB API for personalized movie recommendations. Built with React, Tailwind, and Supabase.",
    image: assets.project2,
    techStack: [
      "ReactJS",
      "Supabase",
      "TMDB API",
      "GEMINI API",
      "TailwindCSS",
    ],
    demoUrl: "https://movieco-ubb9.vercel.app/",
    githubUrl: "https://github.com/anmolsah/movieco/tree/main/movieco",
    category: "frontend",
  },
  {
    id: 3,
    title: "Rahi",
    description:
      "Personalized AI-powered trip planner! With RAHi, planning your dream vacation has never been easier or more fun.",
    image: assets.project3,
    techStack: [
      "ReactJS",
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
    githubUrl: "https://github.com/anmolsah/Boardy",
    category: "frontend",
  },
  {
    id: 5,
    title: "VilaCodeReviewer",
    description:
      "A code reviewer that reviews code, finds bugs, fixes them, and suggests other possibilities to improve the code. Utilizes Gemini's latest model for code review.",
    image: assets.project5,
    techStack: ["ReactJS", "TailwindCSS", "GEMINI API", "NodeJS", "ExpressJS"],
    demoUrl: "https://vila-code-reviewer-um9c.vercel.app/",
    githubUrl: "https://github.com/anmolsah/VilaCodeReviewer-",
    category: "fullstack",
  },

  {
    id: 6,
    title: "Firstissue.dev",
    description:
      "A platform that helps beginners discover genuine, beginner-friendly GitHub issues, bookmark them, and track their open-source journey — powered by GitHub API, Supabase, and React.",
    image: assets.project6 || assets.project7,
    techStack: ["ReactJS", "TailwindCSS", "Github API", "Supabase", "Github OAUTH"],
    demoUrl: "https://www.firstissue.dev/",
    githubUrl: "https://github.com/anmolsah/firstissue.dev",
    category: "fullstack",
  },
];
