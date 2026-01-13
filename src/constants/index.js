
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  dytorScreenshot,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Joshua's logo
import tekisky from "../assets/logo-joshua.jpg";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "business",
    title: "Solutions",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Product Thinker",
    icon: creator,
  },
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Fast Shipper",
    icon: backend,
  },
];

const technologies = [
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
    name: "Framer Motion",
    icon: framer,
  },
  {
    name: "GSAP",
    icon: gsap,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const experiences = [
  {
    title: "Frontend Developer · Hackathon Winner",
    company_name: "Enugu Tech Festival",
    icon: tekisky,
    iconBg: "#915EFF",
    date: "March 2025",
    points: [
      "🏆 Won Enugu Tech Festival hackathon for innovative frontend solution",
      "Built mobile-first UI with modern design principles and smooth animations",
      "Collaborated with cross-functional team to ship functional MVP under time pressure",
      "Demonstrated product thinking and rapid prototyping skills",
    ],
  },
  {
    title: "Frontend Developer · Hackathon Winner",
    company_name: "Innovate to Impact",
    icon: tekisky,
    iconBg: "#E6DEDD",
    date: "November 2024",
    points: [
      "🏆 Won 'Innovate to Impact' hackathon with creative frontend development",
      "Designed and implemented clean, user-friendly interfaces",
      "Shipped polished product under tight deadline with focus on UX",
      "Worked closely with team to deliver impactful solution",
    ],
  },
  {
    title: "Software Engineering Student",
    company_name: "Peaceland University Enugu",
    icon: tekisky,
    iconBg: "#383E56",
    date: "2023 - 2027",
    points: [
      "Studying Software Engineering with focus on modern web development",
      "Completed online courses from Harvard University",
      "Building real-world projects while learning fundamentals",
      "Active in developer community and hackathons",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Joshua's frontend work is exceptional. He ships fast, thinks product-first, and delivers clean, modern UIs that users love.",
    name: "Tech Festival",
    designation: "Hackathon Judge",
    company: "Enugu Tech Festival",
    image: firstTestimonial,
  },
  {
    testimonial:
      "Impressive speed and quality. Joshua built our event platform with a beautiful mobile-first UI and smooth interactions.",
    name: "Event Organizer",
    designation: "Product Lead",
    company: "Live Events Co",
    image: secondTestimonial,
  },
  {
    testimonial:
      "His ability to combine design thinking with fast execution is rare. Joshua doesn't just code, he builds products people want to use.",
    name: "Innovation Team",
    designation: "Hackathon Judge",
    company: "Innovate to Impact",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Dytor.app",
    description:
      "Smart timer and productivity tool for focused work sessions. Clean interface, customizable timers, task tracking, and analytics. Built to help you ship faster and stay in flow without distractions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "productivity",
        color: "green-text-gradient",
      },
      {
        name: "next.js",
        color: "pink-text-gradient",
      },
    ],
    image: dytorScreenshot,
    source_code_link: "https://dytor.app",
  },
  {
    name: "Evena",
    description:
      "Event hosting + ticketing + community platform. Mobile-first liquid glass UI combining Telegram, YouTube, and Luma vibes. Modern event experience with clean design and smooth interactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "white-text-gradient",
      },
      {
        name: "glassmorphism",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  {
    name: "TwitFlow",
    description:
      "AI-powered tweet scheduling assistant built for Web3 developers and creators. Smart scheduling, content optimization, and analytics. Helping creators maintain consistent presence without the grind.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "web3",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
