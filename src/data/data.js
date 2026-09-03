/**
 * Centralized data file for the portfolio.
 * Edit this file to customize your personal information,
 * skills, projects, and social links.
 */

export const personalInfo = {
  name: "Rushikesh Shivale",
  firstName: "Rushi",
  role: "Full Stack Developer",
  tagline: "Building scalable web applications from front to back",
  heroDescription:
    "Full Stack Developer passionate about building end-to-end web applications with modern technologies. From pixel-perfect UIs to robust server architectures — I deliver quality at every layer.",
  aboutDescription:
    "I'm a Full Stack Developer with a passion for creating seamless digital experiences. With expertise spanning frontend frameworks, backend systems, and database design, I build applications that are not only visually appealing but also performant and scalable. I thrive on solving complex problems and turning ideas into production-ready solutions.",
  email: "rushikeshshivale@gmail.com",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "JavaScript", icon: "⚡", category: "Frontend" },
  { name: "HTML & CSS", icon: "🌐", category: "Frontend" },
  { name: "TypeScript", icon: "🔷", category: "Frontend" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "Express.js", icon: "🚀", category: "Backend" },
  { name: "MongoDB", icon: "🍃", category: "Backend" },
  { name: "REST APIs", icon: "🔗", category: "Backend" },
  { name: "Git & GitHub", icon: "🔀", category: "Tools" },
  { name: "Bootstrap", icon: "📐", category: "Frontend" },
  { name: "Responsive Design", icon: "📱", category: "Frontend" },
  { name: "UI/UX Design", icon: "✨", category: "Tools" },
];

export const projects = [
  {
    id: 1,
    title: "RGP Group Website",
    category: "Full Stack",
    description:
      "Developed and maintained the official website for RGP Group, focusing on responsive design, user experience, and seamless navigation to showcase company services and information.",
    techStack: ["HTML", "CSS", "JavaScript", "Node.js"],
    liveUrl: "https://rgpgroup.in/",
  },
  {
    id: 2,
    title: "Chirag Editings Website",
    category: "Frontend",
    description:
      "Developed a professional website for Chirag Editings, featuring a modern layout, portfolio showcase, and user-friendly navigation to highlight video editing services and client projects.",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "https://chirageditings.com/",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    category: "Full Stack",
    description:
      "Built a modern, single-page portfolio application with React and Vite. Features smooth scrolling, responsive design, component-based architecture, and EmailJS integration.",
    techStack: ["React", "CSS Modules", "Vite", "EmailJS"],
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Coming Soon",
    category: "Full Stack",
    description:
      "An exciting full stack project currently in development — featuring a React frontend, Node.js backend with Express, and MongoDB database. Stay tuned for updates!",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "#",
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rushikesh-shivale-155183259",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/RushiShivale",
    icon: "github",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/rushikesh_shivale_patil/",
    icon: "instagram",
  },
];

export const emailjsConfig = {
  serviceId: "service_8m5sq5p",
  templateId: "template_0fljpog",
  publicKey: "fNrrPTC5iNHoLavsA",
};
