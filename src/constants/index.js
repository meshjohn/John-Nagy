const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 57, suffix: "+", label: "Satisfied Clients" },
  { value: 60, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "TypeScript Developer",
    modelPath: "/models/ts-logo.glb",
    scale: 45,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const skills = [
  {
    title: "HTML & CSS",
    date: "Foundation",
    review:
      "Building accessible, semantic, and responsive web interfaces using modern standards.",
    responsibilities: [
      "Semantic HTML5 Markup",
      "Responsive Design with CSS3",
      "Modern Layouts (Flexbox/Grid)",
      "Accessibility Best Practices",
    ],
    imgPath: "/images/exp1.png", // Keeping existing images as placeholders
    logoPath: "/images/logos/vercel.svg", // Placeholder
  },
  {
    title: "JavaScript & TypeScript",
    date: "Core",
    review:
      "Developing robust, scalable, and type-safe application logic for complex features.",
    responsibilities: [
      "ES6+ Features",
      "Type Safety with TypeScript",
      "Async Programming",
      "DOM Manipulation",
    ],
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
  },
  {
    title: "React & Next.js",
    date: "Frameworks",
    review:
      "Creating dynamic, performant, and interactive user experiences with component architectures.",
    responsibilities: [
      "Component-Based Architecture",
      "Server-Side Rendering (SSR)",
      "State Management",
      "Performance Optimization",
    ],
    imgPath: "/images/exp3.png",
    logoPath: "/images/logos/react.png",
  },
  {
    title: "Backend (Node, Express, MongoDB)",
    date: "Server-Side",
    review:
      "Architecting secure, scalable server-side solutions and managing database schemas.",
    responsibilities: [
      "RESTful API Development",
      "Database Schema Design",
      "Authentication & Security",
      "Server Deployment",
    ],
    imgPath: "/images/exp2.png",
    logoPath: "/images/logos/node.png",
  },
  {
    title: "Three.js & WebGL",
    date: "Graphics",
    review:
      "Creating immersive 3D web experiences and interactive visualizations directly in the browser.",
    responsibilities: [
      "3D Scene Management",
      "Shaders & Materials",
      "Performance Optimization",
      "Physics Integration",
    ],
    imgPath: "/images/exp3.png",
    logoPath: "/images/logos/three.png",
  },
];

const projects = [
  {
    id: 1,
    title: "CarePulse",
    subdesc: "Appointment Hospital App with Admin Dashboard.",
    img: "/images/carepulse.jpeg",
    bg: "#e0f7fa",
  },
  {
    id: 2,
    title: "Library Management Platform",
    subdesc: "A comprehensive solution for managing library resources.",
    img: "/images/project2.png",
    bg: "#ffefdb",
  },
  {
    id: 3,
    title: "Physiverse Learning Platform",
    subdesc: "Track engagement and growth across multiple platforms.",
    img: "/images/physiverse.jpeg",
    bg: "",
  },
  {
    id: 4,
    title: "Tasky AI - Create Schedule By the AI Assistant",
    subdesc:
      "An app built with React, GEMINI API, & TailwindCSS for a fast, user friendly experience.",
    img: "/images/taskyai.jpeg",
    bg: "",
  },
  {
    id: 5,
    title: "Signalist - Stock Tracker App",
    subdesc:
      "A directory for Y Combinator startups to showcase their products.",
    img: "/images/signalist.jpeg",
    bg: "#ffe7eb",
  },
  {
    id: 6,
    title: "Travel Agency Dashboard",
    subdesc: "Monitor workouts and diet with personalized recommendations.",
    img: "/images/Travelagency.jpeg", // Reusing image
    bg: "#f3e5f5", // Large card usually doesn't have bg color usage in this design
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about John. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with John was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with John was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. John's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, John is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "John was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "John’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "John was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/GitHub_Invertocat_White_Clearspace.png",
    link: "https://github.com/meshjohn",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    link: "https://www.facebook.com/john.nagy.3958",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/john-nagy-806549395/",
  },
  {
    name: "cv",
    imgPath: "/images/resume.png",
    link: "https://drive.google.com/file/d/1vxQ_WPARvhEfnsbfR2RubtKm_dZW04yO/view?usp=sharing",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  projects,
  counterItems,
  skills,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
