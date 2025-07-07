import Bitrush from "../assets/projects/Bitrush.png";
import Food from "../assets/projects/Food_delivery.png";
import jarvis from "../assets/projects/jarvis.png"

export const HERO_CONTENT = `Passionate Frontend Developer specializing in crafting responsive, scalable, and modern web applications with a strong focus on intuitive UI development.`;
export const ABOUT_TEXT = `I am a Frontend Developer with over 2+ years of experience specializing in building and optimizing scalable, responsive web applications. I have strong expertise in JavaScript, React.js, Redux, HTML5, CSS3, Bootstrap, Tailwind CSS, and Material UI. 
I focus on creating user-friendly interfaces, integrating RESTful APIs, and ensuring cross-device compatibility with a keen eye on performance and responsiveness. 
I designed some of dashboards using the Chart.JS with real time fetching data. 
I am also skilled in working with SQL databases and tools like Git, GitHub, Postman, Jira, and VS Code. 
I am passionate about writing clean, efficient code, solving technical problems, and continuously enhancing my skills through learning and real-world projects.
I am committed to delivering high-quality solutions that align with both user expectations and modern web standards.`;

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
    title: "BiteRush - Web App",
    image: Bitrush,
    description:
      "Built a Swiggy-like food delivery app leveraging real-time APIs to showcase live restaurant data and menus. Created a responsive and user-friendly interface using React, Bootstrap, and Material UI. Implemented Redux for dynamic cart state management and integrated secure authentication for smooth performance.",
    technologies: ["HTML", "TailwindCSS", "React", "Redux", "JavaScript"],
  },
  {
    title: "HungryHub Food Delivery Website",
    image: Food,
    description:
      "A modern food delivery platform designed to provide users with a seamless and intuitive experience when browsing restaurant menus, placing orders, and tracking deliveries. Designed in responsive way to fit for every screen size.",
    technologies: ["HTML", "CSS", "React", "JavaScript"],
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
