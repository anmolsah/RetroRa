// Project interface
export const Project = {
  id: 0, // Number: Unique identifier for the project
  title: "", // String: Title of the project
  description: "", // String: Description of the project
  image: "", // String: URL to the project image
  techStack: [], // Array of strings: Technologies used in the project
  demoUrl: "", // String: URL to the live demo
  githubUrl: "", // String: URL to the GitHub repository
  category: "", // String: Category of the project
};

// Skill interface
export const Skill = {
  name: "", // String: Name of the skill
  icon: "", // String: URL or name of the icon
  proficiency: 0, // Number: Proficiency level (e.g., percentage)
  years: 0, // Number: Years of experience
  category: "", // String: Either 'Frontend', 'Backend', or 'Tools'
};

// FreelanceProject interface
export const FreelanceProject = {
  id: 0, // Number: Unique identifier for the freelance project
  title: "", // String: Title of the freelance project
  description: "", // String: Description of the freelance project
  image: "", // String: URL to the project image
  technologies: [], // Array of strings: Technologies used in the freelance project
  liveUrl: "", // String: URL to the live project
  githubUrl: "", // String: URL to the GitHub repository
};
