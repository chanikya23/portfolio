import Bitrush from "../assets/projects/Bitrush.png";
import AIchatbot from "../assets/projects/AIchatbot.png";
import jarvis from "../assets/projects/jarvis.png"
import asr from "../assets/projects/asr.png"
export const HERO_CONTENT = `✨ Passionate Frontend Developer crafting responsive, scalable, and modern web applications with a strong focus on intuitive UI/UX design.`;
export const ABOUT_TEXT = `I am a Frontend Developer with 2+ years of professional experience, specializing in building and optimizing scalable, responsive, and user-centric web applications. My expertise includes JavaScript (ES6+), React.js, Redux Toolkit, HTML5, CSS3, Bootstrap, Tailwind CSS, and Material UI, enabling me to deliver modern, clean, and interactive UI designs.

I have successfully developed real-time dashboards using Chart.js, implemented REST API integrations for seamless data handling, and built cross-device compatible applications that enhance user experience. Alongside frontend expertise, I have experience working with SQL databases for data management and reporting.

My workflow is powered by industry-standard tools such as Git, GitHub, Jira, Postman, and VS Code, ensuring collaborative development and efficient project delivery. I take pride in writing clean, maintainable code, applying performance optimizations like debouncing, lazy loading, and code splitting to enhance efficiency.

Passionate about UI/UX, problem-solving, and continuous learning, I consistently explore new technologies to stay aligned with modern web standards. My goal is to deliver high-quality solutions that balance technical excellence with real-world business impact.`;

export const EXPERIENCES = [
  {
    year: "Oct 2024 - Apr 2025",
    role: "React JS Developer",
    company: "POSGURU PRIVATE LIMITED",
    description: `I contributed to a cloud-based POS system for retail and restaurant businesses, developing responsive UIs using React.js, Redux, Bootstrap, Chart.JS and Material UI. I integrated RESTful APIs for modules like order management and inventory, ensuring cross-device compatibility. Key projects include a Restaurant Panel with real-time order tracking and billing, and TillApp, a financial tool for transaction tracking and analytics. I used Git, Jira, and Postman for collaboration, focusing on clean code and performance-driven development.`,
    technologies: ["Javascript", "React.js", "Redux", "Material UI", "Bootstrap", "Chart.JS"],
  },
  {
    year: "Apr 2023 - Aug 2024",
    role: "Software - Frontend UI Developer",
    company: "ASU Technologies & Services Pvt Ltd.",
    description: `I was involved in building a modern, responsive e-commerce application using React, JavaScript, and Material UI, with a focus on reusable components and clean code practices. I integrated RESTful APIs for dynamic data rendering with features like filtering, search, and pagination, and managed CRUD operations through modular service layers. I implemented secure authentication using Auth0 with role-based access control and session management. Additionally, I worked with SQL stored procedures and Python Pandas for backend data processing and reporting. My work involved using Git for version control, Jira for agile task management, and collaborating with cross-functional teams to ensure timely and quality feature delivery.`,
    technologies: ["Javascript", "React.js", "Redux", "SCSS", "Material UI"],
  },
  {
    year: "Aug 2024",
    role: "BiteRush",
    company: "Web App (Personal Project)",
    description: `Developed a Swiggy-inspired food delivery app using real-time APIs to display live restaurant data and menus. Designed a responsive UI with React, Bootstrap, and Material UI for a seamless user experience. Used Redux to manage cart state with add/remove functionality across components. Integrated secure authentication and optimized performance for fast, efficient browsing. `,
    technologies: ["JavaScript", "React JS", "Redux", "Tailwind", "Material UI"],
  },
];

export const PROJECTS = [
  
  {
    title: "ASR Solar Mission - Live - Sep 2025",
    image: asr,
    description:
      "I built the ASR Solar Mission website end-to-end with responsive design across all devices. It includes pages like Home, About, Services, Projects, Brands, and Contact, with interactive features such as a mobile call button. The site was deployed using Vercel with DNS setup for production at asrsolarmission.com.",
    technologies: ["HTML", "Bootstrap", "React", "JavaScript", "Git", "Vercel", "DNS setup"],
    link: "https://asrsolarmission.com"
  },
  {
    title: "BiteRush - Web App",
    image: Bitrush,
    description:
      "Built a Swiggy-like food delivery app leveraging real-time APIs to showcase live restaurant data and menus. Created a responsive and user-friendly interface using React, Bootstrap, and Material UI. Implemented Redux for dynamic cart state management and integrated secure authentication for smooth performance.",
    technologies: ["HTML", "Bootstrap", "React", "Redux", "JavaScript"],
  },
  {
    title: "AI Chatbot - Live",
    image: AIchatbot,
    description:"Developed a chatbot for instant user query responses using Gemini AI API,Enabled contextual responses with support for custom data sources.",
    technologies: ["HTML", "CSS", "JavaScript", "Gemini AI API"],
    link: "https://aichatbot-smoky-five.vercel.app/"
  },
  {
    title: "Jarvis - Personal Voice assistance",
    image: jarvis,
    description:
      "Developed a Python-based voice assistant for laptops, enabling hands-free interaction through voice commands. Integrated speech recognition libraries like Speech-Recognition and PocketSphinx to convert voice to text. Utilized NLP tools such as NLTK and Speech Recognition to interpret user intent and execute commands effectively.",
    technologies: ["Python", "NLP","Speech Recognition","Pyttsx3", "OS", ],
  },
];

export const CONTACT = {
  address: "Hyderabad ",
  phoneNo: "+91 83673-39798",
  email: "mallachanikya22@gmail.com",
};
