import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  quick,
  
  datazip,
  money,
  login,
  
} from "../assets";


export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  }
];

const experiences: TExperience[] = [
  {
    title: "Developer Relation(DevRel)",
    companyName: "Datazip",
    icon: datazip,
    iconBg: "#383E56",
    date: "Dec 2024 - Jan 2025",
    points: [
      "Hands-on experience with Onestack and Olake, focusing on data lake and warehouse management.",
      "Implemented data transformation workflows, including normalization, denormalization, and cleaning.",
      "Conducted competitive analysis to benchmark Datazip position in the no-code data engineering market.",
      "Contributed to internal documentation, onboarding guides, and technical blogs on modern data",
    ]
  }
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "SmartStack- The QuickAI",
    description:
      "Web application offering different AI tools like article generator, blog title generator, image creator, and resume reviewer allowing users to generate contents and images.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: quick,
    sourceCodeLink: "https://github.com/Pavithra21502/QuickAI-Full-Stack",
  },
  {
    name: "Neon Themed Login Form",
    description:
      " A Neon-Themed  based Login Page with modern and visually striking user interface designed to enhance user experience through vibrant colors and glowing effects. ",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
    ],
    image: login,
    sourceCodeLink: "https://github.com/Pavithra21502/Neon-Login-Form--Html-Css",
  },
  {
    name: "Money Tracking App",
    description:
      " User friendly web based solution designed to help individuals manage and monitor their daily financial activities. Primary goal is to provide users to track their income, expenses, and savings, enabling better financial decision-making.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
    ],
    image: money,
    sourceCodeLink: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
